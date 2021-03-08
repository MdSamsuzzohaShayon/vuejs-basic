<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i class="fas fa-times icon" @click="onDelete(task.id)"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      console.log("ID: ", id);
      //   https://vuejs.org/v2/guide/components-custom-events.html
      // Unlike components and props, event names don’t provide any automatic case transformation. Instead, the name of an emitted event must exactly match the name used to listen to that event
      this.$emit("delete-task", id);
    },
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