<template>
    <base-sidebar >
        <li @click="moveBack" class="list">Back</li>
        <li @click="setSelectedTab('Apods')" :class="activeMultipleClass" class="list">Select multiple APODs</li>
        <li @click="setSelectedTab('Apod')" :class="activeOneClass" class="list">Select one APOD</li>
    </base-sidebar>  
        <h2 class="container-title">Select your Apod</h2>

        <component :is="selectedComponent"></component>

      
</template> 

<script>
import BaseSidebar from '../UI/BaseSideBar.vue'
import { useRouter } from 'vue-router';
import {computed} from 'vue'
import Apods from '../components/MultipleAPOD/Apods.vue'
import Apod from '../components/SingleAPOD/Apod.vue'

import { ref } from '@vue/reactivity';

export default {
     setup() {
        const selectedComponent = ref('Apods')
        const router = useRouter()
      

        const moveBack = () => {
          router.go(-1)
        }
        
        
        const setSelectedTab = (tab) => {
         selectedComponent.value = tab

        }

        const activeMultipleClass = computed(() => {
         return selectedComponent.value == 'Apods' ? 'active' : null
        })

        const activeOneClass =computed(() => {
            return selectedComponent.value == 'Apod' ? 'active' : null
        })

        return{moveBack, setSelectedTab, selectedComponent, activeMultipleClass, activeOneClass}
    },
    
    components: { BaseSidebar, Apods, Apod }
}
</script>

<style scoped>
.container-title {
    margin-left: 53vw;
    margin-top: 2vw;
}



</style>