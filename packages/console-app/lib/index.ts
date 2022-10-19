'use strict'
import corelogicBootstrap, { ApplicationShell } from '../../core-logic/lib/index.js'

console.time('[CoreLogic] Time to execute: ') // TODO We shouldn't need "/lib/index.js" here, because that is specified in package.json "main". Quick Google suggest Babel can be used to resolve "directory imports" when compiling from typescript.

const appConfig = { clRuntime: { applicationShell: ApplicationShell.ConsoleApp } }

const coreLogic = corelogicBootstrap(appConfig)

function appAsJSON () {
  return JSON.stringify({ coreLogic })
}

console.warn('[CoreLogic] I hope this is the first line in the console! ¯\\_(ツ)_/¯ ')
console.log('[CoreLogic] Initializing application...')

console.log('[CoreLogic] JSON', appAsJSON())

coreLogic.clAPI.myFirstFunction()

console.log('[CoreLogic] Execution complete.')
console.timeEnd('[CoreLogic] Time to execute: ')
