import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import makeIteratorDriver from './extras'
import {lyrics} from '../../../lyrics'
import Singer from './singer'

run(Singer, {
  DOM: makeDOMDriver('#app'),
  line$: makeIteratorDriver(lyrics)
})
