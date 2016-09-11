import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import makeIntervalDriver from './extras'

import Singer from './singer'

run(Singer, {
  DOM: makeDOMDriver('#app'),
  pos$: makeIntervalDriver(4, 1500)
})
