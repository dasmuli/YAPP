
<script>


export default {
  name: 'projectpage',
  key: 'projectpage',
  methods: {
    backPage() {
      this.$emit('pop-page');
    }
  }
}
</script>

<template id="projectpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Open tasks</div>
    </v-ons-toolbar>
    <v-ons-button @click="backPage()">
          Project page
    </v-ons-button>
  </v-ons-page>
</template>
