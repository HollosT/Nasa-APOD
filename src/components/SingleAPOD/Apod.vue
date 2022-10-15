<template>
  <SelectOneApod v-if="!isData" @selectedDate="dates"  />

  <button v-else-if="isData" class="cta container-title" @click="newSearch">New APOD</button>

  <SingleApod v-if="isData" :date="date" class="select"/>

</template>

<script>
import SelectOneApod from '../Select/SelectOneApod.vue';
import {ref} from 'vue'
import SingleApod from './SingleApod.vue';
export default {
    components: { SelectOneApod, SingleApod },

    setup() {
        const date =  ref(null);
        const isData = ref(false);

        const dates = (curDate => {  
            date.value = curDate
            isData.value = true
            console.log(date.value);
        })

        const newSearch = () => {
            isData.value = false
            date.value = null
        }

        return {isData, date, dates, newSearch}
    }
}
</script>

<style scoped>
.cta  {
    font-size: unset;
    margin-left: 55vw;
}
</style>