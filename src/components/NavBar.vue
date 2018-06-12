<template>
<v-container align-center class="pa-0 ">
  <v-layout wrap style="height: 100vh;"  >
      <v-navigation-drawer
      permanent
      dark
      absolute
      fixed
      class="navBar"
      fill-height
    >
    <Menu></Menu>
    </v-navigation-drawer>
  </v-layout>
  </v-container>
</template>
<script>
import Menu from './Menu'
export default {
  data () {
    return {
      
    }
  },
  components: {
    
    Menu
  },
  props: ['sideNav']
}
</script>

<style scoped>
.navBar{
  background-color: #181818 !important; 
}
</style>
