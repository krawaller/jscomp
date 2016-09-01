import React from 'react'
import Confirm from './confirm'

let Field = React.createClass({
  getInitialState: ()=> ({field:''}),
  onConfirm() {
    this.props.onSubmission(this.state.field);
    this.setState({field:''});
  },
  onChange(e) {
    this.setState({field:e.target.value});
  },
  render() {
    return (
      <div>
        {this.props.instruction}: <input value={this.state.field} onChange={this.onChange}/>
        <Confirm disabled={!this.state.field} confirm={this.onConfirm}/>
      </div>
    )
  }
})

export default Field