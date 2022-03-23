<template>
  <div class="footer">
    <div class="right">
      <div class="quicklinks">
        <h2 class="large">Quick links</h2>
        <ul>
          <li><router-link to="/" class="links"> Home </router-link></li>
          <li><router-link to="/about" class="links"> About </router-link></li>
          <li><router-link to="#" class="links"> Contact </router-link></li>
          <li><router-link to="/admin" class="links"> Admin </router-link></li>
        </ul>
      </div>
    </div>
    <div class="left">
      <div class="social">
        <h2 class="large">Social</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: auto;
  width: 100%;
  background: #010018;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 3rem auto auto auto;
}
.large {
  font-size: 1.9rem;
}
.right {
  border-right: 4px solid #ff7300;
  padding-left: 1rem;
  margin: 1rem 0 1rem 0;
  height: 98%;
  width: 50%;
}
.left {
  width: 50%;
  padding-left: 1rem;
  margin: 1rem 0 1rem 0;
}
.quicklinks,
.social {
  padding: 1rem;
  margin: auto;
  text-align: center;
  color: #fff;
}
ul {
  padding-top: 1rem;
}
.links {
  padding: 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 550;
}
.links:hover {
  color: #ff7300;
  font-size: 1.3rem;
  font-weight: 650;
  transition: 250ms;
}
li {
  list-style: none;
}

@media screen and (max-width: 550px) {
  .footer {
    flex-wrap: wrap;
  }

  .links a {
    color: #ff7300;
  }
  .right,
  .left {
    width: 100%;
    border: none;
    margin: auto;
    padding: 0;
  }
}
</style>