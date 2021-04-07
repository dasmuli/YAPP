
<script>

export default {
  name: 'projectpage',
  key: 'projectpage',
  methods: {
    backPage() {
      this.$emit('pop-page');
    },
    addTask() {
      var newObj = { name: "TesstTask" };
      this.$store.state.project.selected.openTasks.push( newObj );
      console.log('Adding task to '+this.$store.state.project.selected.index);
      //this.localStorage.projects[this.$store.state.project.selected.index].openTasks.push( { name: "t1" } );
      //this.localStorage.projects[this.$store.state.project.selected.index].openTasks.push( newObj );
      //this.newProject.name = null;
              // For reacticy with plains u must replace entire object becouse watch doesn't detect changes on further namespaces/vars inside it.
        //var copy = JSON.parse(JSON.stringify(this.localStorage.obj));
            //copy[this.localStorage.projects.key] = this.localStorage.projects.value;
        //this.localStorage.obj = copy;
    },
  },
  computed: {
    project() {
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
  <v-ons-list-header>Projects</v-ons-list-header>
    <v-ons-list-item tappable v-for="(task, x) in this.localStorage.projects[this.$store.state.project.selected.index].openTasks" :key="x" >
		{{task.name}}
     <div class="expandable-content">Expandable content</div>
    </v-ons-list-item>
  </v-ons-list> 

    <v-ons-fab position="bottom right" @click="addTask()">
      <v-ons-icon icon="md-plus" ></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>
