<template>
  <div class="footer-sec">
    <div class="container">
      <div class="row content">
        <div class="col-lg-5 col-sm-6">
          <div class="title">
            <h3>About Us</h3>
          </div>
          <p>SWF Trust is a Not-For-Profit and Non-Religious Organization to spread Education with a syllabus called 'Life'.It has its origin at Vellore Institute of Technology, Vellore. We registered ( no: 40/2006 ) with the Central Government of India on Jan 10th 2006 and have Lifetime 80G approval. We transform the lives of people through our various programs. We empower the youth through our Rising Leaders program. Thus rise our nation in every way we can.</p>
        </div>
        <div class="col-lg-5 col-sm-6">
          <div class="title">
            <h3>Newsletter</h3>
          </div>
          <p id="second-p">Stay updated with our latest trends</p>
          <div class="mc-sigup">
            <div>[contact-form-7 404 "Not Found"]</div>
          </div>
          <div class="title">
            <h3 id="to-vol">TO Volunteer?</h3>
          </div>
          <p id="second-p">Please submit your mobile number</p>
          <div class="input-info">
            <div class="input-group">
              <input type="text" placeholder="Enter mobile number" />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="title">
            <h3>Follow Us</h3>
          </div>
          <ul>
            <a href>
              <li>
                <i class="fa fa-facebook-f"></i>
              </li>
            </a>
            <a href>
              <li>
                <i class="fa fa-flickr"></i>
              </li>
            </a>
            <a href>
              <li>
                <i class="fa fa-flickr"></i>
              </li>
            </a>
            <a href>
              <li>
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div class="row footer-menu">
        <div class="footer-sub-menu">
          <a href>Refund Policy |</a>
          <a href>Privacy Policy |</a>
          <a href>Terms and Conditions |</a>
          <a href>Trust Survey |</a>
          <a href>Website Survey |</a>
          <a href>Sitemap</a>
        </div>
        <div class="footer-sub-item">
          <p>Copyright ©All rights reserved | SWF Trust | 2003-2019</p>
        </div>
      </div>
      <div class="scroll-to-top">
        <a href>
          <i class="fa fa-arrow-up"></i>
        </a>
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
  font-size: 100%;
  font: inherit;
  display: block;
  .container {
    max-width: 1170px;
    .content {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
      margin-bottom: 0rem;
      .col-lg-5 {
        .title {
          h3 {
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            font-family: "Heebo", sans-serif;
            margin-bottom: 0px;
          }
          #to-vol {
            margin-top: 1rem !important;
          }
        }
        p {
          font-size: 14px;
          line-height: 24px;
          font-family: "Roboto", sans-serif;
          color: #777777;
          margin-bottom: 30px;
        }
        #second-p {
          margin-bottom: 15px;
        }
        .input-group {
          margin-bottom: 10px;
          input {
            height: 40px;
            background: #fff;
            width: 56%;
            border: none;
            padding: 0px 15px;
            font-size: 14px;
            font-family: "Roboto", sans-serif;
            color: #cccccc;
            outline: none;
            box-shadow: none;
          }
          button {
            border-radius: 0px;
            background: #0e4573;
            width: 80px;
            color: #fff;
            border: 1px solid #747373;
          }
        }
        .mc-sigup {
          color: #777777;
          font-family: "Oswald", sans-serif;
        }
      }
      .col-lg-2 {
        .title {
          h3 {
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            font-family: "Heebo", sans-serif;
            margin-bottom: 0px;
          }
        }
        ul {
          margin-left: 0rem;
          margin-top: 0rem;
          list-style: none;
          a {
            color: #cccccc;
            font-size: 20px;
            li {
              margin-right: 17px;
              display: inline-block;
              i {
                font: normal normal normal 14px/1 FontAwesome;
                font-size: inherit;
              }
            }
          }
        }
      }
    }
    .footer-menu {
      font-family: "Roboto", sans-serif;
      padding-bottom: 12px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      .footer-sub-menu {
        font: inherit;
        a {
          text-decoration: unset;
          color: #fff;
          font: inherit;
          padding: 5px;
        }
      }
      .footer-sub-item {
        margin-bottom: 0rem;
        p {
          color: #777777;
        }
      }
    }
    .scroll-to-top {
      position: fixed;
      right: 2%;
      bottom: 10%;
      a {
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        background-color: #0f4573;
        border-radius: 50%;
        box-shadow: 1px 2px 3px black;
        i {
          color: white;
          font-size: 18px;
        }
      }
    }
  }
}
</style>