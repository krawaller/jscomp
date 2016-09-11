import xs from 'xstream'
import {div, button} from '@cycle/dom'

let teams = ['Valor', 'Mystic', 'Instinct']

function Voter ({DOM, store}) {
  const vote$ = DOM.select('button').events('click').map(e => e.target.getAttribute('data-t'))
  return {
    DOM: xs.merge(vote$, store).map(t => div(
      teams.map((_, n) => button({attrs: {'data-t': n, 'class': (n === +t ? 'active' : '')}}, [teams[n]])))
    ),
    store: vote$
  }
}

export default Voter
