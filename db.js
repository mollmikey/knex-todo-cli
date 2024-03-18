import db from './connection.js'

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export async function deleteTodo(id) {
  return await db('todos').del().where('id', id)
}

export async function addTodo(data) {
  // console.log(data)
  return await db('todos').insert({ task: data })
}

export async function updateTodo(id, data) {
  return await db('todos').update({ task: data }).where('id', id)
}

export async function searchTodo(data) {
  return await db('todos').select('task').where('task', 'LIKE', `%${data}%`)
}

export async function completeTodo(id) {
  return await db('todos').update({ complete: true }).where('id', id)
}

export function close() {
  db.destroy()
}

//console.log(await searchTodo('Eat'))
