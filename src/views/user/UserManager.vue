<template>
    <h1>用户管理器: {{$route.params.id}}</h1>
    <router-link :to="{name:'detail'}">用户详细信息</router-link> | <router-link :to="{name:'setting'}">用户设置</router-link>
    <hr>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import {ref,onMounted,onUnmounted,watch} from "vue"
import {useRoute} from 'vue-router'
const route=useRoute()

watch(()=>route.params.id,(id)=>{
    console.log(id)
})

</script>