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

type Pd = {
  pl?: string;
  pr?: string;
};
const props = withDefaults(defineProps<Pd>(), {
  pl: "32rpx",
  pr: "32rpx",
});
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
    padding-left: v-bind("props.pl");
  }
  .top-bar-center {
    flex: 1;
    text-align: center;
  }
  .top-bar-right {
    // margin-left: auto;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: $uni-spacing-col-base;
    padding-right: v-bind("props.pr");
  }
}
</style>
