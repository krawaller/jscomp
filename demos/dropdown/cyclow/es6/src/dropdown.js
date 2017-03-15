import {Block} from 'cyclow'

import {goods} from '../../../goods.js'

const Dropdown = () => Block({
  on: {
    'in.init': () => state => ({goods, chosen: goods[0]}),
    'dom.select': index => state => ({...state, chosen: goods[index]})
  },
  view: ({goods, chosen}) => ({
    attrs: {id: 'app', class: chosen.type},
    content: [
      'I postit that ',
      {
        tag: 'select',
        on: {change: (e, next) => next({select: e.selectedIndex})},
        content: goods.map(good => ({tag: 'option', content: good.name}))
      },
      chosen.quote
    ]
  })
})

export default Dropdown
