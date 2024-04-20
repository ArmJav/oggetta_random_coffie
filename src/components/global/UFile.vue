<script setup>

import { ref } from 'vue';

const model = defineModel()

const file_name = ref("")

const uploadfile = (e) =>{
    const [file] = e.target.files
    file_name.value = file.name
    model.value = file
    // console.log(model.value)
}


</script>
<template>
    <div  class="flexi form-control-file">
        <span>{{file_name}}</span>
        <input 
            type = "file"
            name = "file_upload"
            @change="uploadfile"
            required
            >
    </div>
    
</template>

<style scoped>


    .form-control-file {
        background: var(--color-background);
        border: 1px solid var(--color-text);
        border-radius: 20px;
        width: 15vw;
        height: 5vw;
        color: var(--color-text);
        padding-left: 1em;
        font-size: 0.5em;
        padding: 10px;
        background-repeat: no-repeat;
        background-position: center center;
    }

   
    input {
        position: relative;
        height:100%;
        width: 100%;
        opacity: 0;

    }

    .flexi{
        display: flex;
        flex-wrap: wrap;
        
    }

    @media (max-width: 1040px) {

        .form-control-file {
            max-width: 450px;
            height: 150px;
            max-height: 250px;
            background-size: 30%;
        }
    }

    @media (max-width: 540px) {
        .form-control-file {
            max-width: 250px;
            height: 100px;
            max-height: 200px;
            background-size: 30%;
        }
    }

</style>