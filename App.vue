<template>
  <div>
    <div>
      这是移动端
    </div>
    <div>
      用户信息如下
    </div>
    <div>
      {{ User }}
    </div>
  </div>
</template>

<script>
//已封装请求方法，直接使用即可
import {Post} from "../Plugin/Request";
import url from "../Plugin/URL";

export default {
  name: "App.vue",
  data() {
    return {
      User: this.$ResponseData,//用户信息
    };
  },
};
</script>

<style scoped>

</style>