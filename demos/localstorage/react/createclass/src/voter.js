import React from 'react'
import classNames from 'classnames'
const {localStorage} = window

let teams = ['Valor', 'Mystic', 'Instinct']

let Voter = React.createClass({
  getInitialState: () => ({team: +(localStorage.getItem('JSCOMPVOTE') || 1)}),
  vote (team) {
    this.setState({team})
    localStorage.setItem('JSCOMPVOTE', team)
  },
  render () {
    return <div>
      {teams.map((t, n) => <button key={n}
        className={classNames({active: this.state.team === n})}
        onClick={this.vote.bind(this, n)}>{t}</button>
      )}
    </div>
  }
})

export default Voter
