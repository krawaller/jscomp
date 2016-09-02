import xs from 'xstream'
import {div,input,p,button} from '@cycle/dom';

function intent({DOM}){
  const type$ = DOM.select('input')
    .events('input')
    .map(e => e.target.value)
    .startWith('Steve');
  const button$ = DOM.select('button')
    .events('click')
    .mapTo('Batman')
  return xs.merge(type$,button$)
}

function Phonebooth(sources){
  const name$ = intent(sources)
  return {
    DOM: name$.map(name=>div([
      input({props:{value:name}}),
      p([name]),
      button(['Put on costume'])
    ]))
  }
}

export default Phonebooth