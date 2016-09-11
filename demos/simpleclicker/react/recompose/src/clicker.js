import React from 'react'
import {withState} from 'recompose'

const enhance = withState('count', 'more', 3)
const Clicker = enhance(({count, more}) => (
  <div>
    <p>{count} bottles of beer on the wall</p>
    <button onClick={() => more(n => n + 1)}>Buy more</button>
  </div>
))

export default Clicker
