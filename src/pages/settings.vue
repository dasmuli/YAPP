
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

    loadFile(event) {
      console.log(event.target.files);
      this.model.upload_selected_file(event.target.files[0])
    },

    upload() {
        this.$refs.fileSelector.click()
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
        <v-ons-back-button >Back</v-ons-back-button>
      </div>
      <div class="center">Settings</div>
    </v-ons-toolbar>

    <section style="margin: 16px">
        <v-ons-button @click="download()" style="margin: 6px 0"> Download data </v-ons-button>
        <br>
        <v-ons-button @click="upload()" style="margin: 6px 0"> Upload data </v-ons-button>
    </section>

    <input type="file" @change="loadFile" multiple  accept=".json" style="display: none;" ref="fileSelector">

  </v-ons-page>
</template>
