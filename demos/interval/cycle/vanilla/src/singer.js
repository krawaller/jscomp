import xs from 'xstream'
import {div} from '@cycle/dom';

let lyrics = ["Eeexiiit light","Eeenteeer niight","Taaake my haaand","We're off to never never land"]

function Singer(sources){
  let song$ = xs.periodic(1500).startWith(-1).map(n=>lyrics[(n+1)%4])
  return {
    DOM: song$.map(line => div(line))
  }
}

export default Singer