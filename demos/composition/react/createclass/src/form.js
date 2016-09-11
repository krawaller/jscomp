import React from 'react'
import Field from './field'

let Form = React.createClass({
  getInitialState: () => ({submission: 'Steve'}),
  onSubmission (txt) { this.setState({submission: txt}) },
  render () {
    return (
      <div>
        <Field instruction='Enter name' onSubmission={this.onSubmission} />
        <p>Submitted value: {this.state.submission}</p>
      </div>
    )
  }
})

export default Form
