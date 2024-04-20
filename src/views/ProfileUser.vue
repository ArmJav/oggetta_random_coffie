<script setup>

import { ref, reactive } from 'vue';

const image_path = ref('/src/components/icons/oggetto-logo.png')
const participant = reactive({
    fio: "Армен Джавадян Шагенович",
    birthday: "12.11.1999",
    course: 4,
    university_name: "ДГТУ",

}) 

const files_path = ref("")

const disableCheck = ref(true)
const changeDisable = () => {
    const elModal = document.querySelectorAll('.disablinput');
    elModal.forEach((el) => {
        if (disableCheck.value === true) {
        el.classList.add('enableinput')
        }
        else {
        el.classList.remove('enableinput');
        }
    });
    disableCheck.value = !disableCheck.value
}
</script>

<template>
    <Header/>

    <div class="home">
        <div class="container_photo">
            <div class = "circle-avatar">
                <img :src="image_path" alt="logo">
            </div>
            <UFile
                type="file"
                placeholder=""
                v-model="files_path"
            />
        </div>
        <div class="prof">
            <div class="info">
                <a>Фамилия:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="info">
                <a>Имя:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="info">
                <a>Отчество:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="info">
                <a>Почта:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="info">
                <a>Почта:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            <div class="info">
                <a>Почта:</a>
                <input  class="disablinput" :disabled="disableCheck" v-model="participant.fio">
            </div>
            
        </div>

    <div class="meating">
        <div class="activity">
            <a >Сфера деятельности</a>
        </div>
          <div class="inform">
            <a class="text">Немного о вас</a>
          </div>
          <div class="meat">
            <a class="text">Последний комментарий</a>
        </div>
        </div>
    </div>

    <img src="../components/icons/elips.svg" alt="blick" class = 'left_blic' >
    <img src="../components/icons/elips.svg" alt="blick" class = 'right_blic' >
    <div class = "button_conteiner">
        <div class="button_yellow">
            Back
        </div>
        <div class="button_stat" @click = "$router.push(`/statistics/${$route.params.id}`)">
            Статистика
        </div>
    </div>
    

</template>

<style scoped lang="scss">

.right_blic {
  position: absolute;
  width: 45vw;
  height: 45vw;
  right: 0%;
  top: 50vh;
  /* background: var(--vt-v-yellow); */
  filter: blur(5px);
  z-index: -1;
}

.left_blic {
  position: absolute;
  width: 90vw;
  height: 90vw;
  left: -50%;
  top: 10vw;
  /* background: var(--vt-v-yellow); */
  filter: blur(5vw);
  z-index: -1;
}

.home {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  max-width: 1280px;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
  grid-column-gap: 2cap;
  margin-top: 1vh;

  }

.container_photo {
  display: grid;
  grid-template-rows: 2fr 1fr;
  width: 30vw;
  height: 10vw;
  align-items: center;
  justify-items: center;

  .circle-avatar {
    width: 15vw; /* Размер круга */
    height: 15vw;
    border-radius: 50%; /* Делаем круглым */
    border: 2px solid rgb(255, 255, 255);
    overflow: hidden; /* Скрываем часть изображения, которая выходит за пределы круга */

    img {
        width:90%; /* Ширина изображения равна ширине обёртки */
        height: auto; /* Высота изображения автоматически подстраивается */
    }
  }

}
.disablinput{
        font-size: 0.8em;
        border: none;
        opacity: 0.8;
        background: #0F1016;
        color: var(--color-text);
    }
    .enableinput {
        border: 1px solid var(--cl-purple);
    }

.prof {
  width: 30vw;
  display: grid;
  height: 26vw;
}

.info {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: rgb(255, 221, 0);
  font-size: 0.6em;
  line-height: 2vw;
  letter-spacing: 0.1vw;
  text-align: left;
  border-bottom-style: solid;
  border-bottom-color: rgb(255, 255, 255);
}

.meating {
  width: 30vw;
  display: grid;
  grid-template-rows: 1fr 5fr 5fr;
  row-gap: 1vw;
}

.activity {
  display: flex;
  flex-direction: column;
  color: rgb(255, 221, 0);
  font-size: 0.6em;
  line-height: 2vw;
  letter-spacing: 0.1vw;
  text-align: left;
  border-bottom-style: solid;
  border-bottom-color: rgb(255, 255, 255);
  width: 100%;
}

.inform {
  margin-bottom: 1vw;
  position: relative;
  align-items: center;
  color: rgb(255, 221, 0);
  height: 20vh;
  font-size: 0.6em;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1.6vw;
  background: rgb(0, 0, 0);
  min-height: 15vw;
}

.text {
  position: absolute; 
  top: 0.6vw; 
  left: 0.8vw;
}

.meat {
  margin-top: 1vw;
  position: relative;
  align-items: center;
  color: rgb(255, 221, 0);
  min-height: 15vh;
  font-size: 0.6em;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1.6vw;
  background: rgb(0, 0, 0);
}


.button {
  position: absolute;
  width: 13vw;
  height: 3vw;
  left: 16vw;
  top: 31vw;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 25px;
  background: rgb(0, 0, 0);
}

.button_conteiner {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 5px;
    left: 0;
    right: 0;
}

.button_yellow, .button_stat{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.5vw;
    height: 4.4vw;
    background: var(--vt-v-yellow);
    border: 2px solid var(--color-background);
    border-radius: 1em;
    box-sizing: border-box;
    }
.button_stat {
    background: var(--color-stepian);
    
}

</style>