<template>
  <Head-Main />
  <router-view class="content-main"/>
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
.content-main{
  min-height:100px;
  border:1px solid red;
  flex: 1;
}
</style>
