import React from 'react'

import {lyrics} from '../../../lyrics'

let Singer = React.createClass({
  getInitialState: () => ({pos: 0}),
  componentDidMount () {
    setInterval(() => this.setState({
      pos: (this.state.pos + 1) % lyrics.length
    }), 1500)
  },
  render () {
    return <div>{lyrics[this.state.pos]}</div>
  }
})

export default Singer
