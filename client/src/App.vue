<template>
  <v-app>
      <v-navigation-drawer app temporary fixed v-model="sideNav" >

          <!--NavBar toolbar-->
          <v-toolbar color="accent" dark flat>
              <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
          <router-link to="/" tag="span">
              <h1>VueShare</h1>
          </router-link>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list>
              <v-list-tile v-for="item in s_nav" :key="item.title" ripple :to="item.link" >
                  <v-list-tile-action>
                      <v-icon>{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                      {{item.title}}
                  </v-list-tile-content>
              </v-list-tile>
          </v-list>

      </v-navigation-drawer>



      <!--Main ToolBar-->
    <v-toolbar app dark color="primary">
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor:pointer">VueShare</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <!--Search input-->
        <v-text-field
         flex
         prepend-icon="search"
         placeholder="Search posts"
         color="accent"
         single-line
         hide-details
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-toolbar-items>
             <v-btn flat v-for="i in h_nav" :key="i.title":to="i.link" dark>
                 <v-icon left>{{i.icon}}</v-icon>
                 {{i.title}}
             </v-btn>
        </v-toolbar-items>
    </v-toolbar>

      <content>
          <v-container class="mt-4">
              <transition name="fade">

              <router-view>

              </router-view>
              </transition>

          </v-container>
      </content>

          <!--<v-content>-->
              <!--<HelloWorld/>-->
          <!--</v-content>-->

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        sideNav:false,

    }
  },
    computed:{
      h_nav(){
          return [
              {icon:"chat",title:"Posts",link:"/posts"},
              {icon:"lock_open",title:"Sign In",link:"/signin"},
              {icon:"create",title:"Sign Up",link:"/signup"},
          ]
      }, s_nav(){
          return [
              {icon:"chat",title:"Posts",link:"/posts"},
              {icon:"lock_open",title:"Sign In",link:"/signin"},
              {icon:"create",title:"Sign Up",link:"/signup"},
          ]
      },
    },
    methods:{
      toggleSideNav(){
          this.sideNav  = !this.sideNav;
      }
    }
}
</script>

<style >
    .fade-enter-active,
    .fade-leave-active{
        transition-property: opacity;
        transition-duration:0.25s;
    }

    .fade-enter-active{
        transition-delay: 0.45s;
    }

    .fade-enter,
    .fade-leave-active{
        opacity:0;
        transform: translateY(-25px);
    }
</style>
