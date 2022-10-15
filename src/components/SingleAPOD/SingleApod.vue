<template>
    <div v-if="!curApod" class="loading"></div>
    <section v-else class="apod-section-container">
        <div class="img-container">
            <div class="container-title">
                <div>
                    <h2 class="container-title">{{curApod.title}}</h2>
                    
                    <p>{{curApod.copyright}}</p>

                </div>
                <div class="btn-container">
                    <button @click="toggleDesc" class="cta">Read more</button>
                    <button v-if="isImg" @click="toggleUrl" class="cta">APOD in HD</button>

                </div>
                <div v-if="visibleDesc" class="description">
                    <p>{{curApod.explanation}}</p>
                
                </div>
            </div>

            <img v-if="isImg"  :src="url" :key="imgKey" :alt="curApod.title" class="apod-img">
            <iframe v-else :src="url" frameborder="0" width="950" height="350"></iframe>
            
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

        const isImg = ref(true)
        const url = ref(null);


        const imgKey = ref(0)

        onMounted( async () => {
            const apod = await getApod(props.date);
            curApod.value = apod
            url.value = apod.url
            console.log(curApod.value);
            if(curApod.value.media_type === 'image'){
                isImg.value = true
            
            } else if(curApod.value.media_type === 'video') {
                isImg.value = false
            }
        })


       const toggleUrl = (e) => {
            if(url.value === curApod.value.url) {
                url.value =  curApod.value.hdurl
                imgKey.value++
                e.target.innerHTML = 'Lower resolution'
            } else if(url.value === curApod.value.hdurl) {
                url.value = curApod.value.url
                imgKey.value++
                e.target.innerHTML = 'APOD in HD'

            }
       }


        const toggleDesc = (e) => {
            visibleDesc.value = !visibleDesc.value
            if(visibleDesc.value)  {
                e.target.innerHTML = 'Read less'
            } else {
                e.target.innerHTML = 'Read more'

            }
        }

       

    return{ curApod, visibleDesc, toggleDesc, toggleUrl, imgKey, url, isImg }
    }

}
</script >

<style scoped>
.img-container {
    position: relative;
    padding: 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3vw;
}
.img-container > img {
    width: 35vw;
    height: 35vw;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

}

.description {
    padding: 1vw 0;
    color: var(--primarly);
    width: 30vw;
    height: auto;
}

.loading {
  margin-top: 10vw;
  margin-left: 59vw;

}
.cta{
    margin: auto;
    width: 14vw;
}
.btn-container {
    margin-top: 2vw;
    display: flex;
    justify-content: space-between;
}

</style>