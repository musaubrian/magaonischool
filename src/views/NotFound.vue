<template>
  <div class="back">
    <span>☹</span>
    <h1>page not found</h1>
    <router-link to="/" class="lnk">
      <button class="btn">Home</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back {
  background: url("../assets/images/undraw_best_place_r685.svg");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
span {
  font-size: 4rem;
  font-weight: 650;
}
.back h1 {
  font-size: 2.5rem;
  padding: 2rem;
  text-transform: capitalize;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  font-weight: 600;
  background: #ff5100;
  border: none;
  border-radius: 20px;
  color: #000;
}
.btn:hover,
.btn:active {
  transform: scale(1.1);
  background: none;
  border: 4px solid #ff5100;
  transition: 280ms;
}
.lnk {
  text-decoration: none;
}
@media screen and (max-width: 450px) {
  .back h1 {
    font-size: 2rem;
    padding: 1.5rem;
  }
}
</style>
