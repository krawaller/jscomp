import React from 'react'

let Clicker = React.createClass({
  getInitialState: () => ({count: 3}),
  more () {
    this.setState({count: this.state.count + 1})
  },
  render () {
    return <div>
      <p>{this.state.count} bottles of beer on the wall</p>
      <button onClick={this.more}>Buy more</button>
    </div>
  }
})

export default Clicker
