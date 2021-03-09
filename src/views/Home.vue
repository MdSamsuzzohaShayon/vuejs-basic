<template>
  <div v-if="showAddTask">
    <AddTask v-on:add-task="addTask" />
  </div>
  <!-- <AddTask v-show="showAddTask" v-on:add-task="addTask" /> -->
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>
<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      // this.tasks = [...this.tasks, task];
      // console.log("New Task: ", task);

      // ADD TASK TO SERVER DATA
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      console.log("Data: ", data);
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        //   console.log("Task ID from delete task event in App: ", id);
        // this.tasks = this.tasks.filter((task) => task.id !== id);
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error to delete task");
      }
    },
    async toggleReminder(id) {
      console.log("ID from toggle reminder event in App: ", id);
      // this.tasks = this.tasks.map((task) =>
      //   task.id === id ? { ...task, reminder: !task.reminder } : task
      // );

      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });
      const data = await res.json();
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
