import React from 'react'

let Phonebooth = React.createClass({
  getInitialState: () => ({name: 'Steve'}),
  change () {
    this.setState({name: 'Batman'})
    this.refs.field.focus()
  },
  type (e) {
    this.setState({name: e.target.value})
  },
  render () {
    let name = this.state.name
    return <div>
      <div><input ref='field' onChange={this.type} value={name} /></div>
      <p>Your name is {name}</p>
      <button onClick={this.change}>Put on costume</button>
    </div>
  }
})

export default Phonebooth
