import {
  getTodos,
  close,
  addTodo,
  updateTodo,
  searchTodo,
  completeTodo,
} from './db.js'

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

export async function complete(id) {
  try {
    // console.log(id, data)
    await completeTodo(id)
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
    if (todos.length === 0) {
      console.log('Not found.')
    } else {
      console.log(todos)
    }
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    let trueFalseVal = false
    if (todo.complete === 1) {
      trueFalseVal = true
    }
    console.info(`${todo.id}: ${todo.task}, completed: ${trueFalseVal}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
