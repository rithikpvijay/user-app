import axios from "axios";
import { onMounted, ref } from "vue";

const users = ref(null);
const isLoading = ref(false);
const error = ref(null);
let fetched = false;

export function useUsers() {
  async function getUser() {
    if (fetched) return;

    fetched = true;
    try {
      isLoading.value = true;
      error.value = null;
      const res = await axios.get(" https://jsonplaceholder.typicode.com/users");
      users.value = res.data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }
  onMounted(getUser);

  function addUser(newUser) {
    users.value.unshift(newUser);
  }

  function deleteUser(id) {
    console.log(id);
    users.value = users.value.filter((user) => user.id !== id);
    console.log(users.value);
  }

  return { users, isLoading, error, addUser, deleteUser };
}
