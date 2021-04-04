
<script>
export default {
  name: 'projectpage',
  key: 'projectpage',
  methods: {
    backPage() {
      this.$emit('pop-page');
    }
  },
  computed: {
    project() {
      return this.$store.state.project.selected;
    }
  }
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
  </v-ons-page>
</template>
