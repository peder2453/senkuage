<template>
  <div class="header">
    <img src="@/assets/footer_logo.png" alt="" class="logo" />
    <ul class="pc">
      <li
        v-for="({ path, name }, i) in menuList"
        :key="i"
        :class="{ sel: indexpath ===  path}"
        @click="goto(path)"
      >
        {{ name }}
      </li>
    </ul>
    <b>More</b>

    <img
      src="@/assets/footer_menu.png"
      @click="isShowMenu = true"
      class="menu"
    />
  </div>
  <div class="menu-list" :class="{ close: !isShowMenu }">
    <div class="zzc" @click="isShowMenu = false"></div>
    <ul>
      <img
        src="@/assets/footer_close.png"
        @click="isShowMenu = false"
        class="close"
      />
      <li v-for="({ path, name }, i) in menuList" :key="i" @click="goto(path)">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Head",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const indexpath = computed(() => route.path);
    const isShowMenu = ref(false);
    const menuList = [
      {
        name: "Administrati",
        path: "/",
      },
      {
        name: "Agreement",
        path: "/agreement",
      },
      {
        name: "About us",
        path: "/about",
      },
      {
        name: "Home",
        path: "/home",
      },
    ];
    function goto(path) {
      router.push(path);
      isShowMenu.value = false;
    }
    return { indexpath, isShowMenu, goto, menuList };
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
  ul.pc {
    font-size: 0.5rem;
    display: flex;
    display: flex;
    justify-content: space-evenly;
    margin-right: 3rem;
    li {
      padding: 0.1rem 0.25rem;
      border-radius: 0.2rem;
      cursor: pointer;
      margin: 0 0.5rem;
      &.sel {
        background: #fff;
        color: #00acfb;
        box-shadow: 0 0.1rem 1rem 0 #0066c2;
      }
    }
  }
  b {
    font-size: 0.6rem;
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
    color: #fff;

    background: linear-gradient(to right, #22bffe, #00f4ee);
    // box-shadow: 0px 0px 17px 1px rgba(1, 115, 216, 0.32);
    border-radius: 7px;
  }
  .menu {
    width: 1.8rem;
    display: none;
  }
}
.menu-list {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  transition: all 0.2s;
  .zzc {
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
  ul {
    transition: all 0.3s;
    transform: translateX(0);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    background: #fff;
    height: 100vh;
    box-sizing: border-box;
    padding: 4rem 3rem;
    img.close {
      width: 1.5rem;
      position: absolute;
      right: 2rem;
      top: 2rem;
    }
    li {
      font-size: 1.2rem;
      padding: 1.5rem 0.6rem 0.2rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
.menu-list.close {
  // left: 100%;
  ul {
    transform: translateX(100%);
  }
  opacity: 0;
  pointer-events: none;
}
@media screen and (max-width: 540px) {
  .header {
    ul.pc,
    b {
      display: none;
    }
    .menu {
      display: inline;
    }
  }
}
</style>
