import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import makeFocusDriver from './extras'
import Phonebooth from './phonebooth'

run(Phonebooth, {
  DOM: makeDOMDriver('#app'),
  focus: makeFocusDriver('#app input')
})
