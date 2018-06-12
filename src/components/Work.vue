<template>
  <v-container fluid  >
    <v-layout row wrap fill-height color='grey darken-4'>
      <v-flex xs12 sm12 md12 class="contentSide" color='white' style="background-color:  #212121 ">
        <app-project-comp  :projects='projects'></app-project-comp>        
      </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import ProjectComp from './projectComponent'
export default {
  data () {
    return {
      projects: [ 
      {
        title: 'PMCAT',
      info: 'A live test taking system using AngularJS, ExpressJS, MongoDB, SocketIO, MDBootstrap',
      url: 'http://ec2-18-191-78-6.us-east-2.compute.amazonaws.com',
      images : ['pmcat1','pmcat2']
      },
      
      {
        title: 'SupDesk',
      info: 'A support ticketing system using AngularJS, ExpressJS, MongoDB, SocketIO, MaterializeCSS',
      url: 'http://pushy-expansion.surge.sh',
      images : ['supdesk3','supdesk1','supdesk2']
      },
      {
        title: 'Mechat',
      info: 'A chat app using ExpressJS, MongoDB, SocketIO, EJS, BootStrap',
      url: 'https://vast-forest-85607.herokuapp.com',
      images : ['mechat1','mechat2']
      },
      {
        title: 'Flopkart',
      info: 'An Ecommerce app using ExpressJS, EJS, MongoDB, Bootstrap',
      url: 'https://limitless-depths-39071.herokuapp.com',
      images : ['flopkart3','flopkart1','flopkart2']
      },
      {
        title: 'Blog',
      info: 'A Blog App using ExpressJS, MongoDB, EJS, Semantic UI',
      url: 'https://guarded-plains-88630.herokuapp.com',
      images : ['blog1','blog2']
      },
      {
        title: 'GameOFThrones',
      info: 'An App showing details of  GOT books,houses and people using AngularJS,Bootstrap and GOT API',
      url: 'http://loud-beast.surge.sh',
      images : ['got1','got2']
      },
      {
        title: 'PremierLeague',
      info: 'An App showing details of  PL season 2015-16 and 2016-17 using AngularJS,Bootstrap,PL API',
      url: 'http://small-creator.surge.sh',
      images : ['pl1','pl2']
      }]
    }
  },
  components: {
    'appProjectComp': ProjectComp
  }
}
</script>

<style scoped>
.container {
   padding: 0!important;
   margin: 0!important;
}
.contentSide{
  overflow-y: scroll; 
}
html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}

</style>
