/** @jsx h */
import { h, Component } from 'preact'

let lyrics = ['Eeexiiit light', 'Eeenteeer niight', 'Taaake my haaand', "We're off to never never land"]

class Singer extends Component {
  constructor () {
    super()
    this.state.pos = 0
    setInterval(() => this.setState({pos: (this.state.pos + 1) % 4}), 1500)
  }
  render () {
    return <div>{lyrics[this.state.pos]}</div>
  }
}

export default Singer
