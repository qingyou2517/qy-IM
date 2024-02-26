<template>
  <view class="content">
    <myTopBar class="my-top-bar">
      <template #left>
        <image
          class="back"
          src="../../static/images/common/back.png"
          mode="aspectFill"
          @click="goBack"
        />
      </template>
      <template #right>
        <view>
          <image
            class="more"
            src="../../static/images/userhome/more.png"
            mode="aspectFit"
          />
        </view>
      </template>
    </myTopBar>
    <view class="bg">
      <!-- 用作背景跳转动画：白色半透明背景 =》黄色渐变背景 -->
      <view class="bg-add-friend"></view>
      <!-- 白色半透明背景图 -->
      <image
        src="../../static/images/img/three.png"
        mode="aspectFill"
        class="bg-img"
      />
    </view>

    <view class="main">
      <view class="user-head">
        <view class="gender">
          <image
            src="../../static/images/userhome/female.png"
            mode="aspectFill"
          />
        </view>
        <image
          class="avatar"
          src="../../static/images/img/three.png"
          mode="aspectFill"
        />
      </view>
      <view class="user-info">
        <view class="name">{{ userData.name }}</view>
        <view class="nick">昵称：{{ userData.nickName }}</view>
        <view class="info">{{ userData.signature }}</view>
      </view>
      <view class="add-friend-button">
        <u-button type="default" size="large" :customStyle="style1"
          >加为好友</u-button
        >
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import myTopBar from "@/components/myTopBar.vue";

const style1 = reactive({
  color: "$uni-text-color",
  background: "#FFE431",
  fontSize: "32rpx",
  fontWeight: "400",
});

// 用户数据
const userData = reactive({
  name: "",
  nickName: "小影",
  signature: "温柔要有，但不是妥协，在安静中，不慌不忙的坚强。",
});

const goBack = () => {
  uni.navigateBack({ delta: 1 });
};

onLoad((e: AnyObject | undefined) => {
  const queryObj = JSON.parse(uni.getStorageSync("queryObj"));
  userData.name = queryObj.name;
});
</script>

<style lang="scss" scoped>
$bg-zIndex: -2;
$bg-img-zIndex: -1;
$avatar-zIndex: 10;
$gender-zIndex: 15;
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: var(--status-bar-height);
  padding-bottom: env(safe-area-inset-bottom);
  height: 100vh;
}

.my-top-bar {
  background: $uni-bg-color;
  .back {
    width: 34rpx;
    height: 34rpx;
  }
  .more {
    width: 52rpx;
    height: 12rpx;
  }
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $bg-zIndex;
  .bg-add-friend {
    width: 100%;
    height: 100%;
    // background: #eee;
  }
  .bg-img {
    z-index: $bg-img-zIndex;
    position: absolute;
    left: -10rpx;
    top: -10rpx;
    width: 110%;
    height: 110%;
    filter: blur(16px);
    opacity: 0.4;
  }
}

.main {
  flex: 1;
  margin-top: calc(88rpx + 60rpx);
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  .user-head {
    position: relative;
    width: 400rpx;
    height: 400rpx;
    border: 6rpx solid #ffffff;
    border-radius: 48rpx;
    .avatar {
      width: 100%;
      height: 100%;
      z-index: $avatar-zIndex;
      border-radius: 48rpx;
    }
    .gender {
      position: absolute;
      right: 16rpx;
      bottom: 16rpx;
      width: 64rpx;
      height: 64rpx;
      background: #ff5d5b;
      border-radius: 56rpx;
      z-index: $gender-zIndex;
      display: flex;
      align-items: center;
      justify-content: center;
      image {
        width: 32rpx;
        height: 32rpx;
      }
    }
  }
  .user-info {
    flex: 1;
    .name {
      height: 74rpx;
      line-height: 74rpx;
      font-size: 52rpx;
      color: $uni-text-color;
      letter-spacing: -0.89rpx;
      font-weight: 400;
      text-align: center;
      margin-top: 48rpx;
    }
    .nick {
      height: 40rpx;
      line-height: 40rpx;
      font-size: 28rpx;
      color: $uni-text-color;
      letter-spacing: -0.48px;
      font-weight: 400;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      height: 170rpx;
      padding: 20rpx 100rpx 0;
      font-size: 28rpx;
      color: $uni-text-color;
      letter-spacing: -0.48rpx;
      font-weight: 200;
    }
  }
  .add-friend-button {
    width: calc(100% - 64rpx);
    margin-bottom: 76rpx;
  }
}
</style>
