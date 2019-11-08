<template>
  <div class="event-timeline">
    <div class="container">
      <h1>event timeline</h1>
      <div class="d-flex justify-content-around flex-wrap event">
        <div v-for="data in NewsData" :key="data.news_id">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">{{ data.title }}</h3>
              <p class="card-text">{{ data.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-end arrow-css">
        <div class="arrow">
          <i class="fa fa-arrow-circle-left"></i>
        </div>
        <div class="arrow">
          <i class="fa fa-arrow-circle-right"></i>
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
  name: "event-timeline",
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

<style lang="scss" scoped>
.event-timeline {
  .container {
    h1 {
      @media (max-width: 575.98px) {
        margin-left: 3%;
      }
      margin: 5% 0%;
    }
    .event {
      @media (max-width: 575.98px) {
        width: 100%;
      }
      .card {
        @media (max-width: 575.98px) {
          width: 100%;
          margin: 3% 0%;
        }
        width: 24rem;
        margin: 3% 4%;
      }
    }
    .arrow-css {
      @media (max-width: 575.98px) {
        width: 100%;
      }
      .arrow {
        margin: 0% 1%;
      }
    }
  }
}
</style>