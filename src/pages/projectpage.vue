
<script>
import chartpage from "./chart.vue"
import finishedpage from "./finishedpage.vue"

export default {
  name: "projectpage",
  key: "projectpage",
  methods: {
    backPage() {
      this.$emit("pop-page");
    },
    toggleMoveVertical(task) {
      if (!this.movementButtonVisible) {
        this.selectedTaskToMove = task;
        // stressfull? this.hideAllExpansions()
      } else {
        this.selectedTaskToMove = null;
      }
      this.movementButtonVisible = !this.movementButtonVisible;
    },
    moveSelectedTaskBelow(secondTask) {
      this.$store.state.project.selected.moveTaskFirstAfterSecond(
        this.selectedTaskToMove,
        secondTask
      );
      this.movementButtonVisible = false;
      this.$store.state.project.selected.save();
      this.hideAllExpansions()
    },
    closeTask(task) {
      this.$store.state.project.selected.moveOpenTaskToClosed(task);
      this.$store.state.project.selected.save();
    },
    hideAllExpansions() {
      document.querySelectorAll("ons-list-item").forEach((listItem) => {
          listItem.hideExpansion();
      });
    },
    updateShowExpansionBehavior() {
      document.querySelectorAll("ons-list-item").forEach((listItem) => {
        const showExpansion = listItem.showExpansion.bind(listItem);

        listItem.showExpansion = () => {
          document
            .querySelectorAll("ons-list-item.expanded")
            .forEach((expandedListItem) => {
              if (expandedListItem !== listItem) {
                expandedListItem.hideExpansion();
              }
            });
          showExpansion();
        };
      });
    },
    showChart() {
      this.pageStack.push(chartpage);
    },
    showFinished() {
      this.pageStack.push(finishedpage);
    },
    scrollToTop()
    {
      this.$nextTick(() => {
        this.$refs.taskList.$el.scrollIntoView({ scrollBehavior: 'smooth' });
        this.$refs.taskList.$el.children[1].showExpansion();
        setTimeout(() => {
         this.$refs.taskList.$el.getElementsByClassName("text-input")[0].select(); //.focus();
        });
     });
    }
  },
  computed: {
    project() {
      //return this.$store.state.project.selected;
      return this.$store.state.project.selected;
    },
    pageStack() {
      return this.$store.state.navigator.stack;
    },
  },
  data() {
    return {
      movementButtonVisible: false,
      selectedTaskToMove: null,
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
          <v-ons-icon icon="md-trending-down" @click="showChart()"></v-ons-icon>
        </v-ons-toolbar-button>
        <span style="display: inline-block; width: 10px"></span>
        <v-ons-toolbar-button>
          <v-ons-icon icon="md-assignment" @click="showFinished()"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

    <div class="content">
      <v-ons-list ref="taskList">
        <v-ons-list-header>Open Tasks</v-ons-list-header>
        <v-ons-list-item
          expandable
          v-for="task in project.openTasks"
          :key="task.id"
        >
          <label class="left">
            <v-ons-icon
              v-if="movementButtonVisible"
              icon="md-long-arrow-up"
              style="color: blue"
              prevent-tap
              @click="moveSelectedTaskBelow(task)"
            ></v-ons-icon>
          </label>
          <label class="center" v-if="task.isMilestone" style="color:#0076ff;">
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
                  <v-ons-input
                    placeholder="Task name"
                    float
                    v-model="task.name"
                  >
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
                    value="true"
                    v-model="task.isMilestone"
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
                  <v-ons-icon icon="md-wrench"></v-ons-icon>
                </label>
                <v-ons-button
                icon="md-floppy"
                  @click="
                    $ons.notification.toast('Saved', { timeout: 700 });
                    project.save();
                  "
                >
                </v-ons-button>
                <span style="display: inline-block; width: 10px"></span>
                <v-ons-button
                  icon="md-swap-vertical"
                  @click="toggleMoveVertical(task)"
                ></v-ons-button>
                <span style="display: inline-block; width: 10px"></span>
                <v-ons-button
                  icon="md-assignment-check"
                  @click="$ons.notification.toast('Finished', { timeout: 700 });closeTask(task)"
                ></v-ons-button>
              </v-ons-list-item>
            </v-ons-list>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>

    <v-ons-fab position="bottom right" @click="project.addOpenTask();scrollToTop();">
      <v-ons-icon icon="md-plus"></v-ons-icon>
    </v-ons-fab>
  </v-ons-page>
</template>
