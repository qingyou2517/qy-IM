<template>
  <view class="content">
    <view class="top-bar">
      <view class="top-bar-left">
        <image src="../../static/images/img/four.png" mode="scaleToFill" />
      </view>
      <view class="top-bar-center">
        <image src="../../static/images/index/logo.png" mode="scaleToFill" />
      </view>
      <view class="top-bar-right">
        <view>
          <image
            src="../../static/images/index/search.png"
            mode="scaleToFill"
          />
          <image src="../../static/images/index/add.png" mode="scaleToFill" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 88rpx;
  background: $uni-bg-color;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-left: $uni-spacing-col-base;
  padding-right: $uni-spacing-col-base;
  box-sizing: border-box;
  border-bottom: 1px solid $uni-border-color;
  .top-bar-left {
    flex: 1;
    image {
      width: 68rpx;
      height: 68rpx;
      border-radius: 16rpx;
    }
  }
  .top-bar-center {
    flex: 1;
    image {
      width: 88rpx;
      height: 42rpx;
    }
  }
  .top-bar-right {
    // margin-left: auto;
    image {
      width: 52rpx;
      height: 52rpx;
      margin: 0 18rpx;
    }
  }
}
</style>
