<template>
  <div style="text-align: left">
    <div class="top">
      <van-nav-bar
        title="档案"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="msgBox">
      <table
        width="90%"
        border="1"
        align="center"
        cellpadding="10"
        cellspacing="0"
      >
        <caption>
          <h3>患者档案</h3>
        </caption>
        <tr>
          <td colspan="3" bgcolor="#9FCDEA">患者资料</td>
        </tr>
        <tr>
          <td>姓 名：</td>
          <td rowspan="4" align="center" valign="middle">照片</td>
        </tr>
        <tr>
          <td>性 别：</td>
        </tr>
        <tr>
          <td>身份证：</td>
        </tr>
        <tr>
          <td>手机号：</td>
        </tr>
        <tr>
          <td colspan="3">地址：</td>
        </tr>
        <tr>
          <td colspan="3" style="font-weight: bold" bgcolor="#9FCDEA">
            就诊信息
          </td>
        </tr>
        <tr>
          <td colspan="3">就诊信息</td>
        </tr>
        <tr>
          <td colspan="3" bgcolor="#9FCDEA">选择得内容</td>
        </tr>
        <tr>
          <td colspan="3">
            选项一，选项二，选项三选项一，选项二，选项三选项一，选项二，选项三选项一，选项二，选项三
          </td>
        </tr>
        <tr>
          <td colspan="3" bgcolor="#9FCDEA">备用111</td>
        </tr>
        <tr>
          <td colspan="3">123</td>
        </tr>
      </table>
    </div>
    <Child
      :jump="jump"
      :check="check"
      :title="title"
      style="text-align: center; margin-top: 30px"
    ></Child>
  </div>
</template>
<script>
import Child from '@/components/btn.vue'

export default ({
  name: 'GG',
  components: {
    Child
  },
  data () {
    return {
      jump: '/table',
      check: 'undefined',
      title: '确认'
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
  }
})
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  text-align: center;
}
</style>