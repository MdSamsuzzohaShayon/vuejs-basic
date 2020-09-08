<template>
<div class="todo-item" v-bind:class="{'is-complete':todo.completed}" >
<!-- THIS IS THE PROPS WE ARE GETTING FROM TODOS.VUE -->
<p>{{todo.title}}</p>
</div>
</template>



<script>

export default{
    // BY THIS NAME WE WILL IMPORT IN APP.VUE
    name:"TodoItem",
    props: ['todo'] // THIS IS THE PROPS WE ARE GETTING FROM TODOS.VUE
}
</script>


<style scoped>
p{
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