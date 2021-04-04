
<script>

import ProjectList from '../components/ProjectList.vue'

export default {
  name: 'mainpage',
  key: 'mainpage',
  components: {
    ProjectList
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
    <ProjectList/>
  </v-ons-page>
</template>
