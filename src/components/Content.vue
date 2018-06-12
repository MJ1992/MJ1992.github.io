<template>
  <v-container >
    <v-layout row wrap height='100vh' class="mt-5 mx-4">
      <v-flex xs12 sm12 md12 >
            <h1 class="display-2 text-sm-center "  @mouseover='hovered=1000' @mouseleave='hovered=null'  :class="{ animated:true, swing:hovered===1000 }"> {{title}}</h1>
            <br>
            <span class="subheading mt-1"  :key='i' v-for="(line,i) in content"> 
              <span class="subheading" @mouseover='hovered=word+i' @mouseleave='hovered=null'  :class="{ animated:true, rubberBand:hovered===word+i }" :key='i' v-for="(word,i) in line.split(' ')">
               {{word}}
               </span>
               </span>   
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hovered: ''
    }
  },
  
  props: ["title", "content"],
  
};
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin: 0 !important;
}
h1 {
  color: #23F0C7;
 
}
span {
  display: inline-block;
  margin: auto 2px;
  color: #FFF;
}
span:hover {
  color: #23F0C7;
}
</style>
