<template>
  <div class="footer">
    <h1>Are you ready?</h1>
    <h3>It's easy to open your encryption service.</h3>
    <h3>You need to click the button to go to the next pag</h3>
    <b>next page</b>
    <em />
    <img src="@/assets/footer_logo.png" />
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  border: 1px solid blue;
  height: 700px;
  background: url("~@/assets/footer_back.png") no-repeat center/cover;
  color: #fff;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h3 {
    color: #92e7ff;
    font-size: 0.6rem;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
  }
  b {
    display: block;
    width: 3.5rem;
    height: 1rem;
    line-height: 1rem;
    background: #00eaed;
    font-size: 0.5rem;
    text-align: center;
    border-radius: 1rem;
    font-weight: 400;
    margin: 0 auto;
    margin-top: 1rem;
  }
  em {
    width: 90%;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    display: block;
    margin: 1rem auto;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 4rem;
  }
}
</style>
