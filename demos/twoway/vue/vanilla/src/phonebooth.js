import Vue from 'vue'

Vue.component('phonebooth', {
  template: `
    <input v-model="name" v-el:input><br/>
    <p>Your name is {{name}}.</p>
    <button v-on:click="change">Put on costume</button>
  `,
  data: () => ({name: 'Steve'}),
  methods: {
    change () {
      this.name = 'Batman'
      this.$els.input.focus()
    }
  }
})
