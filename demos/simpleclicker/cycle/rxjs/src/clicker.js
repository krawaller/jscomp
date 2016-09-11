import {div, button} from '@cycle/dom'

function Clicker ({DOM}) {
  const click$ = DOM.select('button').events('click')
  const count$ = click$.mapTo(1).startWith(3).scan((acc, seed) => (acc || 0) + seed)
  return {
    DOM: count$.map(count => div([
      div([count + ' bottles of beer on the wall']),
      button(['Buy more'])
    ]))
  }
}

export default Clicker
