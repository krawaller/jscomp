import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import Form from './form'

run(Form, { DOM: makeDOMDriver('#app') });