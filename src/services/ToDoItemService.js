import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/todoitems'

class ToDoItemService {

  getToDoItems(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  saveToDoItem(id, item) {
    return axios.post(`${BASE_URL}/${id}`, item)
  }

  deleteToDoItem(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }

  updateToDoItem(id, item) {
    return axios.put(`${BASE_URL}/${id}`, item);
  }

}

export default new ToDoItemService()