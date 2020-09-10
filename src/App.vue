<template>
<!-- THIS APP ID IS USING IN MAIN.JS TO MOUNT ALL ELEMENT OR COMPONENT TO HTML -->
  <div id="app">
    <!-- TO RENDER ANY DYNAMIC VALUE WE NEED TO GIVE TWO CURLY BRACES / 2ND BRACKETS -->
    <!-- Updates the element’s textContent. If you need to update the part of textContent, you should use {{ Mustache }} interpolations. https://vuejs.org/v2/guide/syntax.html -->
    <!-- USING DIFFERENT TYPES OF DIRECTIVES https://vuejs.org/v2/api/#v-html -->
    <!-- Dynamically bind one or more attributes, or a component prop to an expression. https://vuejs.org/v2/api/#v-bind -->
    <Todos v-bind:todos="todos" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import Todos from "./components/Todos";


export default {
  name: 'App',
  components: {
    Todos
  },
  data(){
    // DATA IS A FUNCTION THAT RETURN AN OBJECT
    return {
      todos: [
        {
          id: 1,
          title: "todo one",
          completed: false
        },
        {
          id: 2,
          title: "todo two",
          completed: true
        },
        {
          id: 3,
          title: "todo three",
          completed: false
        },
      ]
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;

}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height:1.4;
  height: 100%;
  width:100%;
  background-image:url(https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg);
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
}

</style>
