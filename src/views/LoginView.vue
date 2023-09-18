<template>
  <div class="container">
    <div id="loginForm">
      <h2>Login</h2>
      <form @submit="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" class="form-control" id="username" required>
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <div class="input-group">
            <input v-model="loginPassword" :type="showPassword ? 'text' : 'password'" class="form-control"
              id="loginPassword" required>
            <div class="input-group-append">
              <button @click="togglePassword" class="btn btn-outline-secondary" type="button">{{ showPassword ? 'Hide' :
                'Show' }}</button>
            </div>
          </div>
        </div>

        <div class="d-flex gap-3">
          <ButtonCom type="submit" class="btn btn-success btn-block w-100" text="Login" />
          <!-- <router-link to="/SignUp">
            <ButtonCom type="button" class="btn btn-success btn-block" text="Sign Up" />
          </router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonCom from '../components/ButtonCom.vue'

export default {
  components: {
    ButtonCom
  },
  data() {
    return {
      username: '',
      loginPassword: '',
      showPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    login(event) {
      event.preventDefault();

      if (this.loginPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.username,
          password: this.loginPassword,
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log('Login successful:', data);
          alert('Login successful. Check the console.');
          localStorage.setItem("username", data.username);
          localStorage.setItem("loginPassword", this.loginPassword);
          localStorage.setItem("token", data.token);

          this.$router.push('/dashboard'); // Redirect to a dashboard page
        })
        .then(console.log);
    }
  }
};
</script>
  

<style>
#loginForm {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

#loginForm h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

#togglePassword {
  cursor: pointer;
}

#togglePassword:hover {
  text-decoration: underline;
}
</style>