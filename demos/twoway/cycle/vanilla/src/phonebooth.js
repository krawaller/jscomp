import xs from 'xstream'
import {div,input,p,button} from '@cycle/dom';

function Phonebooth({DOM}){
  const type$ = DOM.select('input')
    .events('input')
    .map(e => e.target.value)
    .startWith('Steve');
  const click$ = DOM.select('button')
    .events('click')
    .mapTo('Batman')
  return {
    DOM: xs.merge(type$,click$).map(name=>div([
      input({props:{value:name}}),
      p(['Your name is '+name+'.']),
      button(['Put on costume'])
    ])),
    focus: click$
  };
}

export default Phonebooth