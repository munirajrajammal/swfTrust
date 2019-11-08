<template>
  <div>
    <div class="container">
      <h2>CORE TEAM</h2>
      <div class="card">
        <div class="position-relative">
          <img
            class="card-img-top"
            src="https://swftrust.life/wp-content/themes/swforginial/img/members/rameshvj.png"
          />
        </div>
        <div class="card-name position-absolute">
          <h5 class="d-flex justify-content-center">hhhh</h5>
          <!-- <div class="d-flex justify-content-center"> -->
          <!-- <i class="fa fa-facebook icons text-center"></i> -->
          <!-- <i class="fa fa-linkedin icons text-center"></i> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
export default {
  name: "core-team"
};
</script>

<style lang="scss" scoped>
.container {
  h2 {
    @media (max-width: 575.98px) {
      margin-left: 3%;
    }
    margin: 6% 0% 2%;
  }
  .card {
    @media (max-width: 575.98px) {
      width: 100%;
      margin: 1% 2%;
    }
    width: 18rem;
    margin: 1% 0%;
  }
}
.card-name {
  width: 85%;
  border: 1px solid;
  margin: 88% 7% 0%;
  color: rgb(0, 0, 0);
  background-color: white;
  border-radius: 0.6rem;
  padding: 0.4rem;
  box-shadow: 0px 0px 7px 6px rgba(0, 0, 0, 0.75);
  .icons {
    background-color: #9ea0a9;
    width: 10%;
    margin: 2%;
    padding: 3% 6%;
    :hover {
      background-color: #0e4573;
    }
  }
}
</style>