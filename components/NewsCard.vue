<template>
  <div class="news-card">
    <div class="container">
      <h1>NEWS</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div v-for="data in NewsData" :key="data.news_id">
          <div class="card" style="width: 22.5rem;">
            <img class="card-img-top" :src="data.file_name" />
            <div class="card-body">
              <h5 class="card-title">{{data.title}}</h5>
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
  padding: 3rem;
  background-size: cover;
  background-image: url('../assets/img/news-event-bg.png');
  .container {
    padding-left: 0px;
    padding-right: 0px;
    max-width: 1170px;
    h1 {
      font-family: "Oswald", sans-serif;
      color: #fff;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 40px !important;
      margin: 3rem 0rem;
      padding: 0rem .9rem;
      @media (max-width: 575.98px) {
        margin-left: 3%;
      }
    }
    .card {
      margin: 0% 0%;
      padding: 5%;
      border-radius: 0.625rem;
      .card-body {
        flex: 1 1 auto;
        padding: 1.25rem;
        .card-title {
          font-size: 30px;
          color: #0e4573;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          font-family: "Oswald", sans-serif;
        }
        .card-text {
          line-height: 23px;
          font-family: "Roboto Condensed", sans-serif;
          font-size: 15px;
        }
        a {
          font-family: "Oswald", sans-serif;
          text-decoration: unset;
        }
      }
    }
  }
}
</style>