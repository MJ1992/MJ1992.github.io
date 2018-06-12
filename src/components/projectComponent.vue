<template>
      <v-card  tile flat style="background-color:#212121 "  height='100vh'>
      <div class="title">
        <h1 class="display-2 mx-auto mb-3"  @mouseover="hovered='Projects'" @mouseleave='hovered=null'  :class="{ animated:true, tada:hovered==='Projects' }"> Projects</h1>
      </div>
      <v-divider></v-divider>
      <v-container fluid grid-list-md >
          <v-layout row wrap class='my-3 mx-3' justify-space-around>
            <v-flex class='my-3'  v-for='project in projects'
            :key="project.title" xs10 sm5 md4 >
              <v-card hover tile height='100%' 
               @mouseover="hovered=project" @mouseleave='hovered=null'  :class="{ animated :true, 'pulse':hovered===project }"
              >
                <v-carousel hide-controls >
                <v-carousel-item v-for="(name,i) in project.images" :src="'/static/img/'+ name+'.png'" :key="i" class="my-0 py-0" height='100px'></v-carousel-item>
                </v-carousel>
                <v-card-title primary-title>
                <div class="headline pTitle">{{project.title}}</div>
               </v-card-title>
                <v-divider></v-divider>
                    <v-card-text>
                 
                <div class="white--text subheading subH">{{project.info}}</div>
                     
                    </v-card-text>
                <v-card-actions dark>
                  <v-btn class="mx-auto" fab small color='teal lighten-1' dark :href="project.url" target='_blank' exact>
                      <i class="fa fa-info" aria-hidden="true"></i>
                      </v-btn>
                </v-card-actions>
              </v-card>
               </v-flex>
          </v-layout>
        </v-container>
      </v-card>
</template>

<script>
export default {
  props: ["projects"],
  data () {
    return {
      hovered: ''
    }
  }
};
</script>

<style scoped>
.title {
  width: 80%;
  text-align: center;
  color: #23F0C7;
  margin-left: auto;
  margin-right: auto;

}

.pTitle {
  color: #23F0C7;
}
.subH {
  word-wrap: break-word;
}
 .carousel{
  height: 250px !important;
 
}
.jumbotron{
  height: 200px !important;
}
.jumbotron__content{
  box-shadow:  inset 0 0 20px #000;
}




</style>
