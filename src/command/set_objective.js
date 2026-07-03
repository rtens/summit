import Handler from '../handler.js'

export default class extends Handler {

  handle({ name, state }) {
    this.store.add('goals', name,
      { name, state })
  }
}