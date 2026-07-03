import Handler from '../handler.js'

export default class extends Handler {

  handle({ name, description }) {
    this.store.add('goals', name,
      { name, description })
  }
}
