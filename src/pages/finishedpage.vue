
<script>
export default {
  name: "finishedpage",
  key: "finishedpage",
  computed: {
    project() {
      return this.$store.state.project.selected;
    },
  },
  methods: {
    backPage() {
      this.$emit("pop-page");
    },
  },
};
</script>

<template id="finishedpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">Finished: {{ project.name }}</div>
    </v-ons-toolbar>

    <div class="content">
      <v-ons-list>
        <v-ons-list-header>Finished Tasks</v-ons-list-header>
        <v-ons-list-item
          expandable
          v-for="task in project.closedTasks"
          :key="task.id"
        >
          <label class="center" v-if="task.isMilestone" style="color: #0076ff">
            {{ task.name }}
          </label>
          <label class="center" v-else>
            {{ task.name }}
          </label>
          <div class="expandable-content">
            <v-ons-list>
              <v-ons-list-item>
                <label class="left">
                  <v-ons-icon icon="md-edit"></v-ons-icon>
                </label>
                <label class="center">
                  {{ task.name }}
                </label>
              </v-ons-list-item>
              <v-ons-list-item>
                <label class="left">
                  <v-ons-icon icon="md-bike"></v-ons-icon>
                </label>
                {{ task.effort }}
              </v-ons-list-item>
              <v-ons-list-item>
                <label class="left">
                  <v-ons-checkbox
                    :input-id="'checkbox-' + task.id"
                    value="true"
                    v-model="task.isMilestone"
                    disabled="true"
                  >
                  </v-ons-checkbox>
                </label>
                <label class="center"> Milestone </label>
              </v-ons-list-item>
              <v-ons-list-item>
                <label class="left">
                  <v-ons-icon icon="md-info"></v-ons-icon>
                </label>
                {{ task.description }}
              </v-ons-list-item>
              <v-ons-list-item>
                <v-ons-button
                  icon="md-assignment-check"
                  @click="
                    $ons.notification.toast('Reopened', { timeout: 1500 });
                    closeTask(task);
                  "
                ></v-ons-button>
              </v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>
