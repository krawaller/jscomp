import Vue from 'vue'

import {lyrics} from '../../../lyrics'

Vue.component('singer', {
  template: `<p>{{line}}</p>`,
  data: () => ({pos: 0}),
  computed: {
    line () {
      return lyrics[this.pos]
    }
  },
  attached (arg) {
    setInterval(() => this.$set(
      'pos', (this.pos + 1) % lyrics.length
    ), 1500)
  }
})
