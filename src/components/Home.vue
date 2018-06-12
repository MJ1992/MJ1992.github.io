<template>
 <v-layout row wrap height='100vh'>
      <v-flex xs12 sm12 md12 height='100vh'>
        <v-card  tile flat color="grey darken-4 " height='100vh'>
          <div id="particle-js"></div>
            <v-layout row align-center justify-center fill-height wrap >
                <v-flex xs12 sm12 md12  class="text-sm-center" >
                  <div class="s" style='color: #23F0C7' v-html='text1'></div>
                  
                    </v-flex>
                
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      text: `<h2 class="s headline "> Hello, my name is <b>Manish Jangid</b>.</h2> 
             <h2 class="s headline"> Full Stack Web Developer and UI/UX Javascript specialist.</h2> 
             <h2 class="s subheading"> Based in Bengaluru, KA. Enquires at jangid.manish40@gmail.com </h2>`,
      text1: "",
      sText: `<h2 class="s headline "> Hello, my name is <b>Manish Jangid</b>.</br>
             Full Stack Web Developer and UI/UX Javascript specialist.</br> 
              &nbsp;<span class="s subheading">Based in Bengaluru, KA. Enquires at jangid.manish40@gmail.com</span> </h2>`,
      particles: {
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#23F0C7"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#23F0C7",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 125,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
    };
  },

  mounted() {
    particlesJS("particle-js", this.particles);
    //this.type(this.text);
    this.type(this.sText);
  },
  computed: {
    spanEach() {
      return this.sText.replace(
        /\w/g,
        "<span class='wrap'>$&</span>"
      )
    }
  },
  methods: {
    type(line) {
      const textA = line.split("");
      this.text1 = "";
      for (let i = 0; i < textA.length; i++) {
        setTimeout(() => {
          this.text1 += textA[i];
          console.log(this.text1);
        }, 50 * i);
      }
    }
    
}
}
</script>

<style scoped>
#particle-js {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
   /* background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url("https://images.unsplash.com/photo-1505762088641-031f116a9906?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ceec808f75276c1a1b125b77023c01a&auto=format&fit=crop&w=1240&q=60");
  background-repeat: no-repeat;
  background-size: cover; */
   }
.s {
  z-index: 4;
  position: relative;
  top:50%;
  width: 100%;
  margin: 0 auto;
  font-size: 100%;
  text-align: center;
}


.s >>> b {
  color: #FFF;
}
.s >>> subheading {
  margin: 0px auto;
}


</style>
