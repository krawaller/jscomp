import {Block} from 'cyclow'

const Counter = () => Block({
  events: {
    init: () => count => 3,
    click: () => count => count + 1
  },
  view: count => ({content: [
    {content: `${count} bottles of beer on the wall`},
    {tag: 'button', on: {click: ['click']}, content: 'But more'}
  ]})
})

export default Counter
