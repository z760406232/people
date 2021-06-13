<template>
  <div class="about">
    <div class="top">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div id="myChart" :style="{ width: '100%', height: '300px' }"></div>
    <Child :jump="jump" :check="check" :title="title"></Child>
  </div>
</template>

<script>
import Child from '@/components/btn.vue'
export default {
  name: 'Father',
  components: {
    Child
  },
  data () {
    return {
      jump: '/result',
      check: 'undefined',
      title: '提交分析'
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '神兽Excel表格' },
        tooltip: {},
        xAxis: {
          data: ["神兽1", "神兽2", "神兽3", "神兽4", "神兽5", "神兽6"]
        },
        yAxis: {},
        series: [{
          name: '',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          itemStyle: {
            normal: {
              //这里是重点
              color: function (params) {
                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'];
                return colorList[params.dataIndex]
              }
            }
          }
        }]
      });
    },
    onClickLeft () {
      this.$router.go(-1)
    },
  }
}
</script>
