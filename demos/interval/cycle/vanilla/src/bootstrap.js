import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import Singer from './singer'

run(Singer, { DOM: makeDOMDriver('#app') })
