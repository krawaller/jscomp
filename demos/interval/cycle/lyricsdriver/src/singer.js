import {div} from '@cycle/dom'

function Singer ({line$}) {
  return {
    DOM: line$.map(line => div(line))
  }
}

export default Singer
