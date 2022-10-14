import { ref } from "vue"

const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'wtPuBCNXL0FUbZHfqByt2dzD87wIcXUI4Fjo0U2w&thumbs'

const error = ref(null)

const getApod = async (date) => {
    error.value = null
   let apod;
    try {

        const res = await fetch(`${apodUrl}${apiKey}&&date=${date}`)
        const data = await res.json()
        return data
        
    }catch(err)  {
        error.value = err
    }

   
}

export default getApod