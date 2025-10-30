import axios, { AxiosError } from "axios";
import { onMounted, ref } from "vue";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

const users = ref<User[] | null>(null);
const isLoading = ref(false);
const error = ref<AxiosError | null>(null);
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
      error.value = err as AxiosError;
    } finally {
      isLoading.value = false;
    }
  }
  onMounted(getUser);

  function addUser(newUser: User) {
    if (!users.value) return;
    users.value.unshift(newUser);
  }

  function deleteUser(id: number) {
    if (!users.value) return;
    users.value = users.value.filter((user) => user.id !== id);
  }

  return { users, isLoading, error, addUser, deleteUser };
}
