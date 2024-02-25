<template>
  <view class="content">
    <view class="top-bar">
      <u-input
        class="input"
        placeholder="搜索用户/群组"
        suffixIcon="search"
        suffixIconStyle="color: #909399"
        clearable
      ></u-input>
      <view class="cancel" @click="goBack">取消</view>
    </view>
    <view class="main">
      <view class="users">
        <view class="title">用户</view>
        <view class="list">
          <view class="list-item">
            <image src="../../static/images/img/one.png" mode="scaleToFill" />
            <view class="name">心海</view>
            <u-button
              shape="circle"
              size="mini"
              color="#FFE431"
              :customStyle="style1"
              >发消息</u-button
            >
          </view>
          <view class="list-item">
            <image src="../../static/images/img/one.png" mode="scaleToFill" />
            <view class="name">心海</view>
            <u-button
              shape="circle"
              size="mini"
              color="#FFE431"
              :customStyle="style1"
              >发消息</u-button
            >
          </view>
        </view>
      </view>
      <view class="group">
        <view class="title">群组</view>
        <view class="list">
          <view class="list-item">
            <image src="../../static/images/img/three.png" mode="scaleToFill" />
            <view class="name">烟绯</view>
            <u-button
              shape="circle"
              size="mini"
              type="primary"
              plain
              :customStyle="style2"
              >加好友</u-button
            >
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const style1 = reactive({
  width: "120rpx",
  height: "48rpx",
  color: "$uni-text-color",
  fontSize: "24rpx",
  fontWeight: "400",
});
const style2 = reactive({
  width: "120rpx",
  height: "48rpx",
  color: "$uni-text-color",
  fontSize: "24rpx",
  fontWeight: "400",
  background: "rgba(74,170,255,0.10)",
  border: "none",
});

const goBack = () => {
  uni.navigateTo({ url: "/pages/index/index" });
};
</script>

<style lang="scss" scoped>
$tb-zIndex: 10;

.content {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding-top: var(--status-bar-height);
  padding-bottom: env(safe-area-inset-bottom);
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $tb-zIndex;
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  background: $uni-bg-color;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  .input {
    flex: 1;
    margin: 16rpx 32rpx;
    background: $uni-bg-color-grey;
  }
  .cancel {
    margin-left: auto;
    margin-right: 32rpx;
    height: 40rpx;
    line-height: 40rpx;
    font-family: PingFangSC-Regular;
    font-size: 28rpx;
    color: #272832;
    letter-spacing: -0.48rpx;
    font-weight: 400;
  }
}

.main {
  padding: calc(88rpx + 48rpx) 32rpx 0;

  .title {
    height: 60rpx;
    font-family: PingFangSC-Semibold;
    font-size: 44rpx;
    line-height: 60rpx;
    color: #272832;
    letter-spacing: -0.75px;
    font-weight: 600;
  }
  .list {
    .list-item {
      padding: 20rpx 0;
      display: flex;
      align-items: center;
      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 20rpx;
      }
      .name {
        flex: 1;
        padding-left: 32rpx;
        height: 50rpx;
        font-family: PingFangSC-Regular;
        font-size: 36rpx;
        color: $uni-text-color;
        letter-spacing: -0.62rpx;
        line-height: 50rpx;
        font-weight: 400;
      }
    }
  }

  .group {
    padding-top: 40rpx;
  }
}
</style>
