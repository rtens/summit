import Handler from '../handler.js'

export default class extends Handler {

  async handle(content) {
    return {
      goals: this.store.values('goals'),
      connections: this.store.values('connections')
    }
  }
}