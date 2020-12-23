<template>
  <div class="footer">
    <h1>Are you ready?</h1>
    <div>
      <h3>It's easy to open your encryption service.</h3>
      <h3>You need to click the button to go to the next pag</h3>
    </div>
    <b>NEXT PAGE</b>
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
  height: 13rem;
  background: url("~@/assets/footer_back.png") no-repeat center/cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 0.5rem;

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  h3 {
    color: #92e7ff;
    font-size: 0.6rem;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
  }
  b {
    width: 4.5rem;
    height: 1.3rem;
    background: #00eaed;
    font-size: 0.5rem;
    border-radius: 1rem;
    font-weight: 400;
    min-width: 80px;
    min-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  em {
    width: 90%;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
  img {
    width: 5rem;
  }
}
</style>
