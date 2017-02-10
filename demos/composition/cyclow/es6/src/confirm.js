import {Block} from 'cyclow'

const viewConfirm = () => [
  {tag: 'button', content: 'Confirm', on: {click: 'confirm'}},
  {tag: 'button', content: 'Cancel', on: {click: 'cancel'}}
]

const viewDefault = mode => ({
  tag: 'button',
  content: 'Submit',
  attrs: {disabled: mode === 'disabled'},
  on: {click: 'maybe'}
})

const Confirm = () => Block({
  inputs: ['disabled'],
  outputs: ['confirmation'],
  on: {
    init: () => state => ({mode: 'disabled'}),
    disabled: (disabled, {mode}) => {
      if (disabled) {
        return state => ({mode: 'disabled'})
      } else if (mode === 'disabled') {
        return state => ({mode: 'waiting'})
      }
    },
    maybe: () => state => ({mode: 'confirm'}),
    cancel: () => state => ({mode: 'waiting'}),
    confirm: () => [state => ({mode: 'waiting'}), ['out.confirmation']]
  },
  view: ({mode}) => mode === 'confirm' ? viewConfirm() : viewDefault(mode)
})

export default Confirm
