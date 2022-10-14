


const getMonthApod = () => {
    const now = new Date()

    const month =now.toLocaleString('eu-Eu', {month: 'long'})

    const firstDayWannabe = new Date(now.getFullYear(), now.getMonth(), 1)
    const lastDayWannabe =new Date(now.getFullYear(), now.getMonth() + 1, 0)


    const firstDay = new Date(firstDayWannabe).toISOString().slice(0, 10)
    const lastDay = new Date(lastDayWannabe).toISOString().slice(0, 10)
    

    return {month, firstDay, lastDay}
}

export default getMonthApod