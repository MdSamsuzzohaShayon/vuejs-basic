<template>
  <header class="task">
    <h1>{{ title }}</h1>
    <div class="btn-list">
      <Button text="Add Task" color="green" />
      <Button text="Update Task" color="blue" />
      <Button text="Delete Task" color="purple" />
    </div>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  // https://v3.vuejs.org/guide/component-props.html
  // props: ["title"],
  props: {
    title: {
      type: String,
      default: "Task Manager Default",
    },
  },
  components: {
    Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-list {
  display: flex;
  justify-content: center;
  flex-basis: 90%;
}
.btn {
  color: white;
  padding: 10px 20px;
  margin: 0 20px;
  background: rgb(21, 14, 24);
  border: none;
  outline: none;
}
</style>
