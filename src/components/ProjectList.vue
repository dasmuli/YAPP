

<script>
import projectpage from '../pages/projectpage.vue'
import MultiProjectModel from "../state/MultiProjectModel";

export default {
  name: 'ProjectList',
  data() {
    return { 
      newProject: { name: 'test', openTasks: [], closedTasks: [] },
      projectToBeDeleted: { name: 'unselected' },
      modalAddVisible: false,
      modalDeleteVisible: false,
      modalDeleteConfirmVisible: false,
    }
  },
  props: {
    model: MultiProjectModel,
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
  },
  methods: {
    addProject() {
      this.model.addProject(this.newProject.name);
      this.modalAddVisible = false;
      /*
      
      // ensure they actually typed something
      if (!this.newProject.name) {
        return;
      }
      var newObj = {};
      Object.assign(newObj, this.newProject);
      newObj.index = this.localStorage.projects.length;
      console.log("Add initial task for "+newObj.index);
      this.localStorage.projects.push( newObj );
      this.localStorage.projects[newObj.index].openTasks.push( { name: "olla" } );
      //this.newProject.name = null;
      */
    },
    removeProject(x) {
      //this.localStorage.projects.splice(x, 1);#
      this.model.removeProject(x);
    },
    showModalAdd() {
      this.newProject.name = "";
      this.modalAddVisible = true;
    },
    showModalDelete() {
      this.modalDeleteVisible = true;
    },
    showModalDeleteConfirm(p) {
      this.projectToBeDeleted = p;
      this.modalDeleteVisible = false;
      this.modalDeleteConfirmVisible = true;
    },
    showProjectPage(p) {
      //this.$store.state.project.selected.set( p );
      this.$store.commit('project/set',p)
      this.pageStack.push(projectpage);
    }
  }
}
</script>


<template>
<div>
  <v-ons-list v-if="model"> 
  <v-ons-list-header>Projects</v-ons-list-header>
    <v-ons-list-item modifier="chevron" tappable v-for="(project, x) in model.projects" :key="x" @click="showProjectPage(project)">
		{{project.name}}
    </v-ons-list-item>
  </v-ons-list> 

  <p style="text-align: center">
    <v-ons-button @click="showModalAdd()">
      New
    </v-ons-button>
  </p>  
  
  <p style="text-align: center">
    <v-ons-button @click="showModalDelete()">
      Delete
    </v-ons-button>
  </p>  
  
  <v-ons-modal :visible="modalAddVisible">
      <p style="text-align: center">
          <v-ons-list>
            <v-ons-list-item>
              <div class="center">
                <v-ons-input placeholder="New project's name" float
                  v-model="newProject.name">
                </v-ons-input>
               </div>
             </v-ons-list-item>
           </v-ons-list>
         <br><br>
        <v-ons-button @click="addProject()">
          Add
        </v-ons-button>
        <br> <br>
        <v-ons-button @click="modalAddVisible = false">
          Cancel
        </v-ons-button>
      </p>
    </v-ons-modal>
    
    <v-ons-modal :visible="modalDeleteVisible" @click="modalDeleteVisible = false">
      <p style="text-align: center">
        <v-ons-list>
          <v-ons-list-header>Delete project</v-ons-list-header>
            <v-ons-list-item v-for="(project, x) in
               model.projects" :key="x" @click="showModalDeleteConfirm(x)">
               {{project.name}}
           </v-ons-list-item>
        </v-ons-list> 
        <br> <br>
        <v-ons-button @click="modalDeleteVisible = false">
          Cancel
        </v-ons-button>
      </p>
    </v-ons-modal>
    
    <v-ons-modal :visible="modalDeleteConfirmVisible" 
      @click="modalDeleteConfirmVisible = false">
      <p style="text-align: center">
        Really delete {{projectToBeDeleted.name}} ?
        <br><br>
        <v-ons-button @click="removeProject(projectToBeDeleted)">
          Yes
        </v-ons-button>
        <br> <br>
        <v-ons-button @click="modalDeleteConfirmVisible = false">
          Cancel
        </v-ons-button>
      </p>
    </v-ons-modal>
    
</div> 
</template>
