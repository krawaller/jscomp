import {Block} from 'cyclow'
import {Ticker, Iterator, Chain} from 'graflow'

import {lyrics} from '../../../lyrics'

const Singer = () => Block({
  components: {
    lineTicker: Chain(Ticker(1500), Iterator(lyrics, {cyclic: true}))
  },
  events: {
    init: () => 'lineTicker',
    lineTicker: line => text => line
  },
  view: text => ({content: text})
})

export default Singer
