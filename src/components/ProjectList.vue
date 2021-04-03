<template>
<div>
  <v-ons-list>
  <v-ons-list-header>Projects</v-ons-list-header>
    <v-ons-list-item modifier="chevron" tappable v-for="(project, x) in this.localStorage.projects" :key="x">
		{{project.name}}
     <div class="expandable-content">Expandable content</div>
    </v-ons-list-item>
  </v-ons-list> 

  <p style="text-align: center">
    <v-ons-button @click="$ons.notification.alert('Adding')">
      Add
    </v-ons-button>
  </p>  
</div> 
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return { newProject: { name: null, openTasks: [], closedTasks: [] } }
  },
  methods: {
    addProject() {
      // ensure they actually typed something
      if (!this.newProject.name) {
        return;
      }

      this.localStorage.projects.push(this.newProject);
      this.newProject.name = null;
    },
    removeProject(x) {
      this.localStorage.projects.splice(x, 1);
    }
  }
}
</script>
