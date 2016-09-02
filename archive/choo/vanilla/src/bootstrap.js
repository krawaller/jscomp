import choo from 'choo'

import app from './app'

let {model,view} = app

console.log("WTF?!",model,view,app)

const App = choo()
App.model(model)
App.router((route) => [route('/', view)])
document.getElementById('app').appendChild(App.start())