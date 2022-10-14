<template>
  <SingleApod :date="now" class="today-container"/>
</template>

<script>
import { ref } from '@vue/reactivity'
import SingleApod from './SingleApod.vue'
export default {
  setup() {
    const today = ref('');

    const now = new Date().toISOString().slice(0, 10)
    today.value = now
    
    return{now}
  },

  components: {SingleApod}
}
</script>

<style scoped>
.loading {
  margin-top: 10vw;
  margin-left: 59vw;

}
</style>