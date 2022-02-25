import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/todolists'

class ToDoListService {

  getToDoLists() {
    return axios.get(BASE_URL);
  }

  saveToDoList(list) {
    return axios.post(BASE_URL, list);
  }

  deleteToDoList(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }

  updateToDoList(id, list){
    return axios.put(`${BASE_URL}/${id}`, list);
  }

}

export default new ToDoListService()