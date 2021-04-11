
<script>

import ProjectList from '../components/ProjectList.vue'
import MultiProjectModel from "../state/MultiProjectModel";
import settingspage from "./settings.vue";

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
    this.$store.commit('model/set',this.model)
  },
  methods: {
    dump() {
      console.log(JSON.stringify(this.model));
    },
    showSettings() {
      this.pageStack.push(settingspage);
    }
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
  },
}
</script>

<template id="mainpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Yet Another Project Planner</div>
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="md-settings" @click="showSettings()"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <ProjectList :model="model"/>
  </v-ons-page>
</template>
