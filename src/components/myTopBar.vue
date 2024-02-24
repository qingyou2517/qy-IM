<template>
  <view class="top-bar">
    <view class="top-bar-left">
      <slot name="left"></slot>
    </view>
    <view class="top-bar-center">
      <slot name="center"></slot>
    </view>
    <view class="top-bar-right">
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
</script>

<style lang="scss">
$tb-zIndex: 10;

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $tb-zIndex;
  width: 100%;
  height: 88rpx;
  background: $uni-bg-color;
  display: flex;
  align-items: center;
  padding-top: var(--status-bar-height);
  .top-bar-left {
    flex: 1;
    margin-left: 18rpx;
    padding-left: $uni-spacing-col-base;
  }
  .top-bar-center {
    flex: 1;
    text-align: center;
  }
  .top-bar-right {
    // margin-left: auto;
    flex: 1;
    text-align: right;
    padding-right: $uni-spacing-col-base;
  }
}
</style>
