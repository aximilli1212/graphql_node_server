import Vue from 'vue'
import Vuex from 'vuex'

import {GET_POSTS,SIGNIN_USER,SIGNUP_USER,GET_CURRENT_USER} from './queries';
import { defaultClient as apolloClient } from './main'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      posts:[],
    loading:false,
  },
  mutations: {
    setPosts:(state,payload)=>{
       state.posts = payload;
    },
    setLoading:(state,payload)=>{
      state.loading = payload;
    }

  },
  getters:{
     getPosts:(state)=>{
        return state.posts;
     },
    getLoading:(state)=>{
       return state.loading;
    }
  },
  actions: {
      getCurrentUser:({commit,state},payload)=>{
          commit('setLoading',true);

          apolloClient.query({
              query: GET_CURRENT_USER
          }).then(({data})=>{
              commit('setLoading',false);

              console.log(data.getCurrentUser);
          }).catch(err=>{
              commit('setLoading', false);
              console.log(err);
          })


      },

        getPosts:({commit,state},payload)=>{
          commit('setLoading',true);
          //Use Apollo Client to fire getPosts query
          apolloClient.query({
            query:GET_POSTS

          }).then(({data})=>{
            console.log(data.getPosts);
            commit('setPosts',data.getPosts);
            commit('setLoading',false);

          }).catch(err=>{
            console.log(err);
            commit('setLoading',false);

          })
        },

       signinUser({commit,state},payload){
            apolloClient.mutate({
                mutation: SIGNIN_USER,
                variables: payload
            })
                .then(({data})=>{
                    console.log(data.signinUser);
                    localStorage.setItem('token',data.signinUser.token);
                })
                .catch(err=>{
                    console.error(err);
                });
       }
  }
})
