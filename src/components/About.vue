<template>
<v-container fluid>
      <v-layout row wrap class='content' >
      <v-flex xs12 sm12 md12 class="contentSide">
        <v-card  tile flat color="grey darken-3"  class="image" fill-height>
            <v-layout row wrap  align-center justify-center> 
                <v-flex xs12 sm12 md12 class="">
              <canvas ref='snow' class="snow" ></canvas>
                 <v-flex xs12 sm12 md6 class="about" >
                 <!-- <app-content :title="title" :content='content'></app-content> -->
                </v-flex>
                  <v-flex xs12 sm6 md6 class="text-xs-center svgD hidden-xs-and-down">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="192.000000pt" height="263.000000pt" viewBox="0 0 192.000000 263.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,263.000000) scale(0.100000,-0.100000)"
                    fill="none" stroke="#FFF" stroke-width='5'>
                    <path class='first' d="M5 2620 c-8 -13 22 -52 66 -83 30 -22 45 -46 79 -129 85 -206 118
                    -333 150 -573 15 -114 10 -421 -8 -452 -14 -25 -41 -30 -60 -11 -19 19 -15 5
                    27 -93 43 -99 56 -118 115 -160 59 -43 63 -34 40 86 l-6 30 30 -28 c36 -34 62
                    -32 80 7 12 23 11 62 -3 252 -19 260 -37 393 -66 484 -31 98 -131 293 -214
                    421 -41 63 -70 115 -65 117 44 15 294 -106 375 -182 45 -42 156 -194 168 -230
                    2 -5 19 2 39 17 49 38 76 35 94 -8 27 -64 8 -135 -36 -135 -19 0 -30 8 -220
                    154 l-105 81 66 -80 c83 -101 117 -153 214 -339 l78 -149 24 39 c12 22 33 64
                    46 94 21 52 22 69 22 300 l0 245 -27 45 c-43 73 -93 117 -146 129 -26 7 -137
                    14 -247 16 -110 2 -224 9 -252 15 -32 7 -83 31 -130 62 -87 57 -120 72 -128
                    58z"/>
                    <path class='second' d="M1884 2620 c-11 -4 -55 -31 -97 -58 -47 -31 -98 -55 -130 -62 -28 -6
                    -143 -13 -255 -15 -112 -3 -222 -9 -245 -16 -49 -12 -107 -64 -145 -129 -27
                    -44 -27 -48 -30 -257 -2 -135 1 -232 8 -267 13 -65 79 -202 90 -189 4 4 40 71
                    80 148 92 176 126 230 209 330 l66 80 -105 -81 c-186 -143 -201 -154 -220
                    -154 -44 0 -63 71 -36 135 18 43 45 46 93 9 19 -14 35 -24 36 -23 136 219 184
                    267 353 352 71 36 177 71 194 65 5 -2 -20 -48 -56 -103 -121 -187 -204 -356
                    -238 -488 -18 -69 -42 -275 -57 -494 -9 -132 -8 -167 3 -190 17 -36 44 -40 74
                    -12 13 12 24 20 24 16 0 -22 -55 -384 -76 -497 -48 -260 -104 -391 -215 -503
                    -119 -120 -210 -142 -329 -82 -88 44 -124 96 -160 227 -44 165 -45 421 -2 536
                    30 78 79 141 143 182 119 77 203 73 253 -12 32 -54 56 -154 56 -234 0 -33 6
                    -68 13 -78 12 -17 16 -16 57 16 56 43 73 90 67 184 -6 87 -22 119 -83 173 -61
                    54 -161 86 -240 78 -176 -18 -338 -209 -410 -482 -27 -104 -26 -259 4 -352 27
                    -87 103 -204 175 -269 130 -118 255 -129 452 -39 138 64 195 153 279 442 18
                    65 50 170 69 233 28 93 121 476 152 630 l7 35 -24 -22 c-58 -54 -72 -20 -76
                    192 -4 181 4 269 44 474 26 132 45 192 114 359 34 83 49 107 79 129 67 48 91
                    105 35 83z"/>
                    </g>
                    </svg>

                  </v-flex> 
              
                </v-flex>
                
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  
</template>

<script>
import Content from "./Content.vue";
export default {
  data() {
    return {
      title: "About Me",
      content: "",
      canvas: "",
      ctx: "",
      requestId :'',
      particleArray: []
    };
  },

  components: {
    appContent: Content
  },
  methods: {
    Particle(x, y, radius) {
      let particle = {};
      particle.x = x;
      particle.y = y;
      particle.radius = radius;
      particle.color = "#FFF";
      if(particle.radius <0.5 ){
        particle.distanceX = 0.10;
        particle.distanceY = 7;
      }else {
        particle.distanceX = 0.10;
        particle.distanceY = 5;
      }

      particle.draw = () => {
        
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false)
        this.ctx.strokeStyle = particle.color;
        this.ctx.fillStyle = particle.color;
        this.ctx.fill();
      };
      particle.update = () => {
        particle.distanceX += 0.05;
        particle.distanceY += 5;
        particle.x = particle.x + 0.001 * particle.distanceX;
        particle.y = particle.y + 0.0001 * particle.distanceY;
  
        if(particle.radius<=0.5){
          
          if(particle.y > this.canvas.height*0.75 ||particle.x > this.canvas.width){
            particle.y = -Math.random() * this.canvas.height;
            particle.x = Math.random() * this.canvas.width;
            particle.distanceY = 5;
            particle.distanceX = 0.05;
            
          }
        }

        if(0.5<particle.radius<=0.75){
          
          if(particle.y > this.canvas.height*0.875 ||particle.x > this.canvas.width){
            particle.y = -Math.random() * this.canvas.height;
            particle.x = Math.random() * this.canvas.width;
            particle.distanceY = 5;
            particle.distanceX = 0.05;
            
          }
        }
        
        if(0.75<particle.radius<1){
          
          if(particle.y > this.canvas.height*0.98 ||particle.x > this.canvas.width){
            particle.y = -Math.random() * this.canvas.height;
            particle.x = Math.random() * this.canvas.width;
            particle.distanceY = 5;
            particle.distanceX = 0.05;
            
          }
        }

        if(particle.y > this.canvas.height ||particle.x > this.canvas.width){
          particle.y = -Math.random() * this.canvas.height;
          particle.x = Math.random() * this.canvas.width;
          particle.distanceY = 5;
          particle.distanceX = 0.05;
          
        }

      };

      return particle;
    },
    init() {
      this.particleArray = [];

      for (var f = 0; f < 400; f++) {
        this.particleArray.push(
          this.Particle(
            2*this.canvas.width * Math.random()-this.canvas.width,
            10-1000 * Math.random(),
            Math.random()*1.9+0.2,
          )
        );
      }
    },
    animate() {
      this.requestId = requestAnimationFrame(this.animate)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.particleArray.forEach(function(particle) {
        particle.draw()
        particle.update()
      });
    }
  },

  mounted() {
    this.canvas = this.$refs.snow
    this.ctx = this.$refs.snow.getContext("2d")
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.init()
    this.animate()
    this.content = this.content.split('\n');
  },
 beforeDestroy () {
    window.cancelAnimationFrame(this.requestId)
  }
};
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
}
.image {
  position: relative;
 background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://images.unsplash.com/photo-1500264071431-8dd63bfd6e7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c78b33a88db55351927936bfa03a9065&auto=format&fit=crop&w=1240&q=60");
  z-index: 0;
  background-repeat: no-repeat;
  background-size: auto;
}
.content{
  height: 100vh;
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
.snow {
  width: 100%;
  height: 100%;
}
.about {
  position: absolute;
  z-index: 5;
  top: 10.5%;
  left:2%; 
  width: 100%;

 
}

.svgD {
  position: absolute;
  z-index: 4;
  top: 20%;
  right:15%; 

 
}

@media only screen and (min-width: 701px) and (max-width: 850px)  {
 .svgD {
  position: absolute;
  z-index: 4;
  top: 20%;
  right:7.5%; 

 
} 
}
@media only screen and (max-width: 700px)  {
 .svgD {
  display: none;
  }
  .about {
  position: absolute;
  z-index: 5;
  top: 12.5%;
  left:50%; 
  transform: translateX(-50%);

 
}   
}
.first {
  fill: none;
  stroke: #FFF;
  stroke-dasharray: 7244 7244;
  stroke-dashoffset: 7245;
  opacity: 10;
  animation: animate1 8s ease-in forwards;
  stroke-width: 18px;
  stroke-linecap: round;
   stroke-linejoin: round;
}

.second {
  fill: none;
  stroke: #fff;
  stroke-dasharray: 13880 13880;
  stroke-dashoffset: 13880;
  opacity: 10;
  animation: animate2 8s linear forwards, fillName 5s ease-in 2s forwards;
  stroke-width: 18px;
  stroke-linecap: round;
   stroke-linejoin: round;
}
@keyframes animate1 {
  to {
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
     fill: #fff;
   
  } 
}
@keyframes animate2 {
  
  to {
    stroke-dashoffset: 0
  }
}
@keyframes fillName {
    0% {
    fill: none;
    }

      100% {
    fill: #08fDD8;
      }
    }    

</style>
