<template>
  <view class="content">
    <myTopBar class="my-top-bar">
      <template #left>
        <image
          class="back"
          src="../../static/images/common/back.png"
          mode="scaleToFill"
          @click="goBack"
        />
      </template>
      <template #right>
        <image
          class="close"
          src="../../static/images/common/add.png"
          mode="scaleToFill"
        />
      </template>
    </myTopBar>
    <view class="logo">
      <image src="../../static/images/index/logo.png" mode="scaleToFill" />
    </view>
    <view class="main">
      <view class="title">注册</view>
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
            placeholder="请取个名字"
            clearable
          ></u-input>
        </u-form-item>
        <u-form-item prop="userInfo.email" ref="item1" borderBottom>
          <u-input
            v-model="formData.userInfo.email"
            border="bottom"
            placeholder="请输入邮箱"
            clearable
          ></u-input>
        </u-form-item>
        <u-form-item prop="userInfo.password" ref="item1" borderBottom>
          <u-input
            v-model="formData.userInfo.password"
            border="bottom"
            placeholder="这里输入密码"
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
        @click="handleRegister"
        >注册用户</u-button
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import myTopBar from "@/components/myTopBar.vue";
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
    email: "",
    password: "",
  },
});
const formRef = ref<InstanceType<typeof uForm>>();
const rules = reactive({
  "userInfo.username": [
    {
      type: "string",
      required: true,
      message: "请填写姓名",
      trigger: ["blur"],
    },
  ],
  "userInfo.email": [
    {
      type: "string",
      required: true,
      message: "请输入邮箱",
      trigger: ["blur"],
    },
    {
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
      message: "邮箱格式不正确",
      trigger: ["blur"],
    },
  ],
  "userInfo.password": [
    {
      type: "string",
      required: true,
      message: "请输入密码",
      trigger: ["blur"],
    },
    {
      min: 6,
      required: true,
      message: "密码长度不能少于6位",
      trigger: ["blur"],
    },
  ],
});

onLoad(() => {
  // 从localStorage读取用户名，填充到formData.userInfo.username
});

const goBack = () => {
  uni.navigateTo({
    url: "/pages/signin/signin",
  });
};

const handleRegister = () => {
  // 注册成功后，记得把用户名存入localStorage
  const { username, email, password } = formData.userInfo;
  if (!username || !email || !password) return;

  uni.navigateTo({
    url: "/pages/signin/signin",
  });
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
  .close,
  .back {
    width: 34rpx;
    height: 34rpx;
  }
  .close {
    background: $uni-bg-color;
    transform: rotate(45deg);
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
    margin-bottom: 32rpx;
  }

  .submit {
    margin-top: 118rpx;
  }
}
.custom-style {
  color: $uni-text-color;
}
</style>
