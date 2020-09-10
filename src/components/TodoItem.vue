<template>
<!-- https://vuejs.org/v2/guide/syntax.html#Arguments -->
  <!-- CONDITION IF COMPLETED TRUE THEN IT WILL ADD A CLASS -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <!-- THIS IS THE PROPS WE ARE GETTING FROM TODOS.VUE -->
    <p>
        <!-- EVENTS https://vuejs.org/v2/guide/events.html#Listening-to-Events -->
        <input type="checkbox" v-on:change="markComplete"> 
        {{todo.title}}
    </p>
  </div>
</template>



<script>
export default {
  // BY THIS NAME WE WILL IMPORT IN APP.VUE
  name: "TodoItem",
  props: ["todo"], // THIS IS THE PROPS WE ARE GETTING FROM TODOS.VUE
  methods: {
      markComplete(){
          this.todo.completed = !this.todo.completed;
      }
  }
};
</script>


<style scoped>
p {
  font-size: 1rem;
  color: blue;
}

.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>