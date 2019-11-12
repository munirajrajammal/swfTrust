<template>
  <div class="SpentMoney">
    <div class="container">
      <div class="d-flex justify-content-around flex-wrap">
        <div class="singleDivition">
          <i class="fa fa-inr" aria-hidden="true"></i>
          <h1 id="amountData">10000000 +</h1>
          <p id="perpose">Spent on Education</p>
        </div>
        <div class="singleDivition">
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <h1 id="amountData">100000 +</h1>
          <p id="perpose">Hrs Spent on Education</p>
        </div>
        <div class="singleDivition">
          <i class="fa fa-male" aria-hidden="true"></i>
          <i class="fa fa-female" aria-hidden="true"></i>
          <h1 id="amountData">20000 +</h1>
          <p id="perpose">Touched Life</p>
        </div>
        <div class="singleDivition">
          <i class="fa fa-rocket"></i>
          <h1 id="amountData">25000000 +</h1>
          <p id="perpose">To Empower</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "spent-money"
};
</script>

<style lang="scss" scoped>
.SpentMoney {
  padding: 80px 0px;
  background-size: cover;
  background-image: url("../assets/img/infigure-bg.png");
  .container {
    max-width: 1170px;
    padding: 0px 15px;
    .singleDivition {
      @media (max-width: 575.98px) {
        margin: 25% 15%;
      }
      color: white;
      text-align: center;
      padding: 1.5rem;
      margin-top: 1rem;
      i {
        font-size: 38px;
        margin-bottom: 1rem !important;
      }
      #amountData {
        font-family: "Oswald", sans-serif;
        font-size: 36px !important;
        margin-bottom: 0.25rem !important;
      }
      // margin: 100% 0%;
      // width: 10rem;
      #perpose {
        font-size: 16px;
        color: #ededed;
      }
    }
  }
}
</style>