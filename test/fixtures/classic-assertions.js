import test from '../../index.js'

test('passing (default messages)', async (assert) => {
  assert.pass()
  assert.ok(true)
  assert.absent(false)
  assert.is(1, 1)
  assert.is.coercively('1', 1)
  assert.not(1, 2)
  assert.not.coercively(1, '2')
  assert.alike({ a: 1 }, { a: 1 })
  assert.alike.coercively({ a: 1 }, { a: '1' })
  assert.unlike({ a: 1 }, { a: 2 })
  assert.unlike.coercively({ a: 1 }, { a: '2' })
  assert.execution(Promise.resolve('y'))
  assert.execution(async () => 'y')
  assert.execution(() => 'y')
  assert.exception(Promise.reject(Error('n')))
  assert.exception(async () => { throw Error('n') }, /n/)
  assert.exception(() => { throw Error('n') })
})

test('passing (custom messages)', async (assert) => {
  assert.pass('peanut')
  assert.ok(true, 'brittle')
  assert.absent(false, 'is')
  assert.is(1, 1, 'an')
  assert.is.coercively('1', 1, 'often')
  assert.not(1, 2, 'overlooked')
  assert.not.coercively(1, '2', 'tasty')
  assert.alike({ a: 1 }, { a: 1 }, 'treat')
  assert.alike.coercively({ a: 1 }, { a: '1' }, 'you should')
  assert.unlike({ a: 1 }, { a: 2 }, 'try it')
  assert.unlike.coercively({ a: 1 }, { a: '2' }, 'sometime')
  assert.execution(Promise.resolve('y'), 'but')
  assert.execution(async () => 'y', 'not really')
  assert.execution(() => 'y', 'personally')
  assert.exception(Promise.reject(Error('n')), 'I have not had it')
  assert.exception(async () => { throw Error('n') }, 'in a long', /n/)
  assert.exception(() => { throw Error('n') }, /n/, 'long time')
})

test('failing (default messages)', async (assert) => {
  assert.fail()
  assert.ok(false)
  assert.absent(true)
  assert.is(1, 2)
  assert.is.coercively('2', 1)
  assert.not(1, 1)
  assert.not.coercively(1, '1')
  assert.alike({ a: 1 }, { a: 2 })
  assert.alike.coercively({ a: 1 }, { a: '2' })
  assert.unlike({ a: 2 }, { a: 2 })
  assert.unlike.coercively({ a: 2 }, { a: '2' })
  assert.execution(Promise.reject(Error('n')))
  assert.execution(async () => { throw Error('n') })
  assert.execution(() => { throw Error('n') })
  assert.exception(Promise.resolve('y'))
  assert.exception(Promise.reject('n'), /y/)
  assert.exception(async () => 'y')
  assert.exception(() => 'y')
})

test('failing (custom messages)', async (assert) => {
  assert.fail('peanut')
  assert.ok(false, 'brittle')
  assert.absent(true, 'is')
  assert.is(1, 2, 'an')
  assert.is.coercively('2', 1, 'often')
  assert.not(1, 1, 'overlooked')
  assert.not.coercively(1, '1', 'tasty')
  assert.alike({ a: 1 }, { a: 2 }, 'treat')
  assert.alike.coercively({ a: 1 }, { a: '2' }, 'you should')
  assert.unlike({ a: 2 }, { a: 2 }, 'try it')
  assert.unlike.coercively({ a: 2 }, { a: '2' }, 'sometime')
  assert.execution(Promise.reject(Error('n')), 'but')
  assert.execution(async () => { throw Error('n') }, 'not really')
  assert.execution(() => { throw Error('n') }, 'personally')
  assert.exception(Promise.resolve('y'), 'I have not had it')
  assert.exception(async () => 'y', 'in a long')
  assert.exception(() => 'y', 'long time')
})

test('passing and failing mixed', async (assert) => {
  assert.fail()
  assert.pass()
  assert.ok(false)
  assert.ok(true)
  assert.absent(true)
  assert.absent(false)
  assert.is(1, 2)
  assert.is(1, 1)
  assert.is.coercively('2', 1)
  assert.is.coercively('1', 1)
  assert.not(1, 1)
  assert.not(1, 2)
  assert.not.coercively(1, '1')
  assert.not.coercively(1, '2')
  assert.alike({ a: 1 }, { a: 2 })
  assert.alike({ a: 1 }, { a: 1 })
  assert.alike.coercively({ a: 1 }, { a: '2' })
  assert.alike.coercively({ a: 1 }, { a: '1' })
  assert.unlike({ a: 2 }, { a: 2 })
  assert.unlike({ a: 1 }, { a: 2 })
  assert.unlike.coercively({ a: 2 }, { a: '2' })
  assert.unlike.coercively({ a: 1 }, { a: '2' })
  assert.execution(Promise.resolve('y'))
  assert.execution(Promise.reject(Error('n')))
  assert.execution(async () => 'y')
  assert.execution(async () => { throw Error('n') })
  assert.execution(() => 'y')
  assert.execution(() => { throw Error('n') })
  assert.exception(Promise.resolve('y'))
  assert.exception(Promise.reject(Error('n')))
  assert.exception(async () => 'y')
  assert.exception(async () => { throw Error('n') })
  assert.exception(() => 'y')
  assert.exception(() => { throw Error('n') })
})
