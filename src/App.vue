<template>
  <TheHeader />
  <!-- <TheSidebar /> -->
  <router-view/>
  
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';



export default {
    components: { TheHeader }
}
</script>

<style >

</style>
