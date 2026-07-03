import test from 'ava'
import Service from '../src/service.js'
import Store from '../src/store.js'

test('first Objective', async t => {
  const service = new Service(Store.in_memory())
  await service.execute('set_objective', {
    name: 'foo',
    state: 'Foo bar'
  })

  const answer = await service.answer('map')
  t.deepEqual(answer, {
    goals: [{
      name: 'foo',
      state: 'Foo bar'
    }],
    connections: []
  })
})

test('second Objective', async t => {
  const service = new Service(Store.in_memory())
  await service.execute('set_objective', {
    name: 'foo',
    state: 'Foo bar'
  })
  await service.execute('set_objective', {
    name: 'bar',
    state: 'A Bar'
  })

  const answer = await service.answer('map')
  t.deepEqual(answer, {
    goals: [{
      name: 'bar',
      state: 'A Bar'
    }, {
      name: 'foo',
      state: 'Foo bar'
    }],
    connections: []
  })
})