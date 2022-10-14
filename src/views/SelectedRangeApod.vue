<template>
    <base-sidebar >
        <li @click="moveBack" class="list">Back</li>
    </base-sidebar>  
        <h2 class="container-title">Select your Apod</h2>



        <SelectApod v-if="!isData" @selectedDates="dates" />
        <button v-else-if="isData" class="cta container-title" @click="newSearch">New APODs</button>

        <RangeOfApod v-if="isData" :start="start" :end="end" />
</template> 

<script>
import BaseSidebar from '../UI/BaseSideBar.vue'
import { useRouter } from 'vue-router';
import SelectApod from '@/components/SelectApod.vue';
import RangeOfApod from '@/components/RangeOfApod.vue';
import { ref } from '@vue/reactivity';

export default {
     setup() {
        const router = useRouter()
        const start =  ref(null);
        const end =  ref(null);
        const isData = ref(false);

        const moveBack = () => {
          router.go(-1)
        }
        
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
        return{moveBack, dates, start, end, isData,  newSearch}
    },
    
    components: { BaseSidebar, SelectApod, RangeOfApod }
}
</script>

<style scoped>
.container-title {
    margin-left: 53vw;
    margin-top: 2vw;
}

.cta  {
    font-size: unset;
    margin-left: 55vw;
}

</style>