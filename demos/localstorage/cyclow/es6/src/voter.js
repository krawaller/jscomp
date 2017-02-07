import { Block } from 'cyclow'
const {localStorage} = window

let teams = ['Valor', 'Mystic', 'Instinct']

const Voter = () => Block({
  events: {
    init: () => team => +(localStorage.getItem('JSCOMPVOTE') || 1),
    click: i => team => {
      localStorage.setItem('JSCOMPVOTE', i)
      return i
    }
  },
  view: team => ({content: teams.map((name, i) => ({
    tag: 'button',
    attrs: {class: team === i ? 'active' : ''},
    on: {click: (v, next) => next(['click', i])},
    content: name
  }))})
})

export default Voter
