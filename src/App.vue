<template>
  <Head-Main />
  <router-view class="content-main" />
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
  padding-top: 2rem;
  min-height: 100px;
  flex: 1;
}
</style>
