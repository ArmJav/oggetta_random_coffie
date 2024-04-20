<script setup>

</script>

<template>
    <Header/>

    <div class="home">
    <div class="container_photo">
      <img src="../icons/ava.png" alt="logo">
      <but/>
    </div>
    <div class="prof">
        <a class="info">Фамилия:</a>
        <a class="info">Имя:</a>
        <a class="info">Отчество:</a>
        <a class="info">Дата рождения:</a>
        <a class="info">Email:</a>
        <a class="info">Телелфон:</a>
    </div>
    <div class="meating">
        <a class="activity">Сфера деятельности</a>
        <div class="flex">
          <div class="inform">
            <a class="text">Немного о вас</a>
          </div>
          <div class="meat">
            <a class="text">Мероприятия</a>
          </div>
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
  left: -69%;
  top: 60vh;
  /* background: var(--vt-v-yellow); */
  filter: blur(5vw);
}

.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-items: center;
  margin-top: 5vw;
  width: 100%;

  }

.container_photo {
  display: grid;
  width: 30vw;
  height: 10vw;
  align-items: end;
}

.prof {
  width: 30vw;
  display: grid;
  height: 26vw;
  margin: 5vw;
}

.info {
  margin-top: 1vw;
  align-items: center;
  color: rgb(255, 221, 0);
  font-size: 0.9vw;
  font-weight: 21vw;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  border-bottom-style: solid;
  border-bottom-color: rgb(255, 255, 255);
}

.meating {
  width: 30vw;
  display: grid;
  height: 26vw;
}

.activity {
  margin-top: 1vw;
  align-items: center;
  color: rgb(255, 221, 0);
  font-size: 0.9vw;
  font-weight: 21vw;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  border-bottom-style: solid;
  border-bottom-color: rgb(255, 255, 255);
  height: 3.305vw;
}

.inform {
  margin-bottom: 1vw;
  position: relative;
  align-items: center;
  color: rgb(255, 221, 0);
  height: 20vh;
  font-size: 0.9vw;
  font-weight: 21vw;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1.6vw;
  background: rgb(0, 0, 0);
}

.text {
  position: absolute; 
  top: 0.6vw; 
  left: 0.8vw;
}

.meat {
  margin-top: 1vw;
  position: relative;
  display: flex;
  align-items: center;
  color: rgb(255, 221, 0);
  font-family: Montserrat;
  height: 20vh;
  font-size: 0.9vw;
  font-weight: 21vw;
  line-height: 1vw;
  letter-spacing: 0.1vw;
  text-align: left;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 1.6vw;
  background: rgb(0, 0, 0);
}

.flex {
  display: grid;
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
    position: absolute;
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