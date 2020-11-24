<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
>>>>>>> 8d834ac7e122ca76bdd03f93649fc7a25261a01f
  </div>
</template>

<script>
<<<<<<< HEAD
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
=======
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
    @import "assets/css/base.css";

>>>>>>> 8d834ac7e122ca76bdd03f93649fc7a25261a01f
</style>
