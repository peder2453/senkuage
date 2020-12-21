<template>
  <div class="footer">
    <h1>are you ready?</h1>
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
  height: 350px;
  background: url("~@/assets/footer_back.png") no-repeat center/cover;
  color: #fff;
  h1 {
    font-size: 2rem;
    border: 1px solid red;
    text-align: center;
  }
}
</style>