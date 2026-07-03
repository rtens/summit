import Cli from './cli.js'
import Service from './service.js'
import Store from './store.js'

const service = new Service(new Store('./db.sqlite3'))
await new Cli(service).run()