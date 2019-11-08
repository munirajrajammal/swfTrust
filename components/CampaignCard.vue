<template>
  <div class="container">
    <h1>CAMPAIGN</h1>
    <div class="d-flex flex-wrap justify-content-around">
      <div v-for="data in NewsData" :key="data.news_id">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="data.file_name" />
          <div class="card-body">
            <h4 class="card-title d-flex justify-content-center">{{data.title}}</h4>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >25%</div>
            </div>
            <p class="card-text">{{ data.content }}</p>
          </div>
          <div class="card-footer d-flex justify-content-center">
            <small class="text-muted">{{ data.content }}</small>
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
    this.$store.dispatch("getNewsData");
  },

  // ======= mapState
  computed: {
    ...mapState({ NewsData: "getAllNews" })
  }
};
</script>

<style lang="scss">
.container {
  padding-left: 0px;
  padding-right: 0px;
  h1 {
    @media (max-width: 575.98px) {
      margin-left: 3%;
    }
    margin: 5% 0% 2% 0%;
  }
  .card {
    margin: 5%;
  }
}
</style>