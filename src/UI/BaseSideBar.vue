<template>
  <nav class="sidebar">
    <slot>

    </slot>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {
  width: 20%;
  height: 100vh;
  background-color: var(--darkgrey);
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
}

</style>