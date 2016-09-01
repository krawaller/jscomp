import xs from 'xstream'
import {div, p} from '@cycle/dom';
import Field from './field'
import withComponent from './extras'

function view({childsinks:{submit$,DOM}}){
  return xs.combine(submit$.startWith('Steve'),DOM).map(([submission,childvtree])=> div([
    childvtree,
    p('Submitted value: '+submission)
  ]))
}

function App(sources){
  return {
    DOM: view(sources),
    instruction$: xs.of('Enter name')
  }
}

export default withComponent(App,Field,'instruction$')