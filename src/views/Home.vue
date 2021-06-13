<template>
  <div class="home">
    <!-- <div class="Img">
      <img src="../assets/img/1.png" alt="" />
    </div> -->
    <div class="top">
      <van-nav-bar title="提问" />
    </div>
    <div class="Top_Box">
      <img src="../assets/img/baotong.png" alt="" />
    </div>
    <div class="chose">
      <form>
        <label>
          <input
            type="radio"
            name="radio"
            value="A"
            checked="checked"
            v-model="check"
          />
          <span>选项一</span>
        </label>
        <label>
          <input type="radio" name="radio" value="B" v-model="check" />
          <span>选项二</span>
        </label>
        <label>
          <input type="radio" name="radio" value="C" v-model="check" />
          <span>选项三</span>
        </label>
      </form>
    </div>
    <Child :jump="jump" :check="check" :title="title"></Child>
  </div>
</template>

 <script>
import Child from '@/components/btn.vue'
export default {
  name: "Father",
  components: {
    Child
  },
  data () {
    return {
      A: '选项一',
      check: '',
      jump: '/tableform',
      title: '下一步'
    }
  },
  mounted () {
  },
  methods: {

  }
}
 </script>
 <style>
html,
body,
#app,
.home {
  height: 100%;
}
</style>
<style lang='scss' scoped>
.home {
  background: #f5efe3;
}
.Top_Box {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.talk {
  width: 0px;
  height: 0px;
  position: absolute;
  top: 100px;
  left: 90px;
  border-top: 20px solid transparent;
  border-left: 30px solid transparent;
  border-right: 30px solid #cdcdcd;
  border-bottom: 20px solid transparent;
}
.Img img {
  width: 150px;
  height: 180px;
}
.box {
  width: 200px;
  height: 70px;
  position: relative;
  left: 150px;
  top: 35px;
  background-color: #cdcdcd;
  // margin-top: 50px;
  border-radius: 20px;
  text-align: center;
}
.top {
  height: 50px;
}
.IMG {
  width: 150px;
  height: 200px;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
}
.chose {
  // background-color: #f4e7ec;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px;
}
.chose form {
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  justify-content: center;
  label {
    display: -webkit-box;
    display: flex;
    cursor: pointer;
    font-weight: 500;
    input {
      display: none;
    }
    input:checked + span {
      // background-color: #edd8e0;
      background-color: #f5efe3;
    }
    input:checked + span:before {
      box-shadow: inset 0 0 0 0.4375em #900c3f;
    }
    span {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 0.375em;
      padding: 0.375em 0.75em 0.375em 0.375em;
      border-radius: 99em;
      -webkit-transition: 0.25s ease;
      transition: 0.25s ease;
    }
    span:before {
      display: -webkit-box;
      display: flex;
      flex-shrink: 0;
      content: "";
      background-color: #fff;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.375em;
      -webkit-transition: 0.25s ease;
      transition: 0.25s ease;
      box-shadow: inset 0 0 0 0.125em #900c3f;
    }
  }
}
.btn button {
  width: 200px;
  border-radius: 10px;
}
</style>