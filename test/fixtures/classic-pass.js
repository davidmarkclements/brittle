import test from '../../index.js'

// test('classic, no plan', async ({ pass }) => {
//   pass()
// })

test('classic, plan', async ({ pass, plan, comment }) => {
  plan(1)
  comment('FUCK SAKE')
  pass()
})

// test('classic, plan w/comment', async ({ pass, plan }) => {
//   plan(1, 'comment')
//   pass()
// })
