<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h1>{{$t('home.senkuage')}}</h1>
      <h5>{{$t('home.whatIs')}}</h5>
    </div>
  </div>
  <div class="home-content">
    <img src="@/assets/home/back0.png" alt="" class="back back0" />
    <img src="@/assets/home/back1.png" alt="" class="back back1" />
    <img src="@/assets/home/back2.png" alt="" class="back back2" />
    <div class="home-publicity">
      <img src="@/assets/home/login-token.png" alt="" />
      <h4>{{$t('home.comp')}}</h4>
      <h6>
        {{$t('home.protocol')}}
      </h6>
    </div>
    <div class="home-publicity">
      <img src="@/assets/home/scoop.png" alt="" />
      <h4>{{$t('home.shield')}}</h4>
      <h6>{{$t('home.earn')}}</h6>
    </div>
    <div class="home-publicity">
      <img src="@/assets/home/govern.png" alt="" />
      <h4>{{$t('home.gove')}}</h4>
      <h6>
        {{$t('home.proposals')}}
      </h6>
    </div>
    <div class="home-publicity">
      <img src="@/assets/home/claim.png" alt="" />
      <h4>{{$t('home.claims')}}</h4>
      <h6>
        {{$t('home.management')}}
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
  position: relative;
  img.back {
    position: absolute;
    &.back0 {
      right: 0;
      height: 15rem;
    }
    &.back1 {
      top: 50%;
      left: 0;
      height: 10rem;
    }
    &.back2 {
      top: 85%;
      right: 0;
      height: 4rem;
    }
  }
  .home-publicity {
    position: relative;
    width: 15rem;
    margin: 4rem auto;
    text-align: center;
    img {
      width: 2.5rem;
      margin-bottom: 0.5rem;
    }
    h4 {
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

@media screen and (max-width: 540px) {
  .home-content {
    .home-publicity {
      width: 25rem;
    }
  }
}
</style>
