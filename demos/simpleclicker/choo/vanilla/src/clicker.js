const html = require('choo/html')

const model = {
  state: { count: 3 },
  reducers: {
    buyMore: (state, data) => ({ count: state.count + 1 })
  }
}

const view = (state, prev, send) => html`
  <main>
    <p>${state.count} bottles of beer on the wall</p>
    <button onclick=${e => send('buyMore')}>Buy more</button>
  </main>
`

module.exports = {model: model, view: view}
