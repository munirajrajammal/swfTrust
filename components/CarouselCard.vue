<template>
  <div class="carousel-card">
    <div class="row">
      <div class="col-md-8 col-center m-auto">
        <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="mmmmmm">
                <img src="../assets/img/news-event-bg.png" alt="First slide" />
              </div>
              <div class="carousel-caption d-none d-md-block">
                <p
                  class="testimonial"
                >Blessed them on their 1st Anniversary on 2007. Usually people do service on old age, here I'm delighted to see our young men doing great service to the Nation.</p>
                <p class="overview">
                  <b>MR. G.Viswanathan</b>, Chancellor Of VIT University
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/img/sarathbabu.png" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <p
                  class="testimonial"
                >Opened SWF Trust Office in 2014. Happy to see younger generation do great service. My blessings are with them.</p>
                <p class="overview">
                  <b>MR. Palam kalyanasundaram</b>, Palam Publication
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/img/viswanathan.png" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <p
                  class="testimonial"
                >Opened SWF Trust Office in 2010. Best wishes for my brothers and sisters.</p>
                <p class="overview">
                  <b>MR. Sarath Babu</b>, Foodking
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>-->

        <div class="carousel slide" id="my-carousel" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="img-box">
                <img src="../assets/img/viswanathan.png" />
              </div>
              <p
                class="testimonial"
              >Blessed them on their 1st Anniversary on 2007. Usually people do service on old age, here I'm delighted to see our young men doing great service to the Nation.</p>
              <p class="overview">
                <b>MR. G.Viswanathan</b>, Chancellor Of VIT University
              </p>
            </div>
            <div class="item carousel-item">
              <div class="img-box">
                <img src="../assets/img/kalayanasudaram.png" />
              </div>
              <p
                class="testimonial"
              >Opened SWF Trust Office in 2014. Happy to see younger generation do great service. My blessings are with them.</p>
              <p class="overview">
                <b>MR. Palam kalyanasundaram</b>, Palam Publication
              </p>
            </div>
            <div class="item carousel-item">
              <div class="img-box">
                <img src="../assets/img/sarathbabu.png" />
              </div>
              <p
                class="testimonial"
              >Opened SWF Trust Office in 2010. Best wishes for my brothers and sisters.</p>
              <p class="overview">
                <b>MR. Sarath Babu</b>, Foodking
              </p>
            </div>
          </div>
          <a
            class="carousel-control left carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-angle-left sr-only"></i>
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control right carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-angle-right sr-only"></i>
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "carousel-card"
};
</script>

<style lang="scss" scoped>
.carousel-card {
  background: linear-gradient(
    to right,
    rgba(73, 155, 234, 1) 0%,
    rgba(14, 69, 115, 1) 96%,
    rgba(14, 69, 115, 1) 100%
  );
  .row {
    #my-carousel {
      margin: 50px auto;
      padding: 0 70px;
    }
    .item {
      color: #999;
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      min-height: 290px;
      .img-box {
        width: 160px;
        height: 160px;
        margin: 0 auto;
        padding: 5px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
            0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        }
      }
      p {
        color: #ffffff;
        line-height: 21px;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 15px;
      }
      .testimonial {
        padding: 30px 0 10px;
      }
      .overview {
        font-style: italic;
      }
    }
    .carousel-control {
      width: 40px;
      height: 40px;
      margin-top: -20px;
      top: 50%;
      background: none;
      i {
        font-size: 68px;
        line-height: 42px;
        position: absolute;
        display: inline-block;
        color: #e6e6e6;
      }
    }
    .carousel-control-prev {
      left: 0;
    }
    .carousel-control-next {
      right: 0;
    }
  }
}
</style>