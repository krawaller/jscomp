import {div} from '@cycle/dom';

let lyrics = ["Eeexiiit light","Eeenteeer niight","Taaake my haaand","We're off to never never land"]

function Singer({pos$}){
  return {
    DOM: pos$.map(pos => div(lyrics[pos]))
  }
}

export default Singer