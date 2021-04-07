
<script>

export default {
  name: 'projectpage',
  key: 'projectpage',
  methods: {
    backPage() {
      this.$emit('pop-page');
    },
  },
  computed: {
    project() {
      //return this.$store.state.project.selected;
      return this.$store.state.project.selected;
    }
  },
}
</script>

<template id="projectpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{project.name}}</div>
    </v-ons-toolbar>

    <v-ons-list>
  <v-ons-list-header>Open Tasks</v-ons-list-header>
    <v-ons-list-item expandable v-for="(task, x) in project.openTasks" :key="x" >
		{{task.name}}
     <div class="expandable-content">Expandable content</div>
    </v-ons-list-item>
  </v-ons-list> 

    <v-ons-fab position="bottom right" @click="project.addOpenTask( 'Test' )">
      <v-ons-icon icon="md-plus" ></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>
