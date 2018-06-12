<template>
<v-container fluid>
    <v-layout row wrap class="content" color="grey darken-3">
      <v-flex xs12 sm12 md12 class="contentSide">
        <v-card  tile flat color="grey darken-3" height='100vh' class="image">
            <v-layout row wrap fill-height>
                <v-flex xs10 offset-xs1 offset-sm0 offset-md0  sm12 md6 class="text-xs-center mt-5">
                   <h1 class="display-2 my-2 "  @mouseover="hovered='contact'" @mouseleave='hovered=null'  :class="{ animated:true, rubberBand:hovered==='contact' }"> Contact Me</h1>
                   <v-layout row>   
                  <v-flex xs12 sm10 offset-sm1>
               <v-form ref='form' v-model="valid" dark>
                <v-text-field
                  v-model="name"
                  label = "Name"
                  :rules="nameRules"
                        required
                 ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  type = 'email'
                   required
                 ></v-text-field>
                  <v-text-field
                  label="Subject"
                  v-model="subject"
                  
                ></v-text-field>
                <v-text-field
                  label="Message"
                  v-model="message"
                  :rules="msgRules"
                  required
                  multi-line
                ></v-text-field>
              
              <v-btn color="info" :disabled="!formValid" @click='send()'>Send</v-btn>
              </v-form>
              </v-flex>
              </v-layout>
              
                </v-flex>
                <v-flex xs12 sm12 md6 align-center class="social" >
                  <v-layout justify-center class="my-5" >
                      <h2 class="display-2 "  @mouseover="hovered='social'" @mouseleave='hovered=null'  :class="{ animated:true, wobble:hovered==='social' }"> Social</h2>
                    </v-layout>
                   <v-layout row wrap align-center justify-center class="text-xs-center social my-5">
                    
                   <v-flex sm3 md2 xs6 >
                     <v-btn fab dark href="https://github.com/MJ1992" target='_blank' exact>
                      <i class="fa fa-github" aria-hidden="true"></i>
                      </v-btn>
                    </v-flex>
                    <v-flex sm3 md2 xs6>
                      <v-btn fab exact href="https://plus.google.com/+manishjangid" target='_blank' >
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </v-btn>
                    </v-flex>
                    <v-flex sm3 md2 xs6>
                      <v-btn fab href="https://www.linkedin.com/in/manish-jangid-b2446568/" target='_blank' exact>
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </v-btn>
                    </v-flex>
                    <v-flex sm3 md2 xs6>
                      <v-btn fab href="https://codepen.io/MJ1992" target='_blank' exact>
                      <i class="fa fa-codepen" aria-hidden="true"></i>
                      </v-btn>
                    </v-flex>
                  </v-layout>   
                
                </v-flex>
                <v-snackbar
                  top
                  :timeout= 'timeout'
                  :color="color"
                  v-model="snackbar"
                >
                {{ text }}
                <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
              </v-snackbar>
            </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      timeout: 6000,
      snackbar: false,
      color: '',
      hovered: false,
      subject: '',
      message: '',
      msgRules: [
        v => !!v || 'Message is required'
      ],
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    formValid () {
      return this.valid
    }
  },
  mounted () {
    emailjs.init("user_OQQ2HFIb8Et1yklF43QHu")
  },
  methods: {
    send () {
      const that = this
      const templateParams = {
    name: this.name,
    email: this.email,
    subject: this.subject,
    message: this.message
    }
      emailjs.send('gmail', 'template_VQjcbjXw', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text)
       that.text = 'Thanks for Contacting.I will reply asap.'
       that.snackbar = true
       that.color = 'primary'
        that.name = ''
        that.email = ''
        that.subject= ''
        that.message = ''
        that.clear()
    }, function(error) {
       console.log('FAILED...', error);
       that.text = 'Some Error Occured.Retry!'
       that.snackbar = true
       that.color = 'error'
    });
    },
    clear () {
        this.$refs.form.reset()
      }
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
  background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),url('https://images.unsplash.com/photo-1496160568811-aaa6a214c499?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecda47a15b3132756dd1d4ae5a816cf4&auto=format&fit=crop&w=1240&q=160');
    background-repeat: no-repeat;
  background-size:  auto;
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

h1 {
  color: #23F0C7;
}
h2 {
  color: #23F0C7;
}


</style>
