<template>
  <div class="home-banner">
    <img src="@/assets/administrati/back.png" alt="" />
    <div class="wz">
      <h1>Exchange DeFi arbitrage</h1>
      <h6>
        Senkuage Protocol which is on Ethereum,is direct Exchange DeFi arbitrage
        using ETH Smart Contracts, an ecosystem of DeFi products that will
        interoperate to bring optimal profits returns to users.
      </h6>
      <div class="btn">
        Senkuage token: $SKG.
      </div>
    </div>
  </div>
  <div class="fast">
    <div class="title">Fast Exchange Transfer Arbitrage</div>
    <div class="list">
      <li>
        <img src="@/assets/administrati/fast-icon0.png" alt="" />
        <span>
          allows DeFi users to
        </span>
        <b>
          buy protection against smart contract risk
        </b>
      </li>
      <li>
        <img src="@/assets/administrati/fast-icon1.png" alt="" />
        <span>
          allows DeFi users to
        </span>
        <b>
          Crypto Arbitrage
        </b>
      </li>
      <li>
        <img src="@/assets/administrati/fast-icon2.png" alt="" />
        <span>
          allows DeFi users to
        </span>
        <b>
          profit in different liquidity Pool
        </b>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Administrati",
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
    width: 20rem;
    top: 20%;
    left: 5%;
    h6 {
      font-weight: 400;
      margin-top: 1.5rem;
    }
    .btn {
      cursor: pointer;
      margin-top: 1rem;
      padding: 0.2rem 0.3rem;
      font-size: 0.6rem;
      font-weight: bold;
      color: #fff;
      display: inline-block;
      border-radius: 5px;
      border: 1px solid #fff;
      box-shadow: 0 0 10px 0 #7cabf3;
    }
  }
}
.fast {
  margin-top: 2rem;
  margin-bottom: 2rem;
  .title {
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    li {
      width: 450px;
      margin-top: 1rem;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem;
      img {
        width: 2rem;
        margin-bottom: 1rem;
      }
      span {
        font-size: 0.8rem;
        font-weight: bold;
      }
      b {
        font-size: 0.6rem;
        color: #2c79f0;
        font-weight: initial;
      }
    }
  }
}
</style>
