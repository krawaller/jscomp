import React from 'react'

let lyrics = ["Eeexiiit light","Eeenteeer niight","Taaake my haaand","We're off to never never land"]

let Singer = React.createClass({
  getInitialState: ()=> ({pos:0}),
  componentDidMount() {
    setInterval(()=>this.setState({pos:(this.state.pos+1)%4}), 1500)
  },
  render() {
    return <div>{lyrics[this.state.pos]}</div>
  }
})

export default Singer