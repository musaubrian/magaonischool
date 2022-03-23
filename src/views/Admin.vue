<template>
  <AdminNav />
  <div class="body">
    <h1 class="top">Newsletter & Fee structure</h1>
    <div class="upper">
      <div class="newscard">
        <router-link to="/uploads" class="link">
          <img src="@/assets/images/undraw_newspaper_k-72-w.svg" />
        </router-link>
      </div>
      <div class="feecard">
        <router-link to="/uploads" class="link">
          <img src="@/assets/images/pay.svg" />
        </router-link>
      </div>
    </div>
    <div class="lower">
      <h1>Assignments</h1>
      <div class="top-half">
        <div class="form-1">
          <router-link to="/assignments" class="link">
            <img src="@/assets/images/programming.svg" />
          </router-link>
        </div>
        <div class="form-2">
          <router-link to="/assignments" class="link">
            <img src="@/assets/images/teaching.svg" />
          </router-link>
        </div>
      </div>
      <div class="bottom-half">
        <div class="form-3">
          <router-link to="/assignments" class="link">
            <img src="@/assets/images/undraw_book_reading_kx-9-s.svg" />
          </router-link>
        </div>
        <div class="form-4">
          <router-link to="/assignments" class="link">
            <img src="@/assets/images/steps.svg" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/home/AdminNav.vue";
export default {
  name: "Admin",
  components: {
    AdminNav,
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  width: auto;
}
.top {
  text-align: center;
}
.upper {
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin: auto;
  justify-content: space-between;
  padding: 1rem;
}
.lower {
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
  padding: 0.5rem;
}

.newscard,
.feecard {
  background: #dfdede75;
  box-shadow: 1px 3px 30px 0 #686868f5;
  height: 90%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 20px;
}
.newscard img,
.feecard img,
.form-1 img,
.form-2 img,
.form-3 img,
.form-4 img {
  height: 100%;
  width: 100%;
  padding: 1rem;
}
.top-half,
.bottom-half {
  padding: 1rem 0 1rem 0;
  height: 90%;
  width: 98%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  border-radius: 20px;
}
.form-1,
.form-2,
.form-3,
.form-4 {
  background: #dfdede75;
  box-shadow: 2px 2px 25px 0 #686868f5;
  width: 45%;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;
}
.link {
  text-decoration: none;
  color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.newscard:hover,
.feecard:hover,
.form-1:hover,
.form-2:hover,
.form-3:hover,
.form-4:hover {
  transform: scale(1.1);
  box-shadow: 3px 4px 10px 3px #686868f5;
  transition: 280ms;
}

@media screen and (max-width: 500px) {
  .upper {
    height: 40%;
    padding: 0.4rem;
  }
  h1 {
    transform: scale(0.8);
  }
}
</style>