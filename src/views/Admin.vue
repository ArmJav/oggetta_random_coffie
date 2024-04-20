<script setup>

import { ref } from 'vue';

const items = ref([
        
        { id:1, image: '/src/components/icons/oggetto-logo.png', fio: 'Auaifds Bdfd asdf', birthday: '22.04.2021', status: 'Заблокирован' },
        { id:2, image: '/src/components/icons/elips.svg', fio: 'Kuaifds Bdfd asdf', birthday: '24.04.2021', status: 'active' },
        { id:3, image: '/src/components/icons/elips.svg', fio: 'Iuaifds Bdfd asdf', birthday: '28.04.2021', status: 'active' },        
    ])
const stat_view = () => {
    $router.push('/statistics')
    }
</script>


<template>
  <Header/>
  <div  class="search_st" >
    <input type="search" name="search_name">
    <div class="vl"></div>
    <i class="pi pi-search"></i>
  </div>
    <CardUser
      v-for="(item, index) in items" :key="index"
      :images = "item.image"
      :fio = "item.fio"
      :birthday = "item.birthday"
      :status = "item.status"
      class="cardus"
      @click="$router.push(`/profileuser/${item.id}`)"
    ></CardUser>
  

</template>

<style scoped lang="scss">

@import 'primeicons/primeicons.css';

  .cardus {
    margin-left: auto;
    margin-right: auto;
  }
  .search_st {
    width: 50vw;
    height: 50px;
    background: var(--color-background);
    border: 2px solid var(--color-text);
    border-radius: 20px;
    padding: 5px;
    display: grid;
    grid-template-columns: 15fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    input {
      width: 90%;
      height: 30px;
      background: var(--color-background);
      border: none;
      border-radius: 20px;
      color: var(--color-text);
      font-size: 1em;
      outline:none;
      padding: 10px;
    }

    i:hover {
      opacity: 0.6;
    }

    i:active {
      
      color: var(--vt-v-yellow);
      
    }

    .vl {
    border-left: 1px solid var(--color-text);
    height: 45px;
}

  }
</style>
