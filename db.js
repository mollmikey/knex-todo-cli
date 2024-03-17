import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
async function deleteTodo(id) {
  return await db('todos').del().where('id', id)
}

export function close() {
  db.destroy()
}

console.log(await deleteTodo(1))
