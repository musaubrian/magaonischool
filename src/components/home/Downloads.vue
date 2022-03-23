<template>
  <section id="downloads">
    <div class="downloads">
      <div class="newsletter">
        <div class="card">
          <div class="card-image">
            <img
              src="@/assets/images/undraw_newspaper_k-72-w.svg"
              alt="newsletter"
            />
          </div>
          <div class="card-content">
              <button class="btn">
                Newsletter
                <span class="material-icons">download</span>
              </button>
          </div>
        </div>
      </div>

      <div class="fee-structure">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/images/pay2.svg" alt="" />
          </div>
          <div class="card-content">
            <button class="btn">
              Fee Structure
              <span class="material-icons">download</span>
            </button>
          </div>
        </div>
      </div>

      <div class="Assignments">
        <div class="card">
          <div class="card-image">
            <img src="@/assets/images/undraw_book_reading_kx-9-s.svg" alt="" />
          </div>
          <div class="card-content">
            <button class="btn">
              Assignments
              <span class="material-icons">download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Downloads",
};
</script>

<style>
.downloads {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 98%;
  height: 60vh;
  justify-content: center;
  margin: 1rem;
}
.card {
  width: 30vw;
  height: 100%;
  margin: 1rem;
  padding: 0.5rem;
}
.card-image img {
  height: 40vh;
  width: 100%;
  border-radius: 20px;
}
.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.card-content button {
  padding: 1rem;
  border: none;
  font-weight: 600;
  font-size: 1.15rem;
  border-radius: 20px;
  background: #ff5100;
}
.card-content button:hover,
.btn a {
  background: none;
  border: 3px solid #ff5100;
  font-weight: 750;
  transition: 250ms;
}

.btn {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .downloads {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 98vw;
    margin: auto auto 1rem auto;
  }
  .card {
    width: 98vw;
    height: 30vh;
    margin: auto;
    padding: 1rem;
    justify-content: center;
    align-content: space-between;
  }
  .card-image img {
    margin-top: 2rem auto 2rem auto;
    padding: 0.5rem;
    height: 20vh;
    width: 100%;
    border-radius: 20px;
  }
  .card-content {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    width: 100%;
    margin: auto;
  }
  .card-content button,
  .btn button {
    padding: 1rem;
    border: none;
    width: 80%;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 20px;
    background: #ff5100;
  }
}
</style>