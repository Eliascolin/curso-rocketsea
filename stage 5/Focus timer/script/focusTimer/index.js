import state from "./state.js"
import * as events from "./events.js"
import * as timer from './timer.js'
export function start(minutes,seconds){

console.log(minutes,seconds)

state.minutes = minutes
state.seconds = seconds

timer.updateDisplay(1,4)

events.registerControls()

}