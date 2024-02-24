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
        <text class="register">注册</text>
      </template>
    </myTopBar>
    <!-- <view class="main">
      <u-form labelPosition="left" ref="form1">
        <u-form-item prop="userInfo.name" borderBottom ref="item1">
          <u-input borderBottom></u-input>
        </u-form-item>
      </u-form>
    </view> -->
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import myTopBar from "@/components/myTopBar.vue";
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
