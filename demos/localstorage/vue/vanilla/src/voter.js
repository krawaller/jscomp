import Vue from 'vue'

Vue.component('voter',{
  template: `
    <button v-for="t of teams" v-bind:class="{active: $index === team}" v-on:click="vote($index)">{{t}}</button>
  `,
  data: ()=> ({
    team: +(localStorage.getItem('JSCOMPVOTE') || 1),
    teams: ["Valor","Mystic","Instinct"]
  }),
  methods: {
    vote(x) {
      this.team = x;
      localStorage.setItem('JSCOMPVOTE',x)
    }
  }
})