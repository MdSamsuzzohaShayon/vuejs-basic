<template>
  <div class="container">
    <!-- WE CAN SET DEFAULT PROPS VALUE  -->
    <!-- <Header /> -->
    <Header title="Task Manager" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  // https://v3.vuejs.org/guide/state-management.html#official-flux-like-implementation
  // It is often overlooked that the source of truth in Vue applications is the reactive data object - a component instance only proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you can use a reactive method to make an object reactive:
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      console.log("Task ID from Parent: ", id);
    },
  },
  // LIFE CYCLE HOOKS
  // https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor Appointment",
        day: "March 1st at 2:30",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting At School",
        day: "March 4th at 2:30",
        reminder: true,
      },
      {
        id: 3,
        text: "Doctor Appointment",
        day: "March 8th at 2:30",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 80%;
  margin-left: 10%;
}
</style>
