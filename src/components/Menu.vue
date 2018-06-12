<template>
    <v-flex align-center class="navBar" fill-height>
    <v-toolbar flat class="transparent ">
     <v-list class="pa-0 text-sm-center ">
          <v-list-tile>
              <img src="https://ui-avatars.com/api/?name=Manish+Jangid&background=08FDD8" class="profile" >
        </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list class="pt-0 mt-5 text-sm-center" dense>
        
        <v-list-tile class="my-4" >
            <v-list-tile-action >
                <router-link  to="/"><i class="fa fa-home" aria-hidden="true"></i><b>Home</b></router-link>
            </v-list-tile-action>
          </v-list-tile>
        <v-list-tile class="my-4" >
            <v-list-tile-action>
                <router-link  to="/About"> <i class="fa fa-user-secret" aria-hidden="true"></i><b>About</b></router-link>
            </v-list-tile-action>
          </v-list-tile>
        <v-list-tile class="my-4" >
            <v-list-tile-action>
                <router-link  to="/Skills"> <i class="fa fa-cogs" aria-hidden="true"></i><b>Skills</b></router-link>
            </v-list-tile-action>
          </v-list-tile>
        <v-list-tile class="my-4" >
            <v-list-tile-action>
                <router-link  to="/Work"> <i class="fa fa-briefcase" aria-hidden="true"></i><b>Work</b></router-link>
            </v-list-tile-action>
          </v-list-tile>
        <v-list-tile class="my-4" >
            <v-list-tile-action>
                <router-link  to="/Contact"><i class="fa fa-mobile" aria-hidden="true"></i><b>Contact</b></router-link>
            </v-list-tile-action>
          </v-list-tile>
          </v-list>
          </v-flex>
</template>

<script>
export default {

}
</script>

<style scoped>
.list__tile__action a {
  text-decoration: none;
  color: black;
}

.list__tile__action  {
  text-decoration: none;
  display: block;
  padding: 15px 0;
  text-align: center;
  margin: 10px auto;
}



.list__tile__action a b {
  text-decoration: none;
  display: none;
  padding: 15px 0;
}
.list__tile__action a:hover i {
  display: none;
}
.list__tile__action a:hover b {
  text-decoration: none;
  display: block;
  padding: 15px 0;
  color: #08FDD8;
}
.profile {
  margin: auto;
}
.navBar {
  background-color:#181818;
}
.router-link-exact-active.router-link-active i{

  display:none;

}
.router-link-exact-active.router-link-active b {
  text-decoration: none;
  display: block;
  padding: 15px 0;
  color: #08FDD8;
}
 .fa{
    color: rgb(197, 197, 197);
    text-shadow: 1px 1px 1px #111;
    font-size: 2.25em;
}
</style>
