<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h1>
        {{$t('agreement.senkuage')}}
      </h1>
      <h5>
        {{$t('agreement.whatIs')}}
      </h5>
    </div>
  </div>

  <div class="market">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.market')}}</div>
      <div class="contetn">
        {{$t('agreement.whenThere')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img0.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.scall')}}</div>
      <div class="contetn">
        {{$t('agreement.senkuageProtocol')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img1.png" alt="" class="market-right" />
  </div>
  <div class="market">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.fungible')}}</div>
      <div class="contetn">
        {{$t('agreement.obtain')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img2.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.dece')}}</div>
      <div class="contetn">
        {{$t('agreement.senkuagep')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img3.png" alt="" class="market-right" />
  </div>
  <div class="market">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.lim')}}</div>
      <div class="contetn">
        {{$t('agreement.will')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img4.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">{{$t('agreement.nokyc')}}</div>
      <div class="contetn">
        {{$t('agreement.identity')}}
      </div>
    </div>
    <img src="@/assets/agreement/market-img5.png" alt="" class="market-right" />
  </div>
</template>

<script>
export default {
  name: "Agreement",
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
</style>
<style lang="scss" scoped>
.market {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  &.right {
    flex-direction: row-reverse;
  }
  .market-left {
    width: 500px;
    .titlt {
      font-size: 1rem;
      color: #2c79f0;
      font-weight: bold;
      margin-bottom: 0.4rem;
    }
    .contetn {
      font-size: 0.6rem;
      color: #7cabf3;
    }
  }
  .market-right {
    width: 300px;
    // margin-left: 3rem;
    margin: 2rem 3rem;
  }
}
</style>
