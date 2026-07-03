import process from 'process'
import readline from 'readline'
import { parse, stringify } from 'yaml'

export default class Cli {

  constructor(service) {
    this.service = service
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  async run() {
    while (true) {
      process.stdout.write('> ')
      const input = await this.rl[Symbol.asyncIterator]().next()
      if (input.done) return

      let line = input.value
      let all = line
      while (line) {
        const input = await this.rl[Symbol.asyncIterator]().next()
        if (input.done) return
        line = input.value

        all += ' \n' + input.value
      }

      await this.process(all)
    }
  }

  async process(input) {
    try {
      let [message, content] = input.split(/ (.*)/s)
      if (content) content = parse(content)

      if (input.startsWith('!')) {
        message = message.slice(1)
        await this.service.execute(message, content)

      } else {
        const answer = await this.service.answer(message, content)
        return console.log(stringify(answer))
      }
    } catch (error) {
      return console.error(error)
    }
  }
}