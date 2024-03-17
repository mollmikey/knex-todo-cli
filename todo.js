#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const newTodo = userInputs[3]
const updatedTodo = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'add':
    await commands.add(newTodo)
    break

  case 'update':
    await commands.update(newTodo, updatedTodo)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
