<template>
    <div v-if="!curApod" class="loading"></div>
    <section v-else class="apod-section-container">
        <div class="img-container">
            <div class="container-title">
                <div>
                    <h2 class="container-title">{{curApod.title}}</h2>
                    
                    <p>{{curApod.copyright}}</p>

                </div>

                <button @click="toggleUrl" class="cta">See APOD in HD</button>
                <button @click="toggleDesc" class="cta">Sea more</button>
            </div>
            <img :src="url" :key="imgKey" :alt="curApod.title" class="apod-img">
            
        </div>
        <div v-if="visibleDesc" class="description">
            <p>{{curApod.explanation}}</p>
        
        </div>
        
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import getApod from '../../composables/getApod.js'
import { onMounted} from 'vue'



export default {
    props: ['date'],
   

    setup(props) {
        const curApod = ref(null);
        const visibleDesc = ref(false)
        const url = ref(null);
        const imgKey = ref(0)

        onMounted( async () => {
            const apod = await getApod(props.date);
            curApod.value = apod
            url.value = apod.url
        })


       const toggleUrl = (e) => {
            if(url.value === curApod.value.url) {
                url.value =  curApod.value.hdurl
                imgKey.value++
                e.target.innerHTML = 'Set back into lower resolution'
            } else if(url.value === curApod.value.hdurl) {
                url.value = curApod.value.url
                imgKey.value++
                e.target.innerHTML = 'See APOD in HD'

            }
       }


        const toggleDesc = (e) => {
            visibleDesc.value = !visibleDesc.value
            if(visibleDesc.value)  {
                e.target.innerHTML = 'See less'
            } else {
                e.target.innerHTML = 'See more'

            }
        }

       

    return{ curApod, visibleDesc, toggleDesc, toggleUrl, imgKey, url }
    }

}
</script >

<style scoped>
.img-container {
    position: relative;
    padding: 2vw;
    display: flex;
    gap: 1vw;
}
.img-container > img {
    width: 35vw;
    height: 35vw;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

}

.description {
    color: var(--primarly);
    padding: 0vw 2vw;
}

.loading {
  margin-top: 10vw;
  margin-left: 59vw;

}


</style>