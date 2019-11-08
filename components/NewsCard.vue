<template>
  <div class="news-card">
    <div class="container">
      <h1>NEWS</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div v-for="data in NewsData" :key="data.news_id">
          <div class="card" style="width: 21rem;">
            <img class="card-img-top" :src="data.file_name" />
            <div class="card-body">
              <h1 class="card-title">{{data.title}}</h1>
              <p class="card-text">{{data.content}}</p>
              <a href="#">Read More</a>
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
  name: "news-card",
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
.news-card {
  background-color: blue;
  .container {
    padding-left: 0px;
    padding-right: 0px;
    h1 {
      @media (max-width: 575.98px) {
        margin-left: 3%;
      }
      padding: 5% 0% 0% 0%;
    }
    .card {
      margin: 0% 0% 10% 0%;
      padding: 5%;
    }
  }
}
</style>