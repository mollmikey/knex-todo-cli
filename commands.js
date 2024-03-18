import { getTodos, close, addTodo, updateTodo, searchTodo } from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function add(data) {
  try {
    await addTodo(data)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function update(id, data) {
  try {
    // console.log(id, data)
    await updateTodo(id, data)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function search(data) {
  try {
    const todos = await searchTodo(data)
    console.log(todos)
    // if (todos == []) {
    //   console.log('Not found.')
    // } else {
    //   console.log(todos)
    // }
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
