
<script>

import ProjectList from '../components/ProjectList.vue'
import projectpage from './projectpage.vue'

export default {
  name: 'mainpage',
  key: 'mainpage',
  components: {
    ProjectList
  },
  methods: {
    showProjectPage() {
      this.$emit('push-page', projectpage);
    }
  },
  data() {
    return {
    }
  }
}
</script>

<template id="mainpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Simple Agile Project Planner</div>
    </v-ons-toolbar>
    <v-ons-button @click="showProjectPage()">
          Test
    </v-ons-button>
    <ProjectList/>
  </v-ons-page>
</template>
