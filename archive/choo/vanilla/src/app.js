import html from 'choo/html'

const model = {
  state: { title: 'Not quite set yet' },
  reducers: {
    update: (data, state) => ({ title: data })
  }
}

const view = (state, prev, send) => html`
  <main>
    <h1>Title: ${state.title}</h1>
    <input
      type="text"
      oninput=${(e) => send('update', e.target.value)}>
  </main>
`

const app = {model,view}

export default app