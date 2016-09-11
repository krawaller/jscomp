import {div, input} from '@cycle/dom'
import Confirm from './confirm'
import xs from 'xstream'
import withComponent from './extras'

const intent = (DOM, confirm$) => {
  const input$ = DOM.select('.field').events('input')
  const newValue$ = input$
    .map(e => ({type: 'INPUT', data: e.target.value}))
  const submit$ = input$
    .map(i => confirm$.map(s => ({type: 'SUBMIT', data: i.target.value})))
    .flatten()
  return xs.merge(submit$, newValue$)
}

const model = action$ => action$.fold((state, action) => {
  switch (action.type) {
    case 'INPUT': return {...state, input: action.data}
    case 'SUBMIT': return {submission: action.data, input: ''}
    default: return state
  }
}, {submission: '', input: ''})

const view = (state$, confirmvtree$, instruction$) =>
  xs.combine(state$, confirmvtree$, instruction$).map(([state, confirmvtree, instruction]) =>
    div('.child', [
      instruction + ': ',
      input('.field', {props: {value: state.input}}),
      confirmvtree
    ])
  )

function Field (sources) {
  const action$ = intent(sources.DOM, sources.childsinks.confirm$)
  const state$ = model(action$)
  const vtree$ = view(state$, sources.childsinks.DOM, sources.instruction$)
  return {
    DOM: vtree$,
    submit$: action$.filter(a => a.type === 'SUBMIT').map(a => a.data),
    disabled$: action$.map(a => a.type === 'SUBMIT' || !a.data)
  }
}

export default withComponent(Field, Confirm, 'disabled$')
