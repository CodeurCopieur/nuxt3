<template>
 <div>
    <button @click="addTodoList">Add Todo</button>
 </div>
</template>

<script setup>
  const {todoList, addTodo} = useTodo();

  function addTodoList() {
    addTodo({id:1, text:"First Todo"})
    console.log("added", todoList.value);
  }
</script>