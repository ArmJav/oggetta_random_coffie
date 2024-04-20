<script setup>
    import { defineProps } from 'vue';
    
    import Avatar from 'primevue/avatar';

    
    defineProps({
        images: String,
        fio: String,
        birthday: String,
        status: String
    })

    
</script>


<template>

    <div class="conteiner" >
        <Avatar :image='images' class="mr-2" size="large" shape="circle" style="margin-left: 10vw;"/>

        <h4>ФИО: <span>{{ fio }}</span></h4>
        <h4>Дата рождения: <span>{{ birthday }}</span></h4>
        <h4>Статус: <span>{{ status }}</span></h4>
        <h4></h4>
    </div>

</template>

<style scoped lang="scss">

    .conteiner {
        width: 90vw;
        background: var(--color-background);
        border: 2px solid var(--color-text);
        border-radius: 30px;
        box-sizing: border-box;
        display: grid;
        align-items: center;
        padding: 1vw;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 5vh;

        h4 {
            color: var(--vt-v-yellow);
        }
        span {
            color: var(--color-text);
        }
    }
    


</style>