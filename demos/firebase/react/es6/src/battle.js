import React from 'react'
import {subscribe, nudge} from '../../../nudger'

class Battle extends React.Component {
  constructor () {
    super()
    this.state = {
      loaded: false,
      status: {},
      teams: []
    }
    subscribe(val => {
      this.setState({
        loaded: true,
        teams: Object.keys(val).sort(),
        status: val
      })
    })
  }

  render () {
    const teamButtons = this.state.teams &&
      this.state.teams.map((team, i) =>
        <button key={`${team}${i}`} onClick={nudge.bind(null, team)}>
          {team} {this.state.status[team]}
        </button>
      )
    return (
      <div>{
        this.state.loaded
          ? teamButtons
          : 'Fetching data...'
        }
      </div>
    )
  }


}

export default Battle
