<template>
    
    <div v-if="apodsArr.length == 0" class="loading-container">
      <div class="loading"></div>
    </div>
    <div v-else class="month-container">
      <Card v-for="(apod, index) in apodsArr" :key="apod.date" :apod="apod" :index="index" />
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import getRangeOfApod from '../composables/getRangeOfApod.js'
import Card from './Card.vue'


export default {
  components: {Card},
  props: ['start', 'end'],

  setup(props) {
    const apodsArr = ref([])
    
    const getApods = async () => {
      const apods = await getRangeOfApod(props.start, props.end)
      apodsArr.value = apods
    }
    
    getApods()

  
      return { apodsArr };
  }
}
</script>

<style scoped>

.month-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 75%;
  margin-left: auto;
  gap: 1vw;
}
.loading {

  margin-left: 59vw;
 
}


</style>