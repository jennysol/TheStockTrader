<template>
  <v-app>
    <Header/>
      <v-content>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
