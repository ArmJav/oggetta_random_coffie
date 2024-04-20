<script setup>
    import { defineProps } from 'vue';

    defineProps({
        text: String
    })
</script>

<template>
    <div class = "word">
        <h4>{{ text }}</h4>
    </div>
</template>

<style scoped>
    .word {
        width: 116px;
        height: 30px;
        background: var(--color-background);
        border: 1px solid var(--color-text);
        border-radius: 10px;
        box-sizing: border-box;

    }
</style>