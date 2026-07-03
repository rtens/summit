export default class Service {

  constructor(store) {
    this.store = store
    store.init('goals')
    store.init('connections')
  }

  async answer(query, content = null) {
    return this._handle('query', query, content)
  }

  async execute(command, content) {
    await this._handle('command', command, content)
  }

  async _handle(type, message, content) {
    let Handler
    try {
      const module = await import(`./${type}/${message}.js`)
      Handler = module.default
    } catch {
      throw new Error(`Unknown ${type}: ${message}`)
    }
    return new Handler(this.store).handle(content)
  }
}