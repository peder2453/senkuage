<template>
  <Head-Main />
  <div class="content-main">
    <router-view />
  </div>
  <Footer-Main />
</template>
<script>
import HeadMain from "./components/HeadMain";
import FooterMain from "./components/FooterMain";
export default {
  name: "App",
  components: {
    HeadMain,
    FooterMain,
  },
};
</script>
<style lang="scss" scoped>
.content-main {
  min-height: 100px;
  flex: 1;
}
</style>
