<template>
  <v-ons-list>
      <v-ons-list-header>Projects</v-ons-list-header>
      <v-ons-list-item modifier="chevron" tappable v-for="(project, x) in projects" :key="x">
        {{project.name}}
        <div class="expandable-content">Expandable content</div>
      </v-ons-list-item>
 </v-ons-list> 
</template>
<script>
export default {
  name: 'projectlist',
  data (){
    return {
      projects: [
       {name: 'Pro 1', openTaskFirst: '0', openTaskLength: '0', closedTaskFirst: '0', closedTaskLength: '0'},
       {name: 'Pro 2', openTaskFirst: '0', openTaskLength: '0', closedTaskFirst: '0', closedTaskLength: '0'},
      ]
    }
  }
}
</script>
