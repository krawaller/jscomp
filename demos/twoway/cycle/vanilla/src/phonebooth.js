import xs from 'xstream'
import {div,input,p,button} from '@cycle/dom';

function Phonebooth({DOM:{select}}){
  const type$ = select('input')
    .events('input')
    .map(e => e.target.value)
    .startWith('Steve');
  const click$ = select('button')
    .events('click')
    .mapTo('Batman')
  return {
    DOM: xs.merge(type$,button$).map(name=>div([
      input({props:{value:name}}),
      p(['Your name is '+name+'.']),
      button(['Put on costume'])
    ]))
  };
}

export default Phonebooth