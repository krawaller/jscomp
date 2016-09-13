import React from 'react'
import ReactDOM from 'react-dom'
import Elm from 'react-elm-components'

import { Singer } from './singer.elm'

ReactDOM.render(<Elm src={Singer} />, document.getElementById('app'))
