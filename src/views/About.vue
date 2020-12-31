<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h2>Discover our Senkuage Arbitrage BOTS</h2>
      <h4>Senkuage Programmer Team</h4>
      <h6>
        Senkuage markets opportunities <br />
        This is how much Senkuage Arbitrage BOTS <br />
        can earn online and in which markets you can invest.
      </h6>
    </div>
  </div>
  <div class="simple">
    <div class="title">Simple arbitrageurs</div>
    <div class="coinbase">coinbase->binance</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content">
      <li>
        <img src="@/assets/about/cont-icon0.png" alt="" />
        <div class="txt">
          Buy coin on one exchange and <br />
          sell it on another <br />
          exchange at same time <br />
          Senkuage Arbitrage BOTS <br />
          canearn the "spread" Instantly
        </div>
      </li>
      <li>
        <img src="@/assets/about/cont-icon1.png" alt="" />
        <div class="txt">
          · Can transfer between exchanges but taht takes time <br />
          · Can already havefiat & crypto balances on different exchange
        </div>
      </li>
      <li>
        <img src="@/assets/about/cont-icon2.png" alt="" />
        <div class="txt">
          E.g. LTC is $60 on Binance and $62 on Coinbase Buy 50 on Binance and
          sell 50 on Coinbase -> $100 profit
        </div>
      </li>
    </div>
  </div>
  <div class="simple">
    <div class="title">Fiat traiangular arbitrage</div>
    <div class="coinbase">coinbase->bithumb->bank</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content fiat">
      <div class="left-block">
        <div class="li">
          <img src="@/assets/about/sim-icon0.png" alt="" />
          <span>
            When 3 assets (or 2 asset pairs) are involved E.g. BTC/USD
            andBTC/KRW
          </span>
        </div>
        <div class="li">
          <img src="@/assets/about/sim-icon1.png" alt="" />
          <span>
            Example:Buy 1 BTC for $3800 on Coinbase,send to Korean exchange and
            sell it for $4200 worth of KWR
          </span>
        </div>
        <div class="li">
          <img src="@/assets/about/sim-icon2.png" alt="" />
          <span>
            Then convert the KWR to USD FOR $400 profit Often is opportunity
            between exchanges serving local markets
          </span>
        </div>
      </div>
      <img src="@/assets/about/right-block.png" alt="" class="right-block" />
    </div>
  </div>
  <div class="crypto">
    <div class="titlt">Crypto Triangular arbitrage</div>
    <div class="subhead">
      Can also do this for crypto, even within 1 exchange!
    </div>
    <img class="down-w" src="@/assets/about/down-w.png" alt="" />
  </div>
  <div class="crypot-content">
    <div class="cry-card">
      <div class="cay-tit">Mispricing between 3 pairs of coins</div>
      <i></i>
      <div class="cay-con">E.g. ETH/BTC, ETH/LTC,and LTC/BTC</div>
    </div>
    <div class="cry-card">
      <div class="cay-tit">There are different ratios between coins</div>
      <i></i>
      <div class="cay-con">
        This is when Senkuage Arbitrage BOTS can do Triangular arbitrage
      </div>
    </div>
  </div>
  <div class="simple">
    <div class="title">Convergence arbitrage</div>
    <div class="coinbase">
      Base on idea that prices will eventually converge
    </div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content conver">
      <img src="@/assets/about/conver-img.png" alt="" class="conver-left" />
      <div class="conver-right">
        <div class="con-li">
          ·Buy on exhange where coin is underval ued and then Senkuage Arbitrage
          BOTS short-sell on exchange where is overvaued
        </div>
        <div class="con-li">
          ·Need exchange that allow shorting E.g. buy LTC on Gemini for $51,
          short on Kraken where it is $56
        </div>
        <div class="con-li">
          ·When price converge Senkuage Arbitrage BOTS'll make $5 profit
        </div>
      </div>
    </div>
  </div>
  <div class="simple">
    <div class="title">Cash-and-Carry arbitrage</div>
    <div class="coinbase">do this in futures markets</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content cash">
      <div class="cash-li">
        <img src="@/assets/about/cash0.png" alt="" />
        <span>
          Basically go long in spot market and short in futures markets "Carry"
          asset until futures contract expires
        </span>
      </div>
      <div class="cash-li">
        <img src="@/assets/about/cash1.png" alt="" />
        <span>
          Then settle it with Senkuage Arbitrage BOTSr long position Pocket the
          difference when you deliver it.E.g. futures price on CME for BTC is
          $4300,
        </span>
      </div>
      <div class="cash-li">
        <img src="@/assets/about/cash2.png" alt="" />
        <span>
          right now on Binance it is $4000 No real "carrying costs" with digital
          assets
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
    h6 {
      font-weight: 300;
      margin-top: 1.5rem;
    }
  }
}
.simple {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  .title {
    font-size: 1rem;
    font-weight: bold;
    color: #0099f6;
  }
  .coinbase {
    font-size: 0.6rem;
    color: #333333;
    margin-top: 0.2rem;
  }
  .down {
    margin-top: 0.6rem;
    width: 0.6rem;
  }
  .sim-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      width: 320px;
      border-radius: 15px;
      margin: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        box-shadow: 0 5px 15px 0px rgba(0, 153, 246, 0.3);
      }
      & > img {
        width: 2rem;
        margin-bottom: 0.5rem;
      }
      .txt {
        font-size: 0.4rem;
        line-height: 1.5;
        color: #666666;
      }
    }
  }
}
.fiat {
  align-items: center;
  margin-bottom: 2rem;
  .left-block {
    width: 15rem;
    padding: 1rem 0;
    margin-right: 1rem;
    .li {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      & > img {
        width: 3rem;
      }
      span {
        font-size: 0.4rem;
      }
    }
  }
  & > img {
    height: 10rem;
  }
}
.crypto {
  background-image: url("~@/assets/about/crypot-back.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 10rem;
  .titlt {
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
  }
  .subhead {
    font-size: 0.5rem;
    color: #fff;
    font-weight: 300;
    margin-top: 0.3rem;
  }
  .down-w {
    margin-top: 0.6rem;
    width: 0.6rem;
  }
}
.crypot-content {
  transform: translateY(-4rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: -4rem;
  .cry-card {
    border: 1px solid #fff;
    width: 300px;
    height: 7rem;
    padding: 1rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 10px 1px rgba($color: #000000, $alpha: 0.2);
    margin: 1rem;
    .cay-tit {
      font-size: 0.9rem;
      font-weight: bold;
    }
    & > i {
      display: block;
      width: 1rem;
      height: 2px;
      background: #00a0e9;
      margin-top: 1rem;
    }
    .cay-con {
      color: #666666;
      font-size: 0.5rem;
      margin-top: 1rem;
    }
  }
}
.simple .conver {
  margin: 2rem 0;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 0px 90px 0px rgba(38, 102, 227, 0.14);
  border-radius: 20px;
  align-items: center;
  padding: 1rem;
  & > img {
    width: 10rem;
    margin-right: 2rem;
  }
  .conver-right {
    width: 15rem;
    font-size: 0.6rem;
    .con-li {
      margin: 0.4rem;
      color: #666666;
    }
  }
}
.simple .cash {
  width: 90%;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
  .cash-li {
    margin: 1rem;
    width: 300px;
    & > img {
      width: 2rem;
    }
    span {
      display: block;
      font-size: 0.6rem;
      margin-top: 0.5rem;
    }
  }
}
@media screen and (max-width: 540px) {
  .simple {
    .sim-content {
      li {
        width: 20rem;
        & > img {
          width: 3rem;
          margin-bottom: 1rem;
        }
      }
    }
    .sim-content.fiat {
      .left-block {
        width: 30rem;
        .li {
          & > img {
            width: 5rem;
            margin-right: 1rem;
          }
        }
      }
      & > img {
        height: 20rem;
      }
    }
  }
}
</style>
