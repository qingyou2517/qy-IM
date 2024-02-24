<template>
  <view class="content">
    <myTopBar pl="60rpx" pr="50rpx" class="my-top-bar">
      <template #left>
        <image
          class="close"
          src="../../static/images/common/add.png"
          mode="scaleToFill"
        />
      </template>
      <template #right>
        <navigator
          url="/pages/register/register"
          open-type="navigate"
          hover-class="navigator-hover"
        >
          <text class="register">注册</text>
        </navigator>
      </template>
    </myTopBar>
    <view class="logo">
      <image src="../../static/images/index/logo.png" mode="scaleToFill" />
    </view>
    <view class="main">
      <view class="title">登录</view>
      <view class="welcome">您好，欢迎来到 青游时光！</view>
      <u-form
        labelPosition="left"
        ref="formRef"
        :model="formData"
        :rules="rules"
      >
        <u-form-item prop="userInfo.username" ref="item1" borderBottom>
          <u-input
            v-model="formData.userInfo.username"
            border="bottom"
            placeholder="用户名"
            clearable
          ></u-input>
        </u-form-item>
        <u-form-item prop="userInfo.password" ref="item1" borderBottom>
          <u-input
            v-model="formData.userInfo.password"
            border="bottom"
            placeholder="密码"
            clearable
            password
          ></u-input>
        </u-form-item>
      </u-form>
      <u-button
        class="submit"
        :custom-style="customStyle"
        color="rgba(255,228,49,0.9)"
        shape="circle"
        @click="handleLogin"
        >登录</u-button
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import myTopBar from "@/components/myTopBar.vue";
import { onLoad } from "@dcloudio/uni-app";
import uForm from "uview-plus/components/u-form/u-form.vue";

// <u-button> 的自定义样式
const customStyle = reactive({
  color: "#272832",
  fontWeight: "500",
  fontSize: "32rpx",
  height: "96rpx",
});

// form 表单
const formData = reactive({
  userInfo: {
    username: "",
    password: "",
  },
});
const formRef = ref<InstanceType<typeof uForm>>();
const rules = reactive({
  "userInfo.username": {
    type: "string",
    required: true,
    message: "请填写姓名",
    trigger: ["blur", "change"],
  },
  "userInfo.password": {
    type: "string",
    required: true,
    message: "请输入密码",
    trigger: ["blur", "change"],
  },
});

onLoad(() => {
  // 从localStorage读取用户名，填充到formData.userInfo.username
});

const handleLogin = () => {
  console.log(formData.userInfo);
};
</script>

<style lang="scss" scoped>
:deep(.u-form-item__body__right__message) {
  margin-left: 8rpx !important;
}

.content {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding-top: var(--status-bar-height);
  padding-bottom: env(safe-area-inset-bottom);
}

.my-top-bar {
  .close {
    width: 34rpx;
    height: 34rpx;
    background: $uni-bg-color;
    transform: rotate(45deg);
  }
  .register {
    width: 72rpx;
    height: 50rpx;
    font-size: 36rpx;
    color: $uni-text-color;
    letter-spacing: 0;
    font-weight: 500;
  }
}
.logo {
  padding-top: calc(88rpx + 80rpx);
  margin: 0 auto;
  image {
    width: 192rpx;
    height: 92rpx;
  }
}
.main {
  padding: 56rpx 56rpx 0;

  .title {
    // width: 112rpx;
    height: 80rpx;
    font-size: 56rpx;
    color: #272832;
    letter-spacing: 0;
    font-weight: 500;
  }
  .welcome {
    padding: 16rpx 0 64rpx;
    height: 56rpx;
    font-size: 40rpx;
    color: $uni-text-color-grey;
    letter-spacing: 0;
    font-weight: 400;
  }
  .submit {
    margin-top: 118rpx;
  }
}
.custom-style {
  color: $uni-text-color;
}
</style>
