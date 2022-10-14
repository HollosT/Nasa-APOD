
const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'wtPuBCNXL0FUbZHfqByt2dzD87wIcXUI4Fjo0U2w&thumbs'

const now = new Date()
const nowMS = now.getTime()
const nowYYYYMMDD = new Date(now).toISOString().slice(0, 10)

const getRangeOfApod = async (start, end) => {
    const endMS = new Date(end).getTime()
    if(endMS > nowMS) {
        end = nowYYYYMMDD
    }
        let data= [];
       try {

            const res = await fetch(`${apodUrl}${apiKey}&&start_date=${start}&&end_date=${end}`)
            const json = await res.json()
            data = json
            return data  
       } catch(err) {
            

       }

}


export default getRangeOfApod