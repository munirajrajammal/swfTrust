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
          <div class="row d-flex justify-content-center contact-information">
            <div>
              <p>Contact No. in India :</p>
              <p>+91 9677155677</p>
              <p>Contact No. in USA :</p>
              <p>+1 785 424 0436</p>
              <p id="extra-css">socialwelfarefunds@gmail.com</p>
            </div>
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
  margin: 3% 0%;
  .row {
    @media (max-width: 575.98px) {
      margin-left: 0px;
      margin-right: 0px;
    }
    .inbox {
      margin: 0% 0% 5.5%;
      input {
        width: 90%;
        height: 2.5rem;
        border-radius: 7px;
        outline: none;
        border: 2px solid #d9d9d9;
        padding-left: 0.5rem;
      }
      textarea {
        width: 90%;
        height: 10.2rem;
        border-radius: 7px;
        outline: none;
        border: 2px solid #d9d9d9;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
      }
      button {
        width: 90%;
        height: 3rem;
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
</style>