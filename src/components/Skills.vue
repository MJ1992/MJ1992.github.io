<template>
  <v-container fluid >
    <v-layout row wrap class="content"  color="grey darken-4" >
      <v-flex xs12 sm12 md12 class="contentSide">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
        <div class="box4"></div>
            <v-layout row wrap align-center>
                <v-flex xs12 sm12 md6 align-center class=" mt-5" fill-height>
                   <app-content :title='title' :content='content'></app-content>
                </v-flex>
                <v-flex xs12 sm12 md6 class="text-sm-center canvasBox " fill-height>
                    <canvas ref='canvas' class="sphere" width='800' height="600" ></canvas>
                </v-flex>
            </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Content from "./Content";
export default {
  data() {
    return {
      canvas: "",
      ctx: "",
      requestId: "",
      particleArray: [],
      colorArray: ["#2ABB9B", "#2F3661", "#FF5A43", "#E0A86B", "#4F67FF"],
      Skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "AJAX",
        "REST",
        "VueJS",
        "Gulp",
        "Canvas",
        "Webpack",
        "SocketIO",
        "AngularJS",
        "Git",
        "NodeJS",
        "BootStrap",
        "JQuery",
        "MongoDB",
        "ExpressJS",
        "EJS",
        "MDBootstrap",
        "NPM",
        "Vuetify",
        "Materialize",
        'AWS',
        "Nginx"
      ],
      title: "Skills",
      content: `Main area of my expertise is Full Stack development using MEAN stack ( Mongo, ExpressJS, AngualrJS, NodeJS ). \nI enjoy everything related to design and development of front end side of web.On Front end side I have experience in HTML,CSS, JS (ES5,ES6), building small & medium Web Apps, jQuery, AngularJS, VueJS, Canvas, Bootstrap , MaterializeCSS etc.\nOn Back End side I have experience in ExpressJS, MongoDB, NodeJS and SocketIO.\nWould you like to know more ?........\nContact Me at jangid.manish40@gmail.com`
    };
  },

  components: {
    appContent: Content
  },
  methods: {
    Particle(x, y, radius, radians, distX, skill) {
      // let that = this
      let particle = {};
      particle.x = x;
      particle.y = y;
      particle.dx = 0.05;
      particle.distanceX = distX;
      particle.distanceY = 25;
      particle.dy = 0.05;
      particle.radius = radius;
      particle.radians = radians;
      particle.color = "#08FDD8";
      particle.skill = skill; //this.Skills[Math.floor(Math.random() * this.Skills.length)]

      particle.draw = () => {
        particle.sizeFactor = 0.75 + (Math.sin(particle.radians) + 1) / 2;
        this.ctx.beginPath();
        this.ctx.font =
          particle.radius * particle.sizeFactor * 1.2 + "px Aerial";
        this.ctx.fillText(particle.skill, particle.x, particle.y);
        this.ctx.strokeStyle = particle.color;
        this.ctx.fillStyle =
          "rgba(8, 253, 216," + (Math.sin(particle.radians) + 1) / 2 + ")";

        this.ctx.fill();
      };
      particle.update = () => {
        particle.radians += 0.02;
        particle.x = x + Math.cos(particle.radians) * particle.distanceX * 1.35;
        particle.y = y - Math.sin(particle.radians) * particle.distanceY;

        particle.draw();
      };

      return particle;
    },
    init() {
      this.particleArray = [];

      for (let i = 0; i < 4; i++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 6.85,
            10,
            0.5 + Math.PI * 2 * i / 4,
            70,
            this.Skills[i + 20]
          )
        );
      }

      for (let j = 0; j < 5; j++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 4.45,
            10,
            0.5 + Math.PI * 2 * j / 5,
            130,
            this.Skills[12 + j]
          )
        );
      }
      for (let a = 0; a < 6; a++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 3,
            10,
            Math.PI * 2 * a / 6,
            160,
            this.Skills[6 + a]
          )
        );
      }

      for (let c = 0; c < 6; c++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 2,
            10,
            0.5 + Math.PI * 2 * c / 6,
            160,
            this.Skills[c]
          )
        );
      }
      for (let m = 0; m < 5; m++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 1.55,
            10,
            Math.PI * 2 * m / 5,
            130,
            this.Skills[17 + m]
          )
        );
      }

      for (let k = 0; k < 4; k++) {
        this.particleArray.push(
          this.Particle(
            this.canvas.width / 2,
            this.canvas.height / 1.3,
            10,
            0.5 + Math.PI * 2 * k / 4,
            80,
            this.Skills[k]
          )
        );
      }
    },
    animate() {
      this.requestId = requestAnimationFrame(this.animate);
      //requestAnimationFrame(this.animate)

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particleArray.forEach(function(particle) {
        particle.draw();
        particle.update();
      });
    }
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.$refs.canvas.getContext("2d");
    this.init();
    this.animate();
    this.content = this.content.split("\n");
  },
  beforeDestroy() {
    window.cancelAnimationFrame(this.requestId);
  }
};
</script>

<style scoped>
.container {
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
}
.sphere {
  width: 100%;
  height: 100%;

  margin: 20px auto;
}
.canvasBox {
  width: 100%;
  height: 100%;
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


.box1  {
  width: 10%;
  height: 10%;
}

.box1 {
  position: absolute;
  top: 2.5%;
  left: 2%;
  border-top: 3px solid #414141;
  border-left: 3px solid #414141;
  z-index: 5;
}
.box2  {
  width: 10%;
  height: 10%;
}

.box2 {
  position: absolute;
  bottom: 2.5%;
  left: 2%;
  border-bottom: 3px solid #414141;
  border-left: 3px solid #414141;
  z-index: 5;
}
.box3  {
  width: 10%;
  height: 10%;
}

.box3 {
  position: absolute;
  top: 2.5%;
  right: 2%;
  border-top: 3px solid #414141;
  border-right: 3px solid #414141;
  z-index: 5;
}
.box4  {
  width: 10%;
  height: 10%;
}

.box4 {
  position: absolute;
  bottom: 2.5%;
  right: 2%;
  border-bottom: 3px solid #414141;
  border-right: 3px solid #414141;
  z-index: 5;
}
@media only screen and (max-width: 968px) {
  

.box1 {
  position: absolute;
  top: 10%;
  left: 2.5%;
  border-top: 3px solid #414141;
  border-left: 3px solid #414141;
  z-index: 5;
}


.box2 {
  position: absolute;
  bottom: 2.5%;
  left: 2.5%;
  border-bottom: 3px solid #414141;
  border-left: 3px solid #414141;
  z-index: 5;
}


.box3 {
  position: absolute;
  top: 10%;
  right: 2.5%;
  border-top: 3px solid #414141;
  border-right: 3px solid #414141;
  z-index: 5;
}


.box4 {
  position: absolute;
  bottom: 2.5%;
  right: 2.5%;
  border-bottom: 3px solid #414141;
  border-right: 3px solid #414141;
  z-index: 5;
}
}
</style>
