<script setup>

</script>

<template>
  <header>
    <Header/>
  </header>

  <img src="../components/icons/elips.svg" alt="blick" class = 'left_blic' >
  <img src="../components/icons/elips.svg" alt="blick" class = 'right_blic' >
</template>

<style scoped>

.right_blic {
  position: absolute;
  width: 90vw;
  height: 90vw;
  right: -49%;
  top: 50vh;
  /* background: var(--vt-v-yellow); */
  filter: blur(20px);
}

.left_blic {
  position: absolute;
  width: 90vw;
  height: 90vw;
  left: -69%;
  top: 60vh;
  /* background: var(--vt-v-yellow); */
  filter: blur(20px);
}

</style>
