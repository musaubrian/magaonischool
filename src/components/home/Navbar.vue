<template>
  <nav>
    <div class="icon">
      <img src="@/assets/images/programming.svg" alt="" />
    </div>
    <div class="brand">
      <h3>Magaoni school</h3>
    </div>
    <div class="side">
      <span class="material-icons side sidenav"> menu </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background: #ff501f;
  height: 9vh;
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
  height: 100%;
  width: 20%;
}
.icon img {
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border-radius: 20px;
}
.side {
  height: 100%;
  width: 7%;
  padding: 0.5rem;
  color: #fff;
  font-weight: 620;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}
@media screen and (max-width: 550px) {
  .side {
    width: 16%;
  }
  .brand {
    transform: scale(0.9);
  }
}
</style>
