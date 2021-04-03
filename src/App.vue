<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <projectlist/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import projectlist from './components/ProjectList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, projectlist
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
      <div class="center">ProPla</div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click me!
      </v-ons-button>
    </p>  
    
    <projectlist/>
    
    <v-ons-list>
      <v-ons-list-header>Expandable</v-ons-list-header>
      <v-ons-list-item expandable>
        Tap to expand
        <div class="expandable-content">Expandable content</div>
      </v-ons-list-item>
    </v-ons-list>
    
    <HelloWorld/>
    
  </v-ons-page>
  
</template>


