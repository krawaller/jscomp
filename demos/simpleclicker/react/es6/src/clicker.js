import React from 'react'

class Clicker extends React.Component {
  constructor() {
    super()
    this.state = {count: 3}
    this.more = ()=> this.setState({count:this.state.count+1})
  }
  render() {
    return <div>
      <p>{this.state.count} bottles of beer on the wall</p>
      <button onClick={this.more}>Buy more</button>
    </div>
  }
}

export default Clicker