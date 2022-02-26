<template>
  <section>
    <div class="container" >
      <div class="div-container" v-for="item in toDoItems" v-bind:key="item.id">

        <div class="card" v-if="item.isDone === false">
          <div class="imgBx">
            <h2>{{ item.name }}</h2>
          </div>
          <div class="content">
            <div class="size">
              <h3>{{ item.description }}</h3>
            </div>
            <div class="buttons">
              <button class="mark-done-button" @click="onDoneClick(item)">Done</button>
              <button class="edit-button" @click="onEditClick(item)">Edit</button>
              <button class="delete-button" @click="onDeleteClick(item.id)">Delete</button>
            </div>
          </div>
        </div>

        <div class="card" v-else style="background: rgba(47, 133, 90, 0.7) !important;">
          <div class="imgBx">
            <h2>{{ item.name }}</h2>
          </div>
          <div class="content">
            <div class="size">
              <h3>{{ item.description }}</h3>
            </div>
          </div>
        </div>

      </div>

      <div class="card" @click="onAddClick()">
        <div class="imgBx">
          <img src="https://www.pinclipart.com/picdir/big/8-84831_medium-image-green-plus-sign-clipart.png" alt="plus icon"/>
          <h2 class="add-text">Add new Item</h2>
        </div>
      </div>

      <div v-if="myModal">
        <transition name="model">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title modal-title-h4" v-if="edit === false">Add New Item</h4>
                    <h4 class="modal-title modal-title-h4" v-else>Edit Item</h4>
                    <button type="button" class="close" @click="myModal=false; edit=false">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group">
                      <label>Enter Item Name</label>
                      <input type="text" class="form-control" v-model="item_name"/>
                    </div>
                    <div class="form-group">
                      <label>Enter Item Description</label>
                      <input type="text" class="form-control" v-model="item_description"/>
                    </div>
                    <br />
                    <div align="center" v-if="edit === false">
                      <button class="add-submit-button" @click="myModal=false; onAddSubmitButtonClick()">Add Item</button>
                    </div>
                    <div align="center" v-else>
                      <button class="add-submit-button" @click="myModal=false; onEditSubmitButtonClick()">Edit Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>
  </section>

</template>

<script>
import ToDoItemService from "@/services/ToDoItemService";

export default {
  name: "ToDoItem",
  data() {
    return {
      list_id: 0,
      toDoItems: [],
      myModal: false,
      edit: false,
      item_id: 0,
      item_name: '',
      item_description: '',
    }
  },
  methods: {
    getToDoItems(id) {
      ToDoItemService.getToDoItems(id)
        .then((response) => {
          this.toDoItems = response.data;})
        .catch( error => console.log(error))
        .finally(() => console.log("Data loading complete."))
    },
    onAddClick() {
      console.log("On add card click!");
      this.item_id = 0;
      this.item_name = '';
      this.item_description = '';
      this.myModal = true;
    },
    onAddSubmitButtonClick() {
      console.log(this.item_name);
      console.log(this.item_description);
      if (this.item_name !== '' && this.item_description !== '')
        ToDoItemService.saveToDoItem(this.list_id, {
          name: this.item_name,
          description: this.item_description,
          isDone: false
        }).then((response) => console.log(response))
          .catch( error => console.log(error))
          .finally(() => console.log("Add item finished."))
      this.$router.go(0)
    },
    onDeleteClick(id) {
      console.log(id);
      ToDoItemService.deleteToDoItem(id)
        .catch( error => console.log(error))
        .finally(() => console.log("Delete complete!"))
      this.$router.go(0)
    },
    onEditClick(item) {
      console.log("On edit click!");
      this.item_id = item.id;
      this.item_name = item.name;
      this.item_description = item.description;
      this.edit = true;
      this.myModal = true;
      console.log(this.item_id);
    },
    onEditSubmitButtonClick() {
      ToDoItemService.updateToDoItem(this.item_id, {
        name: this.item_name,
        description: this.item_description,
        isDone: false
      }).then((response) => console.log(response))
        .catch( error => console.log(error))
        .finally(() => console.log("Update complete."))

      this.item_id = 0;
      this.item_name = '';
      this.item_description = '';
      this.edit = false;
      this.$router.go(0);
    },
    onDoneClick(item) {
      console.log("On done click!");
      this.item_id = item.id;
      this.item_name = item.name;
      this.item_description = item.description;

      ToDoItemService.updateToDoItem(this.item_id, {
        name: this.item_name,
        description: this.item_description,
        isDone: true
      }).then((response) => console.log(response))
        .catch( error => console.log(error))
        .finally(() => console.log("Done complete."))

      this.item_id = 0;
      this.item_name = '';
      this.item_description = '';
      this.$router.go(0);
    }
  },
  created() {
    this.list_id = this.$route.params.id
    this.getToDoItems(this.list_id);
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
  flex-direction: column;
}

.container .div-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .div-container .card {
  position: relative;
  width: 80%;
  height: 100px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
}

.container .div-container .card .imgBx {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.container .div-container .card .imgBx img {
  position: absolute;
  width: 25%;
  left: -48px;
  margin: 24px 0 24px 0;
}

.container .div-container .card .imgBx h2 {
  color: white;
  font-weight: 600;
}

.container .div-container .card .content {
  position: relative;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .div-container .card .content .size {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .div-container .card .content .buttons {
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
}

.container .div-container .card .content .size h3 {
  color: white;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .div-container .card .content button {
  position: relative;
  display: inline-block;
  padding: 0 4px;
  margin: 0 4px;
  background: rgba(0, 0, 0, 0);
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}

.mark-done-button {
  margin: 0 4px;
  color: greenyellow !important;
}

.edit-button {
  margin: 0 4px;
  color: midnightblue !important;
}

.delete-button {
  margin: 0 4px;
  color: darkred !important;
}

.add-text {
  color: rgba(0, 0, 0, 0.5) !important;
  cursor: pointer;
}

.container .card {
  position: relative;
  width: 80%;
  height: 100px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
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
}

.container .card .imgBx img {
  position: absolute;
  width: 25%;
  left: -48px;
  margin: 24px 0 24px 0;
}


.container .card .imgBx h2 {
  color: white;
  font-weight: 600;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  margin-left: auto;
  margin-right: auto;
  transition: opacity .3s ease;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  display: flex;
  height: 100%;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.modal-content{
  width: 400px;
}

.modal-title-h4 {
  margin: 8px;
}

.form-group label {
  margin: 16px 0 8px 0;
}

.form-group input {
  margin-right: auto;
  margin-left: auto;
  width: 80%;
}

.add-submit-button {
  position: relative;
  top: 10px;
  display: inline-block;
  margin-bottom: 16px;
  padding: 12px 13px;
  background: white;
  border-radius: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}
</style>