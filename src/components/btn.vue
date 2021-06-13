<template>
  <div class="btn">
    <van-button @click="GoNext(jump, check)" color="#900c3f">
      {{ title }}
    </van-button>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  name: "Child",
  props: ['jump', 'check', 'title'],
  data () {
    return {
    };
  },
  methods: {
    GoNext (jump, check) {
      if (check == '') {
        Toast('请至少选择一项')
      } else if (check !== '' && check !== 'undefined') {
        console.log('选择得是：' + this.check)
        this.$router.push(jump)
      } else {
        this.$router.push(jump)
      }
    }
  }
};
</script>
<style scoped>
.btn button {
  width: 200px;
  border-radius: 10px;
}
</style>