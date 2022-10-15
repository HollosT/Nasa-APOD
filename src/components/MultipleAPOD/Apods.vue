<template>
  <SelectMultipleApod v-if="!isData" @selectedDates="dates" />

    <button v-else-if="isData" class="cta container-title" @click="newSearch">New APODs</button>

    <RangeOfApod v-if="isData" :start="start" :end="end" class="select"  />
</template>

<script>
import RangeOfApod from './RangeOfApod.vue'
import SelectMultipleApod from '../Select/SelectMultipleApod.vue';
import {ref} from 'vue'
export default {
    components: { SelectMultipleApod, RangeOfApod },
    setup() {
        const start =  ref(null);
        const end =  ref(null);
        const isData = ref(false);

        const dates = ((startDate, endDate) => {
            
                start.value = startDate
                end.value = endDate
                isData.value = true
        })

        const newSearch = () => {
            isData.value = false
            start.value = null
            end.value = null
        }

    return {newSearch, dates, start, end, isData}

    }
}
</script>

<style scoped>
.cta  {
    font-size: unset;
    margin-left: 55vw;
}
</style>