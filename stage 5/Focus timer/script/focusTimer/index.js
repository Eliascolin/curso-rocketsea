import state from "./state.js"
import * as events from "./events.js"

export function start(minutes,seconds){

console.log(minutes,seconds)

state.minutes = minutes
state.second = seconds

events.registerControls()

}