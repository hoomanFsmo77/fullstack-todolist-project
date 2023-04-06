<template>
  <button @click="getTodoList">
    update
  </button>
  <hr>
  <div v-for="item in todoHelper.data" :key="item.id">
    <p>Content: {{item.content}}</p>
    <p>Status:{{item.status}}</p>
    <br>
    <button @click="deleteTodo(item.id)">delete</button>
    <button @click="updateTodo(item.id)">update</button>
    <hr>
  </div>
</template>

<script setup lang="ts">
import {onMounted,reactive} from "vue";
import axios from "axios";

const todoHelper=reactive({
  flag:false as boolean,
  data:[] as any
})

const getTodoList = () => {
  todoHelper.flag=false
  axios.get('http://localhost:9001/api/todo/all').then(response=>{
    todoHelper.data=response.data.body
    todoHelper.flag=true
  })
}

const updateTodo = (id:number) => {
  const newContent=prompt('Enter new content:')
  if(newContent){
    const newStatus=confirm('Is todo done?')
    axios.put(`http://localhost:9001/api/todo/update/${id}`,{
      content:newContent,
      status:newStatus
    }).then(res=>{
      getTodoList()
    })
  }else{
    updateTodo(id)
  }
  console.log(id)
}

const deleteTodo = (id:number) => {
  axios.delete(`http://localhost:9001/api/todo/remove/${id}`).then(res=>{
    getTodoList()
  })
}


onMounted(()=>getTodoList())
</script>

<style scoped>

</style>