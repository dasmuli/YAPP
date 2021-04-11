
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "chartpage",
  components: {
    GChart,
  },
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
    projectdata() {
      let data_array = [];
      data_array[0] = ["Date", "Points"];
      var open_points = 0; // the chart's offset
      var i = 0;

      // go through all open cards and add up points
      for (i = 0; i < this.project.openTasks.length; i++) {
        open_points += parseInt(this.project.openTasks[i].effort);
      }
      let finished_points = 0;
      // go through finished and calculate finished value
      for (i = this.project.closedTasks.length - 1; i >= 0; i--) {
        data_array[i + 2] = [
          new Date(this.project.closedTasks[i].date_finished),
          open_points + finished_points,
        ];
        finished_points += parseInt(this.project.closedTasks[i].effort);
      }

      // add first element with full points
      if(this.project.closedTasks.length > 0)
      {
      data_array[1] = [
        new Date(this.project.closedTasks[0].date_added),
        open_points + finished_points,
      ];
      }
      else
      {
        data_array[1] = [
        new Date(Date.now()),
        open_points + finished_points,
        ];
      }

      return data_array;
    },
    projectoptions() {
      return {
        title: "Burndown chart",
        //curveType: 'function',
        legend: { position: "bottom" },
        //height: (window.innerHeight * 3) / 4,
        //width: document.getElementById("burndown_chart").parentElement
        //  .offsetWidth,
        vAxis: { minValue: 0 }, // force y=0 in view
        animation: { startup: true, duration: 700 },
      };
    },
  },
};
</script>

<template id="chartpage">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>Back</v-ons-back-button>
      </div>
      <div class="center">Burndown: {{ project.name }}</div>
    </v-ons-toolbar>

    <GChart type="LineChart" :data="projectdata" :options="projectoptions" />
  </v-ons-page>
</template>
