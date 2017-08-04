<template>
  <form @submit.prevent="login">
    <div class="grid-x grid-padding-x">
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
      firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
        this.$router.push('/');
      }).catch(error => {
        console.log(error.message);
      });
    }
  }
};
</script>
