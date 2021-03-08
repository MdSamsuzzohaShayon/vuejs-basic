<template>
  <div class="task">
    <h3>{{ task.text }}</h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.task {
  margin-top: 10px;
  padding: 2px 0;
  color: white;
  background: rgb(21, 78, 75);
}
.task.reminder {
  border: 1px solid rgb(6, 43, 41);
}
</style>