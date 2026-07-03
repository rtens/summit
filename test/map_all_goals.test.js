import test from 'ava'
import Service from '../src/service.js'
import Store from '../src/store.js'

test('one', async t => {
  const service = new Service(Store.in_memory())
  await service.execute('set_objective', {
    name: 'foo',
    description: 'Foo bar'
  })

  const answer = await service.answer('map')
  t.deepEqual(answer, {
    goals: [{
      name: 'foo',
      description: 'Foo bar'
    }],
    connections: []
  })
})