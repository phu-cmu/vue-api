<template>
  <div id="app">
    <div class="flex bg-gray-100 border-b border-gray-300 py-4">
      <div class="container mx-auto flex justify-between">
        <div class="flex">
        </div>
        <div class="flax" v-if="isLogin === false">
          <router-link class="mr-4" to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
        <div class="flax" v-if="isLogin === true">
            <button class="mr-4" @click="onLogout" >
                Logout
            </button>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        user:null
    };
  },
  computed: {
      isLogin(){
          return this.$store.state.auth.isAuthenticated
      }
  },
  methods: {
    onLogout() {
        this.$store.dispatch('onLogout')
        this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>