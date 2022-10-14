<template>
  <base-sidebar >
    <li @click="moveBack" class="list">Back</li>
  </base-sidebar>  
  <SingleApod :date="date"/>
</template>

<script>
import SingleApod from '@/components/SingleApod.vue';
import { useRoute, useRouter } from 'vue-router';
import BaseSidebar from '../UI/BaseSideBar.vue'
export default {

    setup() {
        const route = useRoute()
        const router = useRouter()
        const date = route.params.id;



        const moveBack = () => {
          router.go(-1)
        }
        return{date, moveBack}
    },
    
    components: { SingleApod, BaseSidebar }
}
</script>

<style scoped>
.loading {

  margin-left: 59vw;

}

</style>