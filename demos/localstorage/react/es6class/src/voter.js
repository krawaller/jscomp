import React from 'react'
import classNames from 'classnames'

let teams = ["Valor","Mystic","Instinct"]

class Voter extends React.Component {
  constructor() {
    super()
    this.state = {team: +(localStorage.getItem('JSCOMPVOTE') || 1)}
  }
  vote(team) {
    this.setState({team})
    localStorage.setItem('JSCOMPVOTE',team)
  }
  render() {
    return <div>
      {teams.map((t,n)=> <button key={n}
        className={classNames({active:this.state.team === n})}
        onClick={this.vote.bind(this,n)}>{t}</button>
      )}
    </div>
  }
}

export default Voter