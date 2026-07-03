import Handler from '../handler.js'

export default class extends Handler {

  async handle(content) {
    return {
      goals: this.store.values('goals')
        .map(v => ({...v, status: 'unknown'})),
      connections: this.store.values('connections')
    }
  }
}
