<template>
  <form @submit.prevent="login">
    <div class="grid-x grid-padding-x">
      <div class="cell">
        <h2 class="title">Login</h2>
      </div>
      <div class="cell">
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" v-model="email">
      </div>
      <div class="cell">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <div class="cell">
        <button class="button" type="submit" name="button" title="Log in">Log in</button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login () {
      let email = this.email;
      let password = this.password;
      if (!email || !password) {
        return true;
      }
      firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
        this.$store.dispatch('setUser', user);
        this.$toasted.success('You have logged in.');
        this.$router.push('/');
      }).catch(error => {
        this.$toasted.error(error.message);
      });
    }
  }
};
</script>
