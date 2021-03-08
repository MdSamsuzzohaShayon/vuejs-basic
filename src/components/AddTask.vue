<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <!-- https://v3.vuejs.org/api/directives.html#v-model -->
      <!-- Expects: varies based on value of form inputs element or output of components -->
      <input v-model="text" type="text" name="task" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        v-model="day"
        type="text"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control">
      <label>Set Reminder</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>
    <div class="form-control">
      <input type="submit" value="Save Task" class="btn btn-block" />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      //   text: "Default",
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      //   console.log(e.target);
      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      console.log("New Task: ", newTask);

      this.$emit("add-task", newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
      // this.text = '';
    },
  },
};
</script>


<style scoped>
.add-form {
  width: 100%;
  margin: 60px 0;
}
.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 15px 0;
  font-size: 1.2rem;
}
input,
label {
  width: 50%;
  margin-left: 25%;
}
input[type="text"] {
  color: rgb(20, 88, 90);
  height: 40px;
  font-size: 1.2rem;
  border: none;
  /* border: solid 1px rgb(37, 131, 134); */
  background: rgb(197, 253, 255);
  margin-top: 10px;
}

input[type="submit"] {
  padding: 12px 0;
  font-size: 1.2rem;
  border: none;
  color: rgb(197, 253, 255);
  background: rgb(37, 131, 134);
  outline: none;
  margin-top: 10px;
}
input[type="checkbox"] {
  margin-left: 10px;
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgb(83, 190, 194);
}
</style>