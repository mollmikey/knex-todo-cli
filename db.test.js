import { beforeAll, beforeEach, expect, test } from 'vitest'
import { getTodos, deleteTodo, completeTodo } from './db.js'
import db from './connection.js'

// - import db functions
// - add knexfile config for 'test' in :memory:
// - import db-config from connection
// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  // console.log('before all')
  await db.migrate.latest()
})
beforeEach(async () => {
  // console.log('before each ')
  await db.seed.run()
})

test.skip('should return an arr of all todos', async () => {
  const todos = await getTodos()
  expect(todos).toHaveLength(3)
})

test.skip('delete todo from table', async () => {
  const delTodos = await deleteTodo(3)
  const todos = await getTodos()
  expect(delTodos).toBe(1)
  expect(todos).toHaveLength(2)
})

test('if todo is completed', async () => {
  await completeTodo(3)
  const todos = await getTodos()
  expect(todos[2].complete).toBe(1)
})
