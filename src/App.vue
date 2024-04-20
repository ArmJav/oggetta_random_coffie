<script setup>
import { RouterLink, RouterView } from 'vue-router'

import {
  GoogleSignInButton,
} from "vue3-google-signin";


const handleLoginSuccess = (response) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<template>
<!-- 
  <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton> -->
    <RouterView />
</template>

<style scoped>

</style>
