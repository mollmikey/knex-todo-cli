import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export async function deleteTodo(id) {
  return await db('todos').del().where('id', id)
}

export async function addTodo(data) {
  console.log(data)
  return await db('todos').insert({ task: data })
}

export function close() {
  db.destroy()
}

// console.log(await addTodo({ task: 'Greet poeple' }))
