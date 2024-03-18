#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const input3 = userInputs[3]
const updatedTodo = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'add':
    await commands.add(input3)
    break

  case 'update':
    await commands.update(input3, updatedTodo)
    break

  case 'search':
    await commands.search(input3)
    break

  case 'complete':
    await commands.complete(input3)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
