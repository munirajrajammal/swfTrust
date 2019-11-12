<template>
  <div class="coreTeam">
    <div class="container">
      <h2>CORE TEAM</h2>
      <div class="d-flex flex-wrap">
        <div v-for="data in coreTeam" :key="data.coreTeam_id" class="imageCard">
          <div class="card">
            <!-- <p>{{ coreTeam }}</p> -->
            <div class="position-relative">
              <img class="card-img-top" :src="data.file_name" />
            </div>
            <div class="card-name position-absolute">
              <h3 class="d-flex justify-content-center mb-2">{{ data.name }}</h3>
              <!-- <p>oooo</p> -->
              <!-- <div class="d-flex justify-content-center"> -->
              <!-- <i class="fa fa-facebook icons text-center"></i> -->
              <!-- <i class="fa fa-linkedin icons text-center"></i> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import store from "../store/store";
import { mapState } from "vuex";
export default {
  name: "core-team",
  store,

  // ============ the get all data of news
  mounted() {
    this.$store.dispatch("getCoreTeam");
  },

  // ======= mapState
  computed: {
    ...mapState({ coreTeam: "getCoreTeam" })
  }
};
</script>

<style lang="scss" scoped>
.coreTeam {
  margin: 3rem 0rem;
  .container {
    padding: 0px 0px;
    .imageCard {
      width: 25%;
      padding: 0px 15px;
      margin-bottom: 3rem;
    }
    max-width: 1170px;
    h2 {
      @media (max-width: 575.98px) {
        margin-left: 3%;
      }
      padding: 0px 15px;
      font-family: "Oswald", sans-serif;
      // color: #fff;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 40px !important;
      margin: 1.5rem 0rem;
    }
    .card {
      @media (max-width: 575.98px) {
        width: 100%;
        margin: 1% 2%;
      }
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        height: 44vh;
      }
      width: 100%;
      // width: 18rem;
      margin: 1% 0%;
    }
  }
  .card-name {
    width: 88%;
    box-shadow: 0px 5px 61px -15px rgba(0, 0, 0, 0.1);
    // border-top-left-radius: 0.6rem;
    // border-top-right-radius: 0.6rem;
    // border: 1px solid;
    // margin: 88% 7% 0%;
    margin-top: 0.7rem;
    background-color: white;
    border-radius: 0.6rem;
    padding: 14px 5px 25px 5px;
    h3 {
      font-family: "Oswald", sans-serif;
      font-size: 1rem;
      color: #a8a8a8;
    }
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
}
</style>