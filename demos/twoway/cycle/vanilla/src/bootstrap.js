import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import Phonebooth from './phonebooth'

run(Phonebooth, { DOM: makeDOMDriver('#app') });