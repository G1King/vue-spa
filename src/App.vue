<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {getCueWords} from '@/service/api'
export default {
  name: 'App',
  mounted() {
   getCueWords().then((value) => {
     console.log(value);
   })
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010203;
  margin-top: 60px;
}
</style>
