<template>
    <div class="Todos" >
    <!-- MAKING A LOOP BY USING DIRECTIVES -->
        <div class="todo-item" v-bind:key="todo.id" v-for="todo in todos" >
            <TodoItem v-bind:todo="todo" />
        </div>
    </div>
</template>


<script>
import TodoItem from "./TodoItem.vue";

export default{
    // BY THIS NAME WE WILL IMPORT IN APP.VUE
    name:"Todos",
    // DECLARE ALL THE COMPONENTS IN THIS COMPONENTS
    components: {
        TodoItem
    },
    // THIS PROPS WE ARE GOING TO USE IN TODO.VUE OR ANY SUBCOMPONENT OF THIS COMPONENT
    props: ["todos"]
}
</script>

<style scoped>
.Todos{
    margin-top: 12%;
    margin-left: 40%;
}
.todo-item{
    width: 40%;
    padding:0.5em;
    background:white;
    margin: 0.2em;
}
</style>