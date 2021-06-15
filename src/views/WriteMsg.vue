<template>
  <div style="text-align: left; width: 90%; margin: auto">
    <div class="msgBox">
      <h3 style="background: #9fcdea; text-align: center; padding: 10px 0">
        意向登记表
      </h3>
      <div class="tableForm">
        <van-form @submit="onSubmit">
          <!-- 姓名 -->
          <van-field
            v-model="name"
            name="name"
            required
            label="姓名"
            placeholder="请填写姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <!-- 手机号 -->
          <van-field
            v-model="phone"
            name="phone"
            required
            label="手机号"
            placeholder="请填写手机号"
            :rules="[{ validator: asyncPhone, message: '请输入正确的手机号' }]"
          />
          <!-- 邮箱 -->
          <van-field
            v-model="emile"
            name="emile"
            required
            label="邮箱"
            placeholder="请填写邮箱"
            :rules="[{ validator: asyncEmile, message: '请输入正确的邮箱' }]"
          />
          <!-- 无需必填 -->
          <van-field
            v-model="CompanyNmae"
            name="CompanyNmae"
            required
            label="公司名称"
            placeholder="请输入公司名称"
            :rules="[{ required: true, message: '请输入公司名称' }]"
          />
          <!-- <van-field
            v-model="CompanyPeople"
            name="CompanyPeople"
            label="法定代表人"
            placeholder="请输入法定代表人"
          /> -->
          <van-field
            v-model="CompanyAddress"
            required
            name="CompanyAddress"
            label="办公场所"
            placeholder="请输入办公场所"
            :rules="[{ required: true, message: '请输入办公场所' }]"
          />
          <!-- <van-field
            v-model="CompanyMoney"
            name="CompanyMoney"
            label="注册资金"
            placeholder="请输入注册资金"
          /> -->
          <!-- <van-field
            v-model="CompanyArea"
            name="CompanyArea"
            label="授权区域"
            placeholder="请输入授权区域"
          /> -->
          <!-- <van-field
            v-model="PeopleNum"
            name="PeopleNum"
            label="员工人数"
            placeholder="请输入员工人数"
          /> -->
          <van-field
            v-model="CompanyNum"
            name="CompanyNum"
            label="自有门店数量"
            placeholder="请输入自有门店数量"
          />
          <!-- <van-field
            v-model="CompanyCentre"
            name="CompanyCentre"
            label="核心门店名称"
            placeholder="请输入核心门店名称"
          /> -->
          <van-field
            v-model="ChannelNum"
            name="ChannelNum"
            label="渠道数量"
            placeholder="请输入渠道数量"
          />
          <!-- <van-field
            v-model="ChannelName"
            name="ChannelName"
            label="核心渠道名称"
            placeholder="请输入核心渠道名称"
          /> -->
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>
<script>

import { Toast } from 'vant';

export default {
  data () {
    return {
      name: '',
      phone: '',
      emile: '',    
      //   公司名称
      CompanyNmae: '',
      //   法定代表人
      //   CompanyPeople: '',
      //   办公场所
      CompanyAddress: '',
      //   注册资金
      //   CompanyMoney: '',
      //   授权区域
      //   CompanyArea: '',
      //   员工人数
      //   PeopleNum: '',
      //   自有门店数量
      CompanyNum: '',
      //   核心门店名称
      //   CompanyCentre: '',
      //   渠道数量
      ChannelNum: '',
      // 核心渠道名称   
      //   ChannelName: ''

    };
  },
  methods: {
    // 异步校验函数返回 Promise
    asyncPhone (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(val));
        }, 500);
      });
    },
    asyncEmile (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(val));
        }, 500);
      });
    },
    onSubmit (values) {
      this.$axios.post('home/introduction', values).then(res => {
        if (res.body.data === 200) {
          console.log(123);
        }
      })
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 50px;
  text-align: center;
  background: #f7f8fa;
}
.basic tr td:first-child {
  width: 20%;
}
.basic tr td:last-child {
  width: 80%;
}
</style>