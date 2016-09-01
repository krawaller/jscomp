import React from 'react'

let Confirm = React.createClass({
  getInitialState: ()=> ({mode:'waiting'}),
  maybe() { this.setState({mode:'confirm'}) },
  changedmymind() { this.setState({mode:'waiting'}) },
  yesimsure() {
    this.props.confirm();
    this.setState({mode:'waiting'})
  },
  render() {
    return this.state.mode !== 'confirm'
    ? <button onClick={this.maybe} disabled={this.props.disabled}>Submit</button>
    : <span>
        <button onClick={this.changedmymind}>Cancel</button>
        <button onClick={this.yesimsure}>Confirm</button>
      </span>
  }
})

export default Confirm