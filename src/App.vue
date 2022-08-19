<template>
    <router-link to="/">首页</router-link>|
    <router-link v-for="i in [1,2,3]" :key="i" :to="{name:'users',params:{id:i}}">| 用户:{{i}} |</router-link>
    <hr>
    <!-- <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view> -->

    <router-view></router-view>
</template>
<script lang="ts" setup>
import {ref} from "vue"

</script>