<template>
  <section :class="['login-signup', { active: true }]">
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/loginform.svg" alt="" />
          </div>
        </div>
        <div class="login-form">
          <div class="form-container">
            <form autocomplete="off" @submit.prevent="Login">
              <div class="input-div">
                <div class="input-primary input-set">
                  <div class="flag">
                    <div class="flag-img">
                      <img src="../../assets/images/msg.svg" alt="flag" />
                    </div>
                  </div>
                  <div class="container-input">
                    <input
                      type="email"
                      placeholder="Email"
                      v-model="email"
                      required
                    />
                  </div>
                  <!-- <div class="error" v-if="isError">Mobile Number Error!</div> -->
                </div>
                <div class="input-primary">
                  <div class="flag">
                    <div class="flag-img">
                      <img src="../../assets/images/lock.svg" alt="flag" />
                    </div>
                  </div>
                  <div class="container-input">
                    <input
                      type="password"
                      placeholder="Password"
                      v-model="pass"
                      required
                    />
                  </div>
                  <!-- <div class="error" v-if="isError">Mobile Number Error!</div> -->
                </div>
              </div>
              <div class="check-container">
                <div>
                  <label class="checkBox"
                    >Remember me
                    <input type="checkbox" v-model="remember" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="input-div">
                <button type="submit">Login</button>
                <!-- <button >Loading...</button> -->
              </div>
            </form>
          </div>
          <!-- <div class="buttom-text">
            Don’t Have an Account? <span @click="SignUpModel">Sign Up </span>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginModel",
  data() {
    return {
      email: null,
      pass: null,
      remember: false,
    };
  },
  methods: {
    async Login() {
      if (this.remember) {
        this.$cookies.set("user_email", this.email, 60 * 60 * 24 * 30 * 365);
        this.$cookies.set("user_pass", this.pass, 60 * 60 * 24 * 30 * 365);
      } else {
        this.$cookies.remove("user_email");
        this.$cookies.remove("user_pass");
      }
      localStorage.user = true;
      if (localStorage.user) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    this.email = this.$cookies.get("user_email");
    this.pass = this.$cookies.get("user_pass");
    if (localStorage.user == "false" || !localStorage.user) {
      this.$router.push("/login");
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.error {
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
  position: absolute;
  bottom: 0;
  width: 100%;
  bottom: -35px;
}
.check-container {
  display: flex;
  justify-content: center;
  margin: 5px 10px 20px 10px;
}
.check-container > div {
  width: 73%;
  text-align: left;
}
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f4f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 480px;
  background: #fff;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 60px;
  margin-bottom: 36px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  top: -10px;
  position: absolute;
  right: 0;
  width: 35px;
  height: 35px;
}
.login-form .input-primary {
  display: flex;
  height: 40px;
  padding: 6px 30px;
  border-radius: 50px;
  border: 1px solid #c3c3c3;
  margin-bottom: 14px;
  align-items: center;
  width: 60%;
  position: relative;
}
.login-form .input-set {
  margin-block: 18px;
}
.container-input {
  width: 90%;
}
.login-form input[type="email"],
.login-form input[type="password"] {
  width: 100%;
  /* height: 42px; */
  border: none;
  outline: none;
  user-select: none;
  margin-left: 10px;
}
.login-form input::placeholder {
  color: #b0b0b0;
}
.form-container {
  display: flex;
  justify-content: center;
}
.form-container form {
  width: 100%;
}
.input-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input-div button {
  background: #febb12;
  color: #fff;
  width: 72%;
  font-size: 18px;
  border: none;
  padding: 16px 30px;
  border-radius: 50px;
  outline: none;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
  cursor: pointer;
}
.input-div .flag {
  display: flex;
  align-items: center;
}
.input-div .flag .flag-img {
  width: 16px;
}
.input-div .flag span {
  color: #b0b0b0;
  font-size: 14px;
}
.buttom-text {
  text-align: center;
  font-size: 14px;
}
.buttom-text span {
  text-align: center;
  color: #febb12;
  cursor: pointer;
}
.checkBox {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #aaadaf;
}

/* Hide the browser's default checkbox */
.checkBox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -2px;
  left: 0;
  height: 16px;
  width: 16px;
  box-shadow: 0px 0px 10px #0000001a;
}
/* When the checkbox is checked, add a blue background */
.checkBox input:checked ~ .checkmark {
  background-color: #febb12;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkBox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkBox .checkmark:after {
  left: 5px;
  top: 1px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>