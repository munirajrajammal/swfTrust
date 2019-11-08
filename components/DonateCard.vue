<template>
  <div class="DonateCard">
    <div>
      <div class="container">
        <h1>DONATE</h1>
        <div class="row">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6 acc-detail">
                <p>Bank</p>
                <p>A/C Name</p>
                <p>A/C No</p>
                <p>Branch</p>
                <p>IFSC Code</p>
              </div>
              <div class="col-sm-6 acc-detail">
                <p>: ICIC Bank</p>
                <p>: SOCIAL WELFARE FUNDS TRUST</p>
                <p>: 602601211741</p>
                <p>: T-Nagar</p>
                <p>: ICIC0006026</p>
              </div>
            </div>
            <div>
              <p>Note :</p>
              <p>
                Please Use The ICICI A/C Only For Indian Transaction. For Foreign Funds Contact Us
                <br />Please Mention Your Name and Company while transferring Funds in Comments.
              </p>
            </div>
          </div>
          <div class="col-sm-6 d-flex justify-content-center">
            <img
              src="https://dcrewit.com/wp-content/themes/dcrewit/assests/dcrew_logo.svg"
              id="tato"
            />
          </div>
        </div>
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
  margin: 5% 0%;
}
.container {
  margin-top: 1%;
  margin-bottom: 2%;
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
  }
}
</style>