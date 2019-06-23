import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './components/Posts/Posts.vue'
import AddPost from './components/Posts/AddPost.vue'
import SignIn from './components/Auth/SignIn.vue'
import SignUp from './components/Auth/SignUp.vue'
import Profile from './components/Auth/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/add_post',
      name: 'add_post',
      component: AddPost
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
