<template>

        <form @submit.prevent="getApods" class="from-container">
            <div class="labelInput">
                <div>
                    <label for="apodStart">Select the start date: </label>
                    <input type="date" id="apodStart" name="apodStart" v-model="start"/>

                </div>
                <div>
                    <label for="apodEnd">Select the end date:</label>
                    <input  type="date" id="apodEnd" name="apodEnd" v-model="end" />
                </div>
            </div>
          
            <p v-if="error"  class="error"> {{error}}</p>
            <div>
                <button v-if="start && end" class="cta">Get my APODs</button>
            </div>
        </form>
</template>

<script>
import { ref } from '@vue/reactivity'




export default {
    setup(props, context) {
        const start= ref(null);
        const end= ref(null);
        const error = ref(null)
        
        
        const getApods = () => {
            const curStart = new Date(start.value).getTime()
            const curEnd = new Date(end.value).getTime()
            const now = new Date().getTime()
            
            if(curStart > curEnd) {
                start.value = null
                end.value = null
                error.value = `The end of the period begins sooner than the start of the period! Try a later date!`
            } else if(curStart >= now || curEnd >= now) {
                start.value = null
                end.value = null
                error.value = `Sorry, but we do not have APODs from the future! Try a date from the past!`
            } else {
                context.emit('selectedDates', start.value, end.value)

            }

        }


        

        return { getApods, start, end, error }
    }

}
</script>

<style scoped>


</style>