<template>
  <div class="home-banner">
    <img src="@/assets/home_back.png" alt="" />
    <div class="wz">
      <h2>{{ $t("about.our") }}</h2>
      <h4>{{ $t("about.team") }}</h4>
      <h6>
        {{ $t("about.markets") }} <br />
        {{ $t("about.much") }} <br />
        {{ $t("about.online") }}
      </h6>
    </div>
  </div>
  <div class="simple">
    <div class="title">{{ $t("about.arbitrageurs") }}</div>
    <div class="coinbase">{{ $t("about.binance") }}</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content">
      <li>
        <img src="@/assets/about/cont-icon0.png" alt="" />
        <div class="txt">
          {{ $t("about.exchange") }} <br />
          {{ $t("about.another") }} <br />
          {{ $t("about.time") }} <br />
          {{ $t("about.arbitrage") }}  <br />
          {{ $t("about.canearn") }}
        </div>
      </li>
      <li>
        <img src="@/assets/about/cont-icon1.png" alt="" />
        <div class="txt">
          {{ $t("about.exchanges") }} <br />
          {{ $t("about.different") }}
        </div>
      </li>
      <li>
        <img src="@/assets/about/cont-icon2.png" alt="" />
        <div class="txt">
          {{ $t("about.profit") }}
        </div>
      </li>
    </div>
  </div>
  <div class="simple">
    <div class="title">{{ $t("about.traiangular") }}</div>
    <div class="coinbase">{{ $t("about.bank") }}</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content fiat">
      <div class="left-block">
        <div class="li">
          <img src="@/assets/about/sim-icon0.png" alt="" />
          <span>
            {{ $t("about.assets") }}
          </span>
        </div>
        <div class="li">
          <img src="@/assets/about/sim-icon1.png" alt="" />
          <span>
            {{ $t("about.sell") }}
          </span>
        </div>
        <div class="li">
          <img src="@/assets/about/sim-icon2.png" alt="" />
          <span>
            {{ $t("about.between") }}
          </span>
        </div>
      </div>
      <img src="@/assets/about/right-block.png" alt="" class="right-block" />
    </div>
  </div>
  <div class="crypto">
    <div class="titlt">{{ $t("about.triangular") }}</div>
    <div class="subhead">
      {{ $t("about.within") }}
    </div>
    <img class="down-w" src="@/assets/about/down-w.png" alt="" />
  </div>
  <div class="crypot-content">
    <div class="cry-card">
      <div class="cay-tit">{{ $t("about.coins") }}</div>
      <i></i>
      <div class="cay-con">{{ $t("about.eg") }}</div>
    </div>
    <div class="cry-card">
      <div class="cay-tit">{{ $t("about.ratios") }}</div>
      <i></i>
      <div class="cay-con">
        {{ $t("about.when") }}
      </div>
    </div>
  </div>
  <div class="simple">
    <div class="title">{{ $t("about.convergence") }}</div>
    <div class="coinbase">
      {{ $t("about.converge") }}
    </div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content conver">
      <img src="@/assets/about/conver-img.png" alt="" class="conver-left" />
      <div class="conver-right">
        <div class="con-li">
          {{ $t("about.overvaued") }}
        </div>
        <div class="con-li">
          {{ $t("about.short") }}
        </div>
        <div class="con-li">
          {{ $t("about.price") }}
        </div>
      </div>
    </div>
  </div>
  <div class="simple">
    <div class="title">{{ $t("about.carry") }}</div>
    <div class="coinbase">{{ $t("about.futures") }}</div>
    <img class="down" src="@/assets/about/down.png" alt="" />
    <div class="sim-content cash">
      <div class="cash-li">
        <img src="@/assets/about/cash0.png" alt="" />
        <span>
          {{ $t("about.long") }}
        </span>
      </div>
      <div class="cash-li">
        <img src="@/assets/about/cash1.png" alt="" />
        <span>
          {{ $t("about.settle") }}
        </span>
      </div>
      <div class="cash-li">
        <img src="@/assets/about/cash2.png" alt="" />
        <span>
          {{ $t("about.right") }}
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
