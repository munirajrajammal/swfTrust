<template>
  <div class="SpentMoney">
    <div class="container">
      <div class="d-flex justify-content-around flex-wrap">
        <div v-for="data in DonationData" :key="data.Donation_id">
          <div class="singleDivition">
            <p>{{ data.amount }}</p>
            <p>Spent Money</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../store/store";
import { mapState } from "vuex";
export default {
  name: "spent-money",
  store,

  // ============ the get all data of news
  mounted() {
    this.$store.dispatch("getDonationData");
  },

  // ======= mapState
  computed: {
    ...mapState({ DonationData: "getAllDonation" })
  }
};
</script>

<style lang="scss" scoped>
.SpentMoney {
  background-image: url("");
  background-color: blue;
  margin-top: 5%;
  margin-bottom: 5%;
  .container {
    .singleDivition {
      @media (max-width: 575.98px) {
        margin: 25% 15%;
      }
      margin: 100% 0%;
      width: 10rem;
      p {
        margin-bottom: 0rem;
      }
    }
  }
}
</style>