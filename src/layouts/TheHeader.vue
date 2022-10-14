<template>
    <header>
        <h1>Nasa apod</h1>
        <nav>
           <!-- <router-link>Apod of the day</router-link> -->
        </nav>
    </header>
  
</template>

<script>
export default {
    setup() {
        
    }

}
</script>

<style scoped>
    header{
        padding: .5rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, .25);
        background-color: var(--mildblack);
    }

    h1 {
        text-align: left;
        padding-left: 3vw;
        color: var(--primarly);
        font-size: var(--h1);
    }
</style>