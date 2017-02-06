import {Block} from 'cyclow'
import {Ticker} from 'graflow'

var lyrics = ['Eeexiiit light', 'Eeenteeer niight', 'Taaake my haaand', "We're off to never never land"]

const Singer = () => Block({
  components: {ticker: Ticker(1500, {initialDelay: true})},
  events: {
    init: () => [['state', pos => 0], 'ticker'],
    ticker: () => pos => (pos + 1) % 3
  },
  view: pos => ({content: lyrics[pos]})
})

export default Singer
