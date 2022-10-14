<template>
  <h3 class="month-container-title">APODs of {{month}} </h3>

  <RangeOfApod :start="firstDay" :end="lastDay" />
</template>

<script>
import RangeOfApod from './RangeOfApod.vue';
import getMonthApod from '../../composables/getMonthApod.js'
export default {
    components: { RangeOfApod },

    setup() {
        const {month, firstDay, lastDay} = getMonthApod();


        return{month, firstDay, lastDay}
    }
    
}
</script>

<style scoped>
.month-container-title {
  width: 75%;
  margin-left: auto;
  padding: 3vw;
  text-align: center;
}

h3 {
  color: var(--primarly);
}
</style>