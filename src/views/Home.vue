<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h1>Senkuage TOKEN</h1>
      <h5>What is Senkuage Token and what is it used for?</h5>
    </div>
  </div>
  <div class="home-content">
    <div class="home-publicity">
      <img src="@/assets/home/login-token.png" alt="" />
      <h3>COMPLETELY VALUELESS</h3>
      <h6>
        Senkuage tokens are valueless and serve as governance tokens for
        Senkuage protocol
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home-banner {
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
  }
  .wz {
    color: #fff;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    text-align: center;
    h5 {
      font-weight: 400;
      margin-top: 1.5rem;
    }
  }
}
.home-content {
  .home-publicity {
    border: 1px solid red;
    width: 15rem;
    margin: 1rem auto;
    text-align: center;
    img {
      width: 2.5rem;
    }
    h3 {
      margin-top: 0.5rem;
      color: #333333;
    }
    h6 {
      padding: 0 2rem;
      color: #563afc;
      margin-top: 0.5rem;
      font-weight: 400;
    }
  }
}
</style>
