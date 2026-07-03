export default class Handler {

  constructor(store) {
    this.store = store
  }

  async handle(content) {
    throw new Error('Not implemented')
  }
}