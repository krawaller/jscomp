import Vue from 'vue'

Vue.component('clicker', {
  template: `
    <p>{{count}} bottles of beer on the wall</p>
    <button v-on:click="more">Buy more</button>
  `,
  data: () => ({count: 3}),
  methods: {
    more () {
      this.count++
    }
  }
})
