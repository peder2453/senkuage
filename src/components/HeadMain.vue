<template>
  <div class="header">
    <img src="@/assets/footer_logo.png" alt="" class="logo" />
    <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Agreement</li>
      <li class="sel">Administrati</li>
    </ul>
    <b>More</b>
  </div>
</template>

<script>
export default {
  name: "Head",
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 1;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .logo {
    width: 6rem;
  }
  ul {
    font-size: 0.5rem;
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    li {
      padding: 0.1rem 0.25rem;
      border-radius: 0.2rem;
      cursor: pointer;
      &.sel {
        background: #fff;
        color: #5058fb;
        box-shadow: 0 .1rem 1rem 0 #0066C2;
      }
    }
  }
  b {
    font-size: 0.6rem;
    padding: 0 0.25rem;
    border-radius: 0.2rem;
    color: #fff;
    // background: linear-gradient(to right, #22bffe, #00f4ee);
  }
}
</style>