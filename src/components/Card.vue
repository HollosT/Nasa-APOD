<template>
  <router-link :to="{name: 'Details', params: {id: apod.date}}">
      <article>
        <p>{{index + 1}}.</p>
            <h4>{{apod.title}}</h4>
        <img :src="apod.url" :alt="apod.title">
      </article>
    </router-link>

</template>

<script>


export default {
    props: ['apod', 'index'],
    setup() {
   
    }

}
</script>

<style scoped>

article {
    box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    width: 13vw;
    height: 10vw;
    position: relative;
    border-radius: .25vw;
    display: flex;
    transition: all 350ms linear;
}

article > * {
    color: var(--mildgrey);
    font-size: var(--100);
}
article > h4 {
    position: absolute;
    z-index: 2;
    bottom: 0%;
    background-color: var(--black);
    width: 100%;
    text-align: center;
    padding: .25vw;
    height: 25%;
}
article >p {
    color: var(--mildgrey);
}
article > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: -1 / 1;
    opacity: .4;
    transition: all 350ms linear;
    border-radius: .25vw;
}

article:hover {
    scale: 1.05;
    cursor: pointer;
}

article:hover >img {
    opacity: 1; 
}
article:hover >p {
    /* color: var(--white) */
}

</style>