<template>
  <button
    v-on:click="onClickEvent()"
    v-bind:style="{ background: color }"
    class="btn"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String,
    text: String,
    color: String,
  },
  methods: {
    onClickEvent() {
      console.log("Click");
      this.$emit("btn-click");
    },
  },
};
</script>


<style scoped>
</style>