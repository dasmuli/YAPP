
<script>
//import MultiProjectModel from "../state/MultiProjectModel";

export default {
  name: "settings",
  methods: {
    backPage() {
      this.$emit("pop-page");
    },

    download() {
      this.$store.state.model.selected.download_file();
    },
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    model() {
      return this.$store.state.model.selected;
    },
  },
};
</script>

<template id="settingspage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">Settings</div>
    </v-ons-toolbar>

    <v-ons-button @click="download()"> Download </v-ons-button>
  </v-ons-page>
</template>
