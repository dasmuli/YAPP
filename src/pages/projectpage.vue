
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
  data() {
    return {
      effortLevel: [
        { text: "0", value: "0" },
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "5", value: "5" },
        { text: "8", value: "8" },
        { text: "13", value: "13" },
        { text: "20", value: "20" },
        { text: "40", value: "40" },
        { text: "100", value: "100" },
      ],
    };
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
      <div class="right">
        <v-ons-toolbar-button>
          <v-ons-icon icon="md-chart"></v-ons-icon>
        </v-ons-toolbar-button>
        <v-ons-toolbar-button>
          <v-ons-icon icon="md-assignment"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
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
                <v-ons-icon icon="md-edit"></v-ons-icon>
              </label>
              <label class="center">
                <v-ons-input placeholder="Task name" float v-model="task.name">
                </v-ons-input>
              </label>
            </v-ons-list-item>
            <v-ons-list-item>
              <label class="left">
                <v-ons-icon icon="md-bike"></v-ons-icon>
              </label>
              <v-ons-select select-id="task-effort-id" v-model="task.effort">
                <option
                  v-for="level in effortLevel"
                  :key="level.text"
                  :value="level.value"
                >
                  {{ level.text }}
                </option>
              </v-ons-select>
            </v-ons-list-item>
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
            <v-ons-list-item>
              <label class="left">
                <v-ons-icon icon="md-info"></v-ons-icon>
              </label>
              <textarea
                class="textarea textarea--transparent"
                rows="3"
                placeholder="Description"
                float
                v-model="task.description"
                auto-grow
              ></textarea>
            </v-ons-list-item>
            <v-ons-list-item>
              <label class="left">
                <v-ons-icon icon="md-save"></v-ons-icon>
              </label>
              <v-ons-button
                @click="
                  $ons.notification.toast('Saved', { timeout: 1500 });
                  project.save();
                "
              >
                Save
              </v-ons-button>
              <span style="display: inline-block; width: 10px"></span>
              <v-ons-button
                @click="
                  $ons.notification
                    .confirm('Really delete?')
                    .then((response) => {
                      if(response == 1)
                      project.removeOpenTask(task);
                    })
                "
              >
                Delete
              </v-ons-button>
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
