<template>
  <div class="about-section">
    <div class="about-logo">
      <img src="@/assets/images/programming.svg" alt="school-logo" />
    </div>
    <div class="about-content">
      <p>
        Magaoni base secondary school (Magaoni School) was founded in 1994.
        It is located in Magaoni about 1km from the main road to Base titanium.
        It is a goverment institution partially funded by Base titanium.
        We are currently a dual stream institution...
      </p>
      <router-link to="/about" class="more">
        <span class="more">Read more >> </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style>
.about-section {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #530899;
  width: 98%;
  height: auto;
  margin: 1rem auto 1rem auto;
  border-radius: 10px;
}
.about-logo {
  width: 35vw;
  height: 100%;
  margin: auto 1rem auto 1rem;
  padding: 1rem;
}
.about-logo img {
  width: 100%;
  height: 100%;
}
.about-content,
.about-content p {
  width: 60vw;
  height: auto;
  margin: 1rem 1rem 1rem auto;
  color: #bebeba;
  font-weight: 500;
  font-size: 1.1rem;
  /* text-align: justify; */
}
.more {
  font-weight: 600;
  padding: auto auto 0.5rem 0.5rem;
  text-decoration: none;
  color: #bebeba;
  background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px
    no-repeat;
  transition: 0.5s;
}
.more:hover {
  color: #ff7300;
  font-size: 1.25rem;
  --d: 96%;
}

/* for smaller screens */
@media screen and (max-width: 650px) {
  .about-section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    font-size: 0.9rem;
    width: 98%;
    margin: 1rem auto 1rem auto;
  }
  .about-logo {
    width: 98%;
    height: 100%;
    margin: auto;
    padding: 1rem;
  }
  .about-content,
  .about-content p {
    width: 100%;
    height: auto;
    padding: 0.6rem;
    margin: auto;
    font-weight: 550;
    font-size: 1.15rem;
  }
}
</style>