<template>
  <nav>
    <div class="icon">
      <img src="@/assets/images/programming.svg" alt="" />
    </div>
    <div class="brand">
      <h3>magaoni school</h3>
    </div>
    <div class="side">
      <span>
        <button @click="signOutUser">Logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "@/firebase";
import { useRouter } from "vue-router";
export default {
  name: "AdminNav",

  setup() {
    const { user } = useAuthState();
    const auth = getAuth();

    const router = useRouter();
    const signOutUser = async () => {
      try {
        await signOut(auth);
        router.push("/");
      } catch (e) {
        alert(e.message);
      }
    };
    return { user, signOutUser };
  },
};
</script>

<style>
nav {
  background: #ff501f;
  height: 9.5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: auto;
}
.brand {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: justify;
  padding: 0.5rem;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  color: #e9e8e8;
  font-size: 1.4rem;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.icon img {
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border-radius: 20px;
}
.side {
  height: 90%;
  width: 12%;
  padding: 0.5rem;
  color: #fff;
  font-weight: 620;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}
.side button {
  padding: 0.8rem;
  border: none;
  background: #010018;
  color: #fff;
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 600;
}
@media screen and (max-width: 550px) {
  .icon {
    width: 25%;
    padding: 0;
  }
  .side {
    width: 16%;
  }
  .brand {
    transform: scale(0.9);
  }
}
</style>