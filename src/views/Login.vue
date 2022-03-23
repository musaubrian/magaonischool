<template>
  <div class="center">
    <div class="form">
      <h1>Magaoni school</h1>
      <h1>login</h1>
      <form @submit.prevent="handleSubmit">
        <input name="email" type="email" placeholder="Email" />
        <input name="password" placeholder="password" type="password" />
        <button type="submit" class="login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const handleSubmit = async (e) => {
      const { email, password } = e.target.elements;
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push("/");
      } catch (e) {
        alert(e.message);
      }
    };
    return { handleSubmit };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 100vh;
  align-content: center;
  margin: auto;
  font-size: 1.15rem;
}
h1 {
  color: #fff;
  text-align: center;
  text-transform: capitalize;
  padding: 1rem;
  margin: 0 auto 0 auto;
}
.form {
  width: 90%;
  background: #0a0908;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  width: 80%;
}
input {
  width: 100%;
  padding: 1rem;
  border: none;
  margin-bottom: 1rem;
  border-radius: 20px;
  font-size: 1.1rem;
  background: #e7e6e6;
  font-weight: 550;
  text-align: center;
}
.login {
  border: none;
  border-radius: 20px;
  width: 40%;
  margin: auto;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 650;
  background: #ff5100;
}
.login:hover,
.login a {
  background: none;
  border: 4px solid #ff5100;
  transform: scale(1.1);
  font-weight: 680;
  color: #fff;
}
@media screen and (max-width: 550px) {
  form,
  .center {
    width: 100%;
  }
  .form{
    flex-direction: row;
    flex-wrap: wrap;
  }
  input {
    width: 100%;
  }
  .login,
  login a {
    width: 60%;
    padding: 1rem;
  }
}
</style>