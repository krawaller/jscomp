import {Block} from 'cyclow'

const Phonebooth = () => Block({
  on: {
    'in.init': () => state => ({name: 'Steve'}),
    'dom.text': text => state => ({name: text}),
    'dom.click': () => ({
      state: () => ({name: 'Batman'}),
      'dom.action': el => el.firstElementChild.focus()
    })
  },
  view: ({name}) => ({
    attrs: {id: 'app'},
    content: [
      {
        tag: 'input',
        attrs: {value: name},
        on: {keyup: (e, next) => next({text: e.target.value})}
      },
      {tag: 'p', content: `Your name is ${name}.`},
      {tag: 'button', content: 'Put on costume', on: {click: 'click'}}
    ]
  })
})

export default Phonebooth
