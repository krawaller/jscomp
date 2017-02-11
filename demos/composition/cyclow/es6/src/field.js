import {Block} from 'cyclow'
import Confirm from './confirm'

const Field = () => Block({
  outputs: ['submission'],
  components: {confirm: Confirm()},
  on: {
    init: instruction => [state => ({instruction, input: ''}), 'confirm.init'],
    text: newText => state => ({...state, input: newText}),
    'confirm.confirmation': (_, {input}) => [
      state => ({...state, input: ''}),
      ['out.submission', input]
    ],
    state: ({input}) => [['confirm.disabled', !input]]
  },
  view: ({instruction, input}, {confirm}) => ({content: [
    `${instruction}:`,
    {
      tag: 'input',
      attrs: {value: input},
      on: {keyup: (e, next) => next(['text', e.target.value])}
    },
    confirm
  ]})
})

export default Field
