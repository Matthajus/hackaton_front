import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/todolists'

class ToDoListService {

  getToDoLists() {
    return axios.get(BASE_URL);
  }

}

export default new ToDoListService()