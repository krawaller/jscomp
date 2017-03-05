const choo = require('choo')

const clicker = require('./clicker')
const root = document.getElementById('app')
const app = choo({href: false, history: false, hash: false})

app.model(clicker.model)
app.router({root: root}, [document.location.pathname, clicker.view])
root.appendChild(app.start())
