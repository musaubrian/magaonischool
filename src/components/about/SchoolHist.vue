<template>
  <section class="history">
    <div class="hist">
      <div class="logoinfo"> 
        <img src='@/assets/images/programming.svg'>
      </div>
      <div class="schoolinfo">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempore voluptatibus illo, fuga voluptate accusantium dicta quia quis quas quod aspernatur explicabo, quos numquam eveniet itaque mollitia? Doloribus soluta eligendi, iste unde enim, reiciendis ipsum, deleniti sequi ratione tenetur ducimus officiis nesciunt earum sint nulla distinctio dolor impedit tempore molestias beatae. Dolore, id a. Neque vitae enim aut, autem quos atque facilis, veritatis debitis rerum facere magni quidem illo dicta!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SchoolHist",
};
</script>

<style>
.hist {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}
.logoinfo {
  width: 40%;
  height: auto;
  background: #f43d;
  border-radius: 30px;
  padding: 1rem;
  margin: 1rem 0 1rem 0;
  display: flex;
  align-content: center;
  justify-content: center;
}
.logoinfo img {
  width: 100%;
  height: 100%;
}
.schoolinfo {
width: 50%;
height: auto;
padding: 1rem;
text-align: justify;
display: flex;
justify-content: center;
align-content: center;
}

@media (max-width: 600px) {
  .hist {
    flex-direction: column;
  }
  .logoinfo,
  .schoolinfo{
    width: 100%;
  }
}
</style>