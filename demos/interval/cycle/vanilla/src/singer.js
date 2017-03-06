import xs from 'xstream'
import {div} from '@cycle/dom'

import {lyrics} from '../../../lyrics'

function Singer (sources) {
  let song$ = xs.periodic(1500).startWith(-1).map(
    n => lyrics[(n + 1) % lyrics.length]
  )
  return {
    DOM: song$.map(line => div(line))
  }
}

export default Singer
