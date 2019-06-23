<template>

  <v-container text-xs-center>
    <v-layout>
      <v-dialog
              v-model="getLoading"
              hide-overlay
              persistent
              width="300"
      >
        <v-card
                color="primary"
                dark
        >
          <v-card-text>
            Please stand by
            <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>


             <v-carousel v-if="!getLoading && getPosts.length > 0" v-bind="{'cycle':true}" interval="5000">
               <v-carousel-item
                        v-for="post in getPosts"
                       :key="post._id"
                       :src="post.imageUrl"
               >
                 <h1
                   id="carousel__title"
                 >
                   {{post.title}}
                 </h1>
               </v-carousel-item>
             </v-carousel>

       <v-btn @click="handleGetCarousel">Handle Him</v-btn>


  </v-container>




</template>

<script>
  import {gql} from 'apollo-boost';
  import {mapGetters} from 'vuex';

  export default {
    name:'home',
        data(){
           return {}
        },
    computed:{
      ...mapGetters(['getLoading','getPosts']),
      //   posts(){
      //     return this.$store.getters.getPosts;
      //   },
      // loading(){
      //     return this.$store.getters.getLoading;
      // },
    },
    mounted(){
      this.handleGetCarousel();
    },
    methods:{
       handleGetCarousel(){
         this.$store.dispatch('getPosts');
       }
    }


  }
</script>

<style>
  #carousel__title{
    position:absolute;
    background-color: rgba(0,0,0,0.5);
    color:white;
    border-radius:5px 5px 0 0;
    padding: 0.5em;
    margin: 0 auto;
    bottom: 50px;
    left: 0;
    right: 0;
  }
</style>
