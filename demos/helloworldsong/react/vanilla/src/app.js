import React from 'react'

let lyrics = ['Eeexiiit light','Eeenteeer niight','Taaake my haaand','Where off to never never land']

let App = React.createClass({
  getInitialState: ()=> ({pos:0}),
  componentDidMount: ()=> setInterval(()=>this.setState({pos:(this.state.pos+1)%4})),
  render() {
    return <div>{lyrics[this.state.pos]}</div>
  }
})

export default App