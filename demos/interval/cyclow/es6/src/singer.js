import {Block} from 'cyclow'
import {Ticker} from 'graflow'

import {lyrics} from '../../../lyrics'

const Singer = () => Block({
  components: {ticker: Ticker(1500, {initialDelay: true})},
  events: {
    init: () => [['state', pos => 0], 'ticker'],
    ticker: () => pos => (pos + 1) % lyrics.length
  },
  view: pos => ({content: lyrics[pos]})
})

export default Singer
