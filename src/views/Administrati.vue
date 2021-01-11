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
      <div class="btn">Senkuage token: $SKG.</div>
    </div>
  </div>
  <div class="fast">
    <div class="title">Fast Exchange Transfer Arbitrage</div>
    <div class="list">
      <li>
        <img src="@/assets/administrati/fast-icon0.png" alt="" />
        <span> allows DeFi users to </span>
        <b> buy protection against smart contract risk </b>
      </li>
      <li>
        <img src="@/assets/administrati/fast-icon1.png" alt="" />
        <span> allows DeFi users to </span>
        <b> Crypto Arbitrage </b>
      </li>
      <li>
        <img src="@/assets/administrati/fast-icon2.png" alt="" />
        <span> allows DeFi users to </span>
        <b> profit in different liquidity Pool </b>
      </li>
    </div>
  </div>

  <div class="trade">
    <div class="conent">
      <div class="tit">TRADE WITH EDGE</div>
      <div class="cont">
        Market Signals and Analytics Crypto arbitrage with orderbook depth
        check. Explosive movers in Crypto.Company under/over valuation.
        Automated options chain pricing evaluation and more...
      </div>
    </div>
  </div>

  <div class="defi">
    <div class="tit">Senkuage Defi Platform Works</div>
    <div class="cont">
      <img src="@/assets/administrati/defiimg.png" alt="" class="leftimg" />
      <div class="right-cont">
        <div class="tit">Senkuage Arbitrage Bots Profits</div>
        <div class="r-cont">
          Senkuage Arbitrage Bots <br />
          Senkuage Arbitrage Bots is a savvy arbitrage hunters that know various
          ways to capitalise on opportunities. <br />
          1 Simple arbitrageurs <br />
          2 Fiat traiangular arbitrage <br />
          3 Crypto Triangular arbitrage <br />
          4 Convergence arbitrage <br />
          5 Cash-and-Carry arbitrage
        </div>
      </div>
    </div>
  </div>

  <div class="works">
    <div class="tit">Senkuage Defi Platform Works</div>
    <li>
      <div class="li-left">
        <div class="li-tit">DEPOSIT ASSET</div>
        <div class="cont">
          Investors can deposit selected supported <br />
          currencies at anytime and anywhere <br />
          Collateral remains on-chain for <br />
          the duration of trading
        </div>
      </div>
      <img src="@/assets/administrati/works0.png" alt="" class="right-img" />
    </li>
    <li class="reve">
      <div class="li-left">
        <div class="li-tit">PICK YOUR</div>
        <div class="cont">
          Easy to choose available Defi packages <br />
          to profitAll asset transaction is <br />
          on-chain, safe and secure
        </div>
      </div>
      <img src="@/assets/administrati/works1.png" alt="" class="right-img" />
    </li>
    <li>
      <div class="li-left">
        <div class="li-tit">PROFIT AND EXIT</div>
        <div class="cont">
          Always deliver your profit on time and secure. <br />
          Can exit the platform with an ease of use interface
        </div>
      </div>
      <img src="@/assets/administrati/works2.png" alt="" class="right-img" />
    </li>
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
      width: 350px;
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
.trade {
  height: 13rem;
  background: url("~@/assets/administrati/back1.png") no-repeat center/cover;
  position: relative;
  .conent {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 10%;
    .tit {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .cont {
      line-height: 1.5;
      font-size: 0.6rem;
    }
  }
}
.defi {
  & > .tit {
    text-align: center;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1rem;
  }
  .cont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img {
      width: 13rem;
      margin-right: 1rem;
    }
    .right-cont {
      width: 500px;
      padding-top: 1rem;
      .tit {
        color: #2c79f0;
        font-size: 1.2rem;
        text-align: left;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }
      .r-cont {
        color: #666666;
        font-size: 0.5rem;
      }
    }
  }
}
.works {
  & > .tit {
    text-align: center;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 1rem;
  }
  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 2rem 3rem;
    &.reve {
      flex-direction: row-reverse;
    }
    .li-left {
      width: 500px;
      padding-top: 1rem;
      margin-bottom: 2rem;
      .li-tit {
        color: #2c79f0;
        font-size: 1.2rem;
        text-align: left;
        font-weight: 700;
        margin-bottom: 0.3rem;
      }
      .cont {
        color: #7cabf3;
        font-size: 0.6rem;
        line-height: 1.5;
      }
    }
    .right-img {
      width: 13rem;
      margin: 0 2rem;
    }
  }
}
@media screen and (max-width: 560px) {
  .home-banner {
    margin-bottom: 25rem;
    height: 40rem;
    position: relative;
    img {
      width: auto;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
    .wz {
      margin-top: 38rem;
      left: 50%;
      transform: translateX(-50%);
      color: #333;
      h1 {
        font-size: 1.5rem;
      }
      h6 {
        margin-top: 0.5rem;
      }
      .btn {
        color: #333;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .trade {
    border: 1px solid red;
    height: 25rem;
    background-position: left;
    margin-bottom: 20rem;
    .conent {
      width: 54%;
      padding-right: 1%;
      margin-top: 22rem;
      color: #333;
      right:auto;
      left:50%;
      transform: translateX(-50%);
      .tit {
        margin-bottom: 0.1rem;
      }
      .cont {
        font-size: 0.5rem;
      }
    }
  }
  .defi {
    .cont {
      .right-cont {
        width: 80%;
      }
    }
  }
  .works {
    li {
      .li-left {
        width: 20rem;
      }
    }
  }
}
</style>
