export default class Service {

  constructor(store) {
    this.store = store
    store.init('goals')
    store.init('connections')
  }

  async answer(query, content = null) {
    return this._handle('queries', query, content)
  }

  async execute(command, content) {
    await this._handle('commands', command, content)
  }

  async _handle(type, message, content) {
    const Handler = (await import(`./${type}/${message}.js`)).default
    return new Handler(this.store).handle(content)
  }
} 