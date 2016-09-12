import React from 'react'
import ReactDOM from 'react-dom'
import Elm from 'react-elm-components'

import { Phonebooth } from './phonebooth.elm'

ReactDOM.render(<Elm src={Phonebooth} />, document.getElementById('app'))
