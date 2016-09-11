import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import makeStoreDriver from './extras'

import Voter from './voter'

run(Voter, {
  DOM: makeDOMDriver('#app'),
  store: makeStoreDriver('JSCOMPVOTE')
})
