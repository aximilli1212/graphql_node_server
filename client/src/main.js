import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);
// Setup AppolloClient

export const defaultClient = new ApolloClient({
  uri:'http://localhost:4800',
  fetchOptions:{
    credentials: 'include'
  },

  request: operation =>{
    //if no token with key of 'token' is in local storage, add it
    if(!localStorage.token){
      localStorage.setItem('token','');
    }

    operation.setContext({
      headers:{
        authorization: localStorage.getItem('token')
      }
    })

  },

  onError: ({ graphQLErrors, networkError}) =>{
    if(networkError){
      console.log('[NetworkError]',networkError);
    }

    if(graphQLErrors){
      for(let err of graphQLErrors){
        console.dir(err);
      }
    }
  }

});

const apolloProvider = new VueApollo({defaultClient});

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {

  theme:{
    primary: "#009688",
  secondary: "#607d8b",
  accent: "#03a9f4",
  error: "#f44336",
  warning: "#e91e63",
  info: "#00bcd4",
  success: "#4caf50"
},
})

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created(){
    this.$store.dispatch('getCurrentUser');
  }
}).$mount('#app');
