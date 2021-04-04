
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
      <div class="left">
        <v-ons-back-button>Page 1</v-ons-back-button>
      </div>
      <div class="center">Open tasks</div>
    </v-ons-toolbar>
  </v-ons-page>
</template>
