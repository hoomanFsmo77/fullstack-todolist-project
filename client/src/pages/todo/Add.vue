<template>
  <input v-model="newTodoData.content" placeholder="content">
  <input v-model="newTodoData.status" type="checkbox" >
  <p v-if="fetchFlag">Todo Added!</p>
  <br>
  <button @click="addTodo">add</button>
</template>

<script setup lang="ts">
import {reactive,ref} from "vue";
import axios from "axios";
const newTodoData=reactive({
  content:'' as string,
  status:false as boolean
})
const fetchFlag=ref<boolean>(false)

const addTodo = () => {
  fetchFlag.value=false
  if(newTodoData.content){
    axios.post('http://localhost:9001/api/todo/add',{
      content:newTodoData.content,
      status:newTodoData.status,
    }).then(res=>{
      fetchFlag.value=true
      console.log(res)
    })
  }else{
    alert('enter a valid content')
  }

}

</script>

<style scoped>

</style>