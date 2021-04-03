
<script>
import ProjectList from './components/ProjectList.vue'

export default {
  name: 'App',
  components: {
    ProjectList
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
    <v-ons-toolbar>
      <div class="center">Project task planner</div>
    </v-ons-toolbar>
    
    <ProjectList/>
    
  </v-ons-page>
  
</template>


