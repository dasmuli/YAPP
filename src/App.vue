
<script>

import mainpage from './pages/mainpage.vue'

export default {
  name: 'App',
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
  },
  created: function () {
    console.log('Just saved to have the created syntax here...')
    this.$store.state.navigator.stack.push(mainpage);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template id="main-page">
  <v-ons-page>
    <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
    @pop-page="pageStack.pop()"
  ></v-ons-navigator>
  </v-ons-page>
</template>


