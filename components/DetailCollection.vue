<template>
  <div class="over-all-inBox">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="row d-flex justify-content-center inbox">
            <input v-model="message" placeholder="Enter your name" />
          </div>
          <div class="row d-flex justify-content-center inbox">
            <input v-model="message" placeholder="Enter email address" />
          </div>
          <div class="row d-flex justify-content-center inbox">
            <input v-model="message" placeholder="Enter Subject" />
          </div>
        </div>
        <div class="col-sm-5">
          <div class="row d-flex justify-content-center inbox">
            <textarea v-model="message" placeholder="Enter Message"></textarea>
          </div>
          <div class="row d-flex justify-content-center inbox">
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="contact-info">
            <p></p>
            <h4>Contact No. in India :</h4>
            <h6>
              <a href>+91 9677155677</a>
            </h6>
          </div>
          <div class="contact-info">
            <p></p>
            <h4>Contact No. in USA :</h4>
            <h6>
              <a href>+1 785 424 0436</a>
            </h6>
          </div>
          <div class="contact-info">
            <p></p>
            <h6>
              <a href>socialwelfarefunds@gmail.com</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "detail-collection"
};
</script>

<style lang="scss" scoped>
.over-all-inBox {
  padding: 3rem;
  .container {
    max-width: 1170px;
    .row {
      @media (max-width: 575.98px) {
        margin-left: 0px;
        margin-right: 0px;
      }
      .col-sm-3 {
        .contact-info {
          line-height: 34px;
          padding-left: 45px;
          color: #0e4573;
          font-family: "Oswald", sans-serif;
          h4 {
            font: inherit;
            font-size: 1rem;
            margin-bottom: 0rem;
          }
          h6 {
            a {
              text-decoration: unset;
              color: #0e4573 !important;
              font-size: 17px;
              line-height: 24px;
              font-family: "Oswald", sans-serif;
            }
          }
        }
      }
      .inbox {
        margin: 0% 0% 5.5%;
        input {
          width: 95%;
          display: block;
          font-family: auto;
          border: 1px solid #ced4da;
          color: #495057;
          border-radius: 0.25rem;
          line-height: 1.5;
          font-size: 1rem;
          padding: 0.375rem 0.75rem;
          font-family: "Oswald", sans-serif;
        }
        textarea {
          width: 95%;
          display: block;
          font-family: auto;
          border: 1px solid #ced4da;
          color: #495057;
          border-radius: 0.25rem;
          line-height: 1.5;
          font-size: 1rem;
          padding: 0.375rem 0.75rem;
          font-family: "Oswald", sans-serif;
          height: 10.2rem;
        }
        button {
          background-size: 200% auto;
          padding: 0px 50px;
          color: #fff;
          font-family: "Roboto", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 50px;
          border-radius: 5px;
          outline: none !important;
          box-shadow: none !important;
          text-align: center;
          width: 95%;
          background: linear-gradient(
            to right,
            rgba(73, 155, 234, 1) 0%,
            rgb(17, 87, 146) 96%,
            rgb(31, 95, 148) 100%
          );
        }
      }
      .contact-information {
        @media (min-width: 768px) and (max-width: 991.98px) {
          width: 100%;
        }
        #extra-css {
          overflow-wrap: break-word;
        }
      }
    }
  }
}
</style>