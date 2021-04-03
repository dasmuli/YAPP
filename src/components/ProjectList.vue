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
    <v-ons-button @click="showModalAdd()">
      New
    </v-ons-button>
  </p>  
  
  <p style="text-align: center">
    <v-ons-button @click="showModalDelete()">
      Delete
    </v-ons-button>
  </p>  
  
  <v-ons-modal :visible="modalAddVisible" @click="modalAddVisible = false">
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        Click or wait
        <br><br>
        <v-ons-button @click="addProject()">
          Add
        </v-ons-button>
      </p>
    </v-ons-modal>
    
    <v-ons-modal :visible="modalDeleteVisible" @click="modalDeleteVisible = false">
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        <v-ons-list>
          <v-ons-list-header>Delete project</v-ons-list-header>
            <v-ons-list-item v-for="(project, x) in
               this.localStorage.projects" :key="x" @click="showModalDeleteConfirm(x)">
               {{project.name}}
           </v-ons-list-item>
        </v-ons-list> 

        <br><br>
        <v-ons-button>
          Delete
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

<script>
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
  methods: {
    addProject() {
      // ensure they actually typed something
      if (!this.newProject.name) {
        return;
      }
      var newObj = {};
      Object.assign(newObj, this.newProject);
      this.localStorage.projects.push( newObj );
      //this.newProject.name = null;
    },
    removeProject(x) {
      this.localStorage.projects.splice(x, 1);
    },
    showModalAdd() {
      this.modalAddVisible = true;
    },
    showModalDelete() {
      this.modalDeleteVisible = true;
    },
    showModalDeleteConfirm(p) {
      this.projectToBeDeleted = p;
      this.modalDeleteVisible = false;
      this.modalDeleteConfirmVisible = true;
    }
  }
}
</script>
