<template>
  <div class="container">
    <!-- WE CAN SET DEFAULT PROPS VALUE  -->
    <!-- <Header /> -->
    <Header
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
      title="Task Manager"
    />

    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  // https://v3.vuejs.org/guide/state-management.html#official-flux-like-implementation
  // It is often overlooked that the source of truth in Vue applications is the reactive data object - a component instance only proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you can use a reactive method to make an object reactive:
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
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
