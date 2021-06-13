<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

  </div>
</template>
<script>

export default ({
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
})
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
}
</style> 