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
    <view class="main">
      <!-- 好友请求 -->
      <view class="apply">
        <view class="list-item">
          <view class="list-item-l">
            <view class="tip">9</view>
            <image
              src="../../static/images/index/apply.png"
              mode="scaleToFill"
            />
          </view>
          <view class="list-item-r">
            <view class="top">
              <text class="name">好友请求</text>
              <text class="time">上午7:25</text>
            </view>
            <view class="news">茫茫人海，相聚即是缘分</view>
          </view>
        </view>
      </view>
      <!-- 好友聊天列表 -->
      <view class="friends-list">
        <view class="list-item" v-for="item in friendsList" :key="item.id">
          <view class="list-item-l">
            <view class="tip" v-if="item.tip > 0">{{
              item.tip >= 100 ? "99+" : item.tip
            }}</view>
            <image
              :src="`../../static/images/img/${item.imgUrl}`"
              mode="scaleToFill"
            />
          </view>
          <view class="list-item-r">
            <view class="top">
              <text class="name">{{ item.name }}</text>
              <text class="time">{{ formatTime(item.time) }}</text>
            </view>
            <view class="news">{{ item.news }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import datas from "@/commons/ts/datas";
import myFun from "@/commons/ts/myFun";
import type { FriendItem } from "@/typings/datas";

const friendsList = ref<FriendItem[]>([]);
const { formatTime } = myFun;

// 获取朋友列表消息
const getFriends = () => {
  friendsList.value = datas.friends();
};

onLoad(() => getFriends());
</script>

<style lang="scss" scoped>
$tb-zIndex: 10;
$tip-zIndex: 5;
$tip-lh: 36rpx;
$tip-pd-x: 8rpx;
$name-lh: 50rpx;
$msg-lh: 40rpx;

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: $uni-bg-color;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding-top: var(--status-bar-height);
  .top-bar-left {
    flex: 1;
    margin-left: 18rpx;
    padding-left: $uni-spacing-col-base;
    image {
      width: 68rpx;
      height: 68rpx;
      border-radius: 16rpx;
    }
  }
  .top-bar-center {
    flex: 1;
    text-align: center;
    image {
      width: 88rpx;
      height: 42rpx;
    }
  }
  .top-bar-right {
    // margin-left: auto;
    flex: 1;
    text-align: right;
    padding-right: $uni-spacing-col-base;
    image {
      width: 52rpx;
      height: 52rpx;
      margin: 0 18rpx;
    }
  }
}

.main {
  padding-top: 120rpx;
}
.list-item {
  display: flex;
  align-items: center;
  height: 96rpx;
  padding: 16rpx $uni-spacing-row-base;
  &:active {
    background-color: $uni-bg-color-grey;
  }

  .list-item-l {
    position: relative;
    // width: 100%;
    .tip {
      position: absolute;
      top: -6rpx;
      left: 68rpx;
      // 默认是content-box，所以min-width设置的是内容区宽度，增加padding会起到内容区不变，盒子向外扩张的效果
      // 希望圆形、圆角矩形共存：只需设置 (min-width + 左右padding) = height 即可
      min-width: calc($tip-lh - $tip-pd-x * 2);
      height: $tip-lh;
      padding: 0 $tip-pd-x;
      background: $uni-color-warning;
      border-radius: calc($tip-lh / 2);
      font-size: 20rpx;
      color: $uni-text-color-inverse;
      line-height: $tip-lh;
      text-align: center;
      z-index: $tip-zIndex;
    }
    image {
      width: 96rpx;
      height: 96rpx;
      border-radius: 24rpx;
      background-color: $uni-color-primary;
    }
  }
  .list-item-r {
    flex: 1;
    padding-left: $uni-spacing-row-base;
    .top {
      display: flex;
      align-items: center;
      height: $name-lh;
      margin-bottom: 2rpx;

      .name {
        flex: 1;
        font-size: 36rpx;
        color: $uni-text-color;
        font-weight: 400;
        line-height: $name-lh;
      }
      .time {
        margin-left: auto;
        font-size: $uni-font-size-sm;
        color: $uni-text-color-disable;
        line-height: $name-lh;
      }
    }
    .news {
      font-size: $uni-font-size-base;
      color: $uni-text-color-grey;
      line-height: $msg-lh;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
