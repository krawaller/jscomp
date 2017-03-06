/** @jsx h */
import { h, Component } from 'preact'

import {lyrics} from '../../../lyrics'

class Singer extends Component {
  constructor () {
    super()
    this.state.pos = 0
    setInterval(() => this.setState({
      pos: (this.state.pos + 1) % lyrics.length
    }), 1500)
  }
  render () {
    return <div>{lyrics[this.state.pos]}</div>
  }
}

export default Singer
