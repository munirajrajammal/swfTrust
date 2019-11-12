<template>
  <div class="DonateCard">
    <div>
      <div class="container">
        <h2>DONATE</h2>
        <div class="row">
          <div class="col-sm-3">
            <ul>
              <li>Bank</li>
              <li>A/C Name</li>
              <li>A/C No</li>
              <li>Branch</li>
              <li>IFSC Code</li>
            </ul>
          </div>
          <div class="col-sm-5">
            <ul>
              <li>: ICICI Bank</li>
              <li>: SOCIAL WELFARE FUNDS TRUST</li>
              <li>: 602601211741</li>
              <li>: T-Nagar</li>
              <li>: ICIC0006026</li>
            </ul>
          </div>
          <div class="col-sm-4">
            <img src="../assets/img/donate (1).png" />
          </div>
        </div>
        <h3>Note :</h3>
        <p>Please Use The ICICI A/C Only For Indian Transaction. For Foreign Funds Contact Us</p>
        <p>Please Mention Your Name and Company while transferring Funds in Comments.</p>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "donate-card"
};
</script>

<style lang="scss" scoped>
.DonateCard {
  .container {
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 1170px;
    padding: 1.5rem;
    h2 {
      font-family: "Oswald", sans-serif;
      margin: 1.5rem 0rem;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 40px !important;
    }
    .row {
      @media (max-width: 575.98px) {
        margin-left: 0px;
        margin-right: 0px;
      }
      #tato {
        width: 50%;
      }
      .acc-detail {
        @media (max-width: 575.98px) {
          width: 50%;
        }
      }
      li {
        font-size: 24px;
        line-height: 38px;
        color: #000;
        font-family: "Oswald", sans-serif;
      }
      .col-sm-4 {
        img {
          max-width: 100%;
        }
      }
    }
    h3 {
      font-family: "Oswald", sans-serif;
      font-size: 1rem;
      margin-bottom: 0rem;
      color: #777777;
    }
    p {
      margin-bottom: 0rem;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 15px;
      color: #777777;
    }
  }
}
</style>