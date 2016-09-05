import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import Clicker from './clicker'

run(Clicker, {
  DOM: makeDOMDriver('#app'),
});