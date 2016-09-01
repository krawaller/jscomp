import xs from 'xstream'
import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import App from './app'

run(App, { DOM: makeDOMDriver('#app') });