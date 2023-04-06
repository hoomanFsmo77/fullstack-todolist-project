<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name:'SHOW'}">
          Show
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'ADD'}">
          Add
        </router-link>
      </li>
    </ul>
  </nav>
  <hr>
  <keep-alive><router-view></router-view></keep-alive>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";
const router=useRouter()
onMounted(()=>{
  router.push({name:'SHOW'})
})

</script>

<style scoped>
ul{
  display: flex;
  gap:2rem
}
</style>