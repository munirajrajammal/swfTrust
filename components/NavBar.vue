<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <img src="https://swftrust.life/wp-content/themes/swforginial/img/logo.png" alt />
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-around flex-wrap" id="collapsibleNavId">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WHO WE ARE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WHAT WE DO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">MEMBERS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">GALLERY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LOGIN</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button type="button" class="btn btn-primary btn-lg">DONATE</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "nav-bar"
};
</script>

<style lang="scss" scoped>
.navbar {
  .container {
    @media (min-width: 768px) and (max-width: 991.98px) {
      max-width: 100%;
    }
    img {
      width: 20%;
    }
    .navbar-nav {
      margin: 0px 28px 0px 30px;
      @media (min-width: 768px) and (max-width: 991.98px) {
        font-size: 11px;
      }
      .nav-item {
        margin-right: 45px;
        &:last-child {
            margin-right: 0px;
          }
        .nav-link {
          font-family: "Roboto", sans-serif;
          text-transform: uppercase;
          color: #000;
          font-size: 13px;
          font-weight: 500;
          padding: 0px;
          display: inline-block;
          
        }
      }
    }
    .btn {
      @media (min-width: 768px) and (max-width: 991.98px) {
        font-size: 11px;
        padding: 0.5rem 1rem;
      }
      display: inline-block;
      background: #0e4573;
      color: #fff;
      font-family: "Roboto", sans-serif;
      width: 136px;
      font-size: 19px;
      font-weight: 500;
      border: 1px solid #0e4573;
      line-height: 31px;
      border-radius: 3px;
      outline: none !important;
      box-shadow: none !important;
      text-align: center;
    }
  }
}
</style>