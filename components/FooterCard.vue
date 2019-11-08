<template>
  <div class="footer-sec">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="row">
            <p id="footer-about">About Us</p>
            <p
              id="footer-content"
            >SWF Trust is a Not-For-Profit and Non-Religious Organization to spread Education with a syllabus called 'Life'.It has its origin at Vellore Institute of Technology, Vellore. We registered ( no: 40/2006 ) with the Central Government of India on Jan 10th 2006 and have Lifetime 80G approval. We transform the lives of people through our various programs. We empower the youth through our Rising Leaders program. Thus rise our nation in every way we can.</p>
            <p id="footer-id">Copyright ©All rights reserved | SWF Trust | 2003-2019</p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-8">
              <p id="footer-news-letter">Newsletter</p>
              <p>Stay updated with our latest trends</p>
              <p>[contact-form-7 404 "Not Found"]</p>
              <p>TO Volunteer?</p>
              <p>Please submit your mobile number</p>
              <input v-model="message" placeholder="Enter mobile number" />
              <button type="button">SUBMIT</button>
            </div>
            <div class="col-sm-4">
              <p id="footer-follow">Follow Us</p>
            </div>
          </div>
          <div class="web-link">
            <a href>Refund Policy |</a>
            <a href>Privacy Policy |</a>
            <a href>Terms and Conditions |</a>
            <a href>Trust Survey |</a>
            <a href>Website Survey |</a>
            <a href>Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "footer-card"
};
</script>

<style lang="scss" scoped>
.footer-sec {
  background-color: black;
  margin-top: 4%;
  .row {
    @media (max-width: 575.98px) {
      margin-left: 0px;
      margin-right: 0px;
    }
    color: #ffffff;
    padding: 2.5% 0%;
    // #footer-about {
    //   margin: 5% 0% 3%;
    // }
    // #footer-news-letter {
    //   margin: 9% 0% 3%;
    // }
    #footer-follow {
      @media (max-width: 575.98px) {
        margin: 15% 0% 0%;
      }
    }
    #footer-content {
      padding-right: 10%;
    }
    .web-link {
      margin-top: 12%;
    }
    input {
      padding-left: 2%;
      height: 17%;
    }
    button {
      height: 16%;
      background-color: #0879fb;
    }
    #footer-id {
      margin-top: 13%;
    }
    .web-link {
      a {
        color: #ffffff;
      }
    }
  }
}
</style>