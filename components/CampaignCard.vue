<template>
  <div class="campaign">
    <div class="container">
      <h2>CAMPAIGN</h2>
      <div class="d-flex flex-wrap justify-content-around campaignCard">
        <div v-for="data in campaignDetail" :key="data.campaignDetail_id">
          <div class="card">
            <img class="card-img-top" :src="data.file_name" />
            <div class="card-body">
              <p class="card-title d-flex justify-content-center">{{data.program_name}}</p>
              <div class="pro">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >{{ data.progress_perchentage }}</div>
                </div>
              </div>
              <p class="card-text">{{ data.program_content }}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
              <small class="text-muted">{{ data.perpose }}</small>
            </div>
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
  name: "campaign-card",
  store,

  // ============ the get all data of news
  mounted() {
    this.$store.dispatch("getCampaign");
  },

  // ======= mapState
  computed: {
    ...mapState({ campaignDetail: "getCampaign" })
  }
};
</script>

<style lang="scss">
.campaign {
  margin: 3rem 0rem;
  .container {
    max-width: 1170px;
    padding-left: 15px;
    padding-right: 15px;
    .campaignCard {
      margin-bottom: 5rem;
    }
    h2 {
      @media (max-width: 575.98px) {
        margin-left: 3%;
      }
      margin: 1.5rem 0rem;
      font-family: "Oswald", sans-serif;
      color: black;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 40px !important;
    }
    .card {
      width: 17rem;
      img {
        height: 37.7vh;
      }
      .card-body {
        padding: 0rem;
        .card-title {
          margin: 10px 0px 5px;
          font-size: 20px;
          font-family: "Oswald", sans-serif;
        }
      }
      .pro {
        padding: 1rem;
      }
      .card-text {
        padding: 1rem;
        font-family: "Oswald", sans-serif;
      }
      .card-footer {
        background: linear-gradient(
          to right,
          rgba(73, 155, 234, 1) 0%,
          rgba(14, 69, 115, 1) 96%,
          rgba(14, 69, 115, 1) 100%
        );
        .text-muted {
          color: white !important;
          font-family: "Oswald", sans-serif;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>