<template>
  <div class="header">
    <img src="@/assets/footer_logo.png" alt="" class="logo" />
    <ul>
      <li :class="{sel:path==='/'}" @click="$router.push('/')">Home</li>
      <li :class="{sel:path==='/about'}" @click="$router.push('/about')">About us</li>
      <li :class="{sel:path==='/agreement'}" @click="$router.push('/agreement')">Agreement</li>
      <li>Administrati</li>
    </ul>
    <b>More</b>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Head",
  setup() {
    const router = useRoute();
    const path = computed(() => router.path);
    return { path };
  },
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
        color: #00acfb;
        box-shadow: 0 0.1rem 1rem 0 #0066c2;
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
