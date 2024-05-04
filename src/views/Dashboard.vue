<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'
import AdminHeader from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
// initialize components based on data attribute selectors

onMounted(() => {
    initFlowbite();
})


</script>

<template>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
      <adminHeader></adminHeader>
      <!-- Sidebar -->
      <SideBar></SideBar>

      <main class="p-4 md:ml-60 h-auto pt-20">
        <RouterView></RouterView>
      </main>
    </div>
</template>
<style scoped>

</style>