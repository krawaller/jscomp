import React from 'react'
import ReactDOM from 'react-dom'
import Elm from 'react-elm-components'

import {Clicker} from './clicker.elm'

ReactDOM.render(<Elm src={Clicker} />, document.getElementById('app'))
