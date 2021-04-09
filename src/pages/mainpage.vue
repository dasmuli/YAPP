
<script>

import ProjectList from '../components/ProjectList.vue'
import MultiProjectModel from "../state/MultiProjectModel";

export default {
  name: 'mainpage',
  key: 'mainpage',
  components: {
    ProjectList
  },
    data() {
    return {
      model: MultiProjectModel.create()
    };
  },
  mounted() {
    window.model = this.model;
  },
  methods: {
    dump() {
      console.log(JSON.stringify(this.model));
    }
  }
}
</script>

<template id="mainpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Yet Another Project Planner</div>
    </v-ons-toolbar>
    <ProjectList :model="model"/>
  </v-ons-page>
</template>
