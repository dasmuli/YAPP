
<script>
export default {
  name: "projectpage",
  key: "projectpage",
  methods: {
    backPage() {
      this.$emit("pop-page");
    },
  },
  computed: {
    project() {
      //return this.$store.state.project.selected;
      return this.$store.state.project.selected;
    },
  },
};
</script>

<template id="projectpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">{{ project.name }}</div>
    </v-ons-toolbar>

    <v-ons-list>
      <v-ons-list-header>Open Tasks</v-ons-list-header>
      <v-ons-list-item
        expandable
        v-for="(task, x) in project.openTasks"
        :key="x"
      >
        {{ task.name }}
        <div class="expandable-content">
          <v-ons-list>
            <v-ons-list-item>
              <label class="left">
                <v-ons-checkbox
                  :input-id="'checkbox-' + task.id"
                  :value="'true'"
                >
                </v-ons-checkbox>
              </label>
              <label class="center"> Milestone </label>
            </v-ons-list-item>
          </v-ons-list>
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-fab position="bottom right" @click="project.addOpenTask()">
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>
