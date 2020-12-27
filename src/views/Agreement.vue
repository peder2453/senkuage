<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h1>
        Senkuage PROTOCOL
      </h1>
      <h5>
        What is Senkuage Protocol and what makes it unique?
      </h5>
    </div>
  </div>

  <div class="market">
    <div class="market-left">
      <div class="titlt">MARKET EFFICIENT</div>
      <div class="contetn">
        When there is a demand for coverage, Senkuage protocol incentivizes
        market makers to fill the need of the demand. At the same time, it lets
        the market set the premium of the coverage.
      </div>
    </div>
    <img src="@/assets/agreement/market-img0.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">SCALABLE</div>
      <div class="contetn">
        Senkuage Protocol separates itself from other coverage protocols due to
        independent coverage ceilings as opposed to pooled staking.
      </div>
    </div>
    <img src="@/assets/agreement/market-img1.png" alt="" class="market-right" />
  </div>
  <div class="market">
    <div class="market-left">
      <div class="titlt">FUNGIBLE COVERAGE</div>
      <div class="contetn">
        Obtain ERC-20 coverage for the time period you need. Trade your coverage
        on Balancer and Uniswap at anytime.
      </div>
    </div>
    <img src="@/assets/agreement/market-img2.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">DECENTRALIZED</div>
      <div class="contetn">
        Senkuage Protocol's smart contracts will be audited, deployed, and
        verified on the Ethereum blockchain, making coverage entirely censorship
        resistant and open.
      </div>
    </div>
    <img src="@/assets/agreement/market-img3.png" alt="" class="market-right" />
  </div>
  <div class="market">
    <div class="market-left">
      <div class="titlt">LIMITLESS</div>
      <div class="contetn">
        Senkuage Protocol will allow you to buy cover on anything, beyond just
        smart contracts and crypto. Those looking to purchase coverage are able
        to, as long as there are people willing to provide coverage.
      </div>
    </div>
    <img src="@/assets/agreement/market-img4.png" alt="" class="market-right" />
  </div>
  <div class="market right">
    <div class="market-left">
      <div class="titlt">NO KYC REQUIRED</div>
      <div class="contetn">
        Senkuage Protocol allows you to buy coverage without needing to give up
        your identity.
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
