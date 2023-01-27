export default function useTodo() {

  const todoList = ref([])

  function addTodo(payload) {
    todoList.value = [...todoList.value, payload]
  }

  return {
    todoList, addTodo
  }
}