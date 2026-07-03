import { DatabaseSync } from 'node:sqlite'

export default class Store {

  static in_memory() {
    return new Store(new DatabaseSync(':memory:'))
  }

  constructor(database) {
    this.db = database
  }

  init(bucket) {
    this.db.exec(`CREATE TABLE IF NOT EXISTS ${bucket} (
      key TEXT PRIMARY KEY,
      value TEXT
    ) STRICT`)
  }

  add(bucket, key, value) {
    this.db.prepare(`INSERT INTO ${bucket} (key, value) VALUES (?, ?)`).run(key, JSON.stringify(value))
  }

  all(bucket) {
    const map = {}
    const all = this.db.prepare(`SELECT * FROM ${bucket} ORDER BY key`).all()
    for (const { key, value } of all) {
      map[key] = JSON.parse(value)
    }
    return map
  }

  values(bucket) {
    return Object.values(this.all(bucket))
  }
}