<template>
  <base-sidebar>
    <li @click="setSelectedTab('MonthApod')" :class="activeMonthClass" class="list">This month's APOD</li>
    <li @click="setSelectedTab('TodayApod')" :class="activeTodayClass" class="list">Today's APOD</li>
    <router-link :to="{name: 'SelectedRange'}" class="list"> Select your APOD </router-link>
  </base-sidebar>
  <component :is="selectedComponent"></component>

</template>

<script>

 import TodayApod from '../components/SingleAPOD/TodayApod.vue'
 import MonthApod from '../components/MultipleAPOD/MonthApod.vue'
 import { computed } from '@vue/runtime-core'
 import { ref } from '@vue/reactivity'
 import BaseSidebar from '../UI/BaseSideBar.vue'

export default {
  components: {TodayApod, MonthApod, BaseSidebar},
  setup() {

    const selectedComponent = ref('MonthApod')

    const setSelectedTab = (tab) => {
         selectedComponent.value = tab

     }

     const activeTodayClass = computed(() => {
       return selectedComponent.value == 'TodayApod' ? 'active' : null
     })

     const activeMonthClass =computed(() => {
       return selectedComponent.value == 'MonthApod' ? 'active' : null
     })
     return {setSelectedTab, activeTodayClass, activeMonthClass, selectedComponent};

  }
}
</script>

<style>

</style>

