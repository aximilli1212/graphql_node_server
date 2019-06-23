import Vue from 'vue'
import Vuex from 'vuex'

import {gql} from 'apollo-boost';
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
        getPosts:({commit,state},payload)=>{
          commit('setLoading',true);
          //Use Apollo Client to fire getPosts query
          apolloClient.query({
            query:gql`
              query{
                getPosts {
                  _id
                  title
                  imageUrl
                  likes
                  description
                }
              }
            `

          }).then(({data})=>{
            console.log(data.getPosts);
            commit('setPosts',data.getPosts);
            commit('setLoading',false);

          }).catch(err=>{
            console.log(err);
            commit('setLoading',false);

          })
        }
  }
})
