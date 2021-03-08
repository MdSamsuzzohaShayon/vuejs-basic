<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{ task.text }} <i class="fas fa-times icon"></i></h3>
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
.icon {
  color: rgb(219, 139, 139);
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.task.reminder {
  border-left: 10px solid rgb(86, 250, 195);
}
</style>