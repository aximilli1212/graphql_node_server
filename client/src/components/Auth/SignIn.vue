<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form @submit.prevent="handleSigninUser">

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="username" prepend-icon="face" label="Username" type="text" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="password" prepend-icon="extension" label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name:"signin",
    data: () => ({
      username:'',
      password:''

    }),
    methods: {
      handleSigninUser(){
        this.$store.dispatch('signinUser',{username:this.username,password:this.password});
      }
    }
  }
</script>

<style>

</style>
