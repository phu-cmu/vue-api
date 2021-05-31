<template>
  <div class="flex flex-wrap w-full justify-center items-center">
    <div class="flex flex-wrap max-w-xl">
      <div class="p-2 text-2xl text-gray-800 font-semibold">
        <h1>Login to your account</h1>
      </div>
      <div
        class="p-2 w-full"
        data-validate="Valid email is required: ex@abc.xyz"
      >
        <label for="email">Your e-mail</label>
        <input
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Email"
          type="email"
          v-model="form.email"
        />
      </div>
      <div class="p-2 w-full" data-validate="Password is required">
        <label for="password">Password</label>
        <input
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Password"
          type="password"
          v-model="form.password"
          name="password"
        />
      </div>
      <div class="alert alert-danger" v-if="errors[0] && errors[0].email">
        {{ errors[0].email[0] }}
      </div>
      <div class="alert alert-danger" v-if="errors[0] && errors[0].password">
        {{ errors[0].password[0] }}
      </div>
      <div class="alert alert-danger" v-if="errors && errors.msg">
        {{ errors.msg }}
      </div>
      <div class="p-2 w-full mt-4">
        <button
          @click.prevent="loginUser"
          type="submit"
          class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors_email: "",
      errors_pwd: "",
      errors: {},
    };
  },
  methods: {
    // loginUser() {
    //   axios
    //     .post("/api/login", this.form)
    //     .then((response) => {
    //       console.log(response.data);
    //       localStorage.setItem("token", response.data.token);
    //       this.$router.push({ name: "Dashboard" });
    //     })
    //     .catch((error) => {
    //       this.errors = {};
    //       if (error.response.status == 400) {
    //         this.errors = error.response.data;
    //       }
    //     });
    // },
    loginUser() {
      this.$store
        .dispatch("onLogin", this.form)
        .then((res) => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          this.errors = {};
          if (error.status == 400) {
            this.errors = error.data
          }
        });
    },
  },
};
</script>