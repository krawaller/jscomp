import Vue from 'vue'

let lyrics = ["Eeexiiit light","Eeenteeer niight","Taaake my haaand","We're off to never never land"]

Vue.component('singer',{
  template: `<p>{{line}}</p>`,
  data: ()=> ({pos:0}),
  computed: {
    line() {
      return lyrics[this.pos]
    }
  },
  attached: function(arg){
    setInterval(()=>this.$set("pos",(this.pos+1)%4),1500)
  }
})