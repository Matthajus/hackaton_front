<template>
  <section>
    <div class="container" >
      <div class="card" v-for="list in toDoLists" v-bind:key="list.id">
        <div class="imgBx">
          <img :src="list.imageLink" :alt="list.name"/>
          <h2>{{ list.name }}</h2>
        </div>
        <div class="content">
          <div class="size">
            <h3>{{ list.description }}</h3>
          </div>
          <div class="size">
            <button class="edit-button">Edit</button>
            <button class="open-button">Open</button>
            <button class="delete-button">Delete</button>
          </div>
        </div>
      </div>

      <!-- Add list -->
      <div class="card" @click="onAddClick()">
        <div class="imgBx">
          <img src="https://www.pinclipart.com/picdir/big/8-84831_medium-image-green-plus-sign-clipart.png" alt="plus icon"/>
          <h2>Add list</h2>
        </div>
        <div class="content">
          <div class="size">
            <h3>Click to add new list</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import ToDoListService from "@/services/ToDoListService";

export default {
  name: "ToDoList",
  data() {
    return {
      toDoLists: []
    }
  },
  methods: {
    getToDoLists() {
      ToDoListService.getToDoLists().then((response) => {
        this.toDoLists = response.data;
      }).catch( error => console.log(error)).finally(() => console.log("Data loading complete."))
    },
    onAddClick() {
      console.log("On add card click!");
    }
  },
  created() {
    this.getToDoLists();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  overflow: hidden;
  padding: 100px 20px;
  box-sizing: border-box;
}

section::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--sidebar-item-hover);
  clip-path: circle(65% at 100% -20%);
}

section::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--sidebar-bg-color);
  clip-path: circle(35% at 0% 100%);
}

.container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
}

.container .card .imgBx {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  transition: 0.5s ease-in-out;
}
.container .card:hover .imgBx {
  transform: translateY(-100px);
}

.container .card .imgBx img {
  max-width: 100%;
  margin: 0 0 20px;
  transition: 0.5s ease-in-out;
}

.container .card:hover .imgBx img {
  transform: translate(-20px,-40px) rotate(-25deg) scale(1.4);
}

.container .card .imgBx h2 {
  color: white;
  font-weight: 600;
}

.container .card .content {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.container .card:hover .content {
  opacity: 1;
  visibility: visible;
  transform: translateY(-25px);
}

.container .card .content .size {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
}

.container .card .content .size h3 {
  color: white;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card .content button {
  position: relative;
  top: 10px;
  display: inline-block;
  padding: 12px 13px;
  background: white;
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}

.edit-button {
  margin: 0 4px;
  color: rgba(0, 0, 0, 0.3) !important;
}

.open-button {
  margin: 0 4px;
}

.delete-button {
  margin: 0 4px;
  color: red !important;
}
</style>