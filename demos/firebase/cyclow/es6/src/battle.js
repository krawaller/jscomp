import {Block} from 'cyclow'
import {Component} from 'graflow'
import {subscribe, nudge} from '../../../nudger'

const nudger = Component({
  inputs: ['init', 'nudge'],
  components: {
    nudger: Component(nudge),
    subscriber: Component((v, next) => subscribe(val => next(val)))
  },
  connections: [
    ['in.init', 'subscriber'],
    ['subscriber', 'out'],
    ['in.nudge', 'nudger']
  ]
})

const teamButtons = state => state.teams.map((team, i) => ({
  tag: 'button',
  on: { click: ['click', team] },
  content: `${team} ${state.status[team]}`
}))

const Battle = () => Block({
  components: {nudger},
  events: {
    init: () => [
      'nudger.init',
      state => ({
        loaded: false,
        status: {},
        teams: []
      })
    ],
    click: team => [['nudger.nudge', team]],
    nudger: val => state => ({
      loaded: true,
      teams: Object.keys(val).sort(),
      status: val
    })
  },
  view: state => ({content: state.loaded
    ? teamButtons(state)
    : 'Fetching data...'
  })
})

export default Battle
