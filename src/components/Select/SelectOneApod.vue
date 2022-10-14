<template>
  <form @submit.prevent="getApods" class="from-container">
            <div class="labelInput">
                <div>
                    <label for="apodStart">Select a date: </label>
                    <input type="date" id="apodStart" name="apodStart" v-model="date"/>
                </div>
            </div>
          
            <p v-if="error"  class="error"> {{error}}</p>
            <div>
                <button v-if="date" class="cta">Get my APODs</button>
            </div>
        </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props, context) {
        const date= ref(null);
        const error = ref(null)
        
        
        const getApods = () => {
            const curDate = new Date(date.value).getTime()
            const now = new Date().getTime()
            
            if(curDate > now) {
                date.value = null
                error.value = `Sorry, but we do not have APODs from the future! Try a date from the past!`
            } else {
                context.emit('selectedDate', date.value)

            }

        }


        

        return { getApods, date, error }
    }

}
</script>

<style>

</style>