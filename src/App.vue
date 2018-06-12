<template>
<div id="app">
    <v-app dark>
      <v-content>
            <v-toolbar fixed class="hidden-md-and-up" >
          <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
              <v-toolbar-title class="title">MJ</v-toolbar-title>
            </v-toolbar> 
         
      <div class="sideNav hidden-md-and-up pa-0">
        <v-layout wrap >
        <v-navigation-drawer
          v-model="drawer"
          temporary
          dark
          absolute
          class="sideNav"
          height="100vh"
        >
        <Menu></Menu>
      </v-navigation-drawer>
        </v-layout>
      </div>      
    <v-layout align-center >
      <v-flex  md1  class="hidden-sm-and-down navBar">
        <v-card  tile flat  >
          <NavBar :sideNav= 'sideNav'></NavBar>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md11 class="ml-0"  >
        <v-card dark tile flat  align-center color='grey darken-4' fill-height>
          <transition  enter-active-class="animated zoomIn" mode="out-in" leave-active-class="animated bounceOutRight">
          <router-view/>
          </transition>   
        </v-card>
      </v-flex>
    </v-layout>
     </v-content>
    </v-app>
 </div>
</template>

<script>
import NavBar from './components/NavBar'
import Menu from './components/Menu'
export default {
  name: 'App',
  data () {
    return {
      sideNav: true,
      drawer: false
    }
  },
  components: {
    NavBar,
    Menu
  }
}
</script>

<style scoped>
 
.sideNav {
  width: 100px !important;
  background-color: #181818 !important;
}

.navBar {
  background-color: #181818;
}
.title {
  color: #23f0C7;
}

</style>
