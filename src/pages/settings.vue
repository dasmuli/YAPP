
<script>
export default {
  name: "settings",
  methods: {
    backPage() {
      this.$emit("pop-page");
    },
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
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

    Hallo
  </v-ons-page>
</template>
