<script setup>

import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const word_list = ref(['Кофе', "Бдсм"])

</script>

<template>
    <div class = "row_search">
        <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
        </IconField>
        <button type="button">Добавить</button>

    </div>

    
    <div class = "grid_word">
        <WordBlock/>
    </div>
</template>

<style scoped>

</style>