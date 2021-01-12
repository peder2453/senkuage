<template>
  <div class="footer">
    <h1>{{$t('footer.areYou')}}</h1>
    <div>
      <h3>{{$t('footer.easy')}}</h3>
      <h3>{{$t('footer.need')}}</h3>
    </div>
    <b @click="$router.push(lastPath)">NEXT PAGE</b>
    <em />
    <img src="@/assets/footer_logo.png" />
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Footer",
  setup() {
    const list = ["/", "/agreement", "/about", "/home"];
    const route = useRoute();
    const path = computed(() => route.path);
    let lastPath = ref(list[1]);
    watch(path, () => {
      let index = list.findIndex((e) => e === path.value);
      if (index >= list.length - 1) {
        lastPath.value = list[0];
      } else {
        lastPath.value = list[index + 1];
      }
      window.scroll(0, 0);
    });
    return { lastPath };
  },
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
    cursor: pointer;
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
@media screen and (max-width: 540px) {
  .footer {
    b {
      padding: 0.1rem 0.3rem;
    }
  }
}
</style>
