<template>
  <v-app>
    <Header/>
      <v-content>
        <HelloWorld/>
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
