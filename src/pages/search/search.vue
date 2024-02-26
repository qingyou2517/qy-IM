<template>
  <view class="content">
    <view class="top-bar">
      <u-input
        class="input"
        placeholder="搜索用户/群组"
        suffixIcon="search"
        suffixIconStyle="color: #909399"
        clearable
        @change="handleSearch"
      ></u-input>
      <view class="cancel" @click="goBack">取消</view>
    </view>
    <view class="main">
      <view class="users" v-if="searchList.length > 0">
        <view class="title">用户</view>
        <view class="list">
          <view class="list-item" v-for="item in searchList" :key="item.id">
            <image
              :src="`../../static/images/img/${item.imgUrl}`"
              mode="scaleToFill"
              @click="goUserHome(item.name)"
            />
            <view class="name" v-html="item.newName"></view>
            <u-button
              shape="circle"
              size="mini"
              color="#FFE431"
              :customStyle="style1"
              v-if="item.friendSign === 1"
              >发消息</u-button
            >
            <u-button
              shape="circle"
              size="mini"
              type="primary"
              plain
              :customStyle="style2"
              v-if="item.friendSign === 0"
              >加好友</u-button
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
import { reactive, ref, watch } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import datas from "@/commons/ts/datas";
import type { FriendItem } from "@/typings/datas";

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
// 展示按钮
const isShowSend = ref(false);
const isShowAdd = ref(false);

// 显示匹配搜索内容的用户列表
let searchList = reactive<(FriendItem & { newName: string })[]>([]);
// 搜索内容是否能与数据库匹配
const canMatch = ref(false);

// 寻找与关键词匹配的用户
const searchUser = (value: string) => {
  const usersList = datas.friends();

  // 每次调用时，先重置canSearch、searchList[]
  canMatch.value = false;
  searchList.length = 0;

  if (value.length > 0) {
    usersList.forEach((item: FriendItem) => {
      if (item.name.includes(value)) {
        canMatch.value = true;
        isFriend(item); // 判断是否为好友
        const newName = item.name.replace(
          value,
          "<span style='color:#4AAAEF;'>" + value + "</span>"
        );
        searchList.push({ ...item, newName });
      }
    });
  }
  if (!canMatch.value) {
    searchList.length = 0;
  }
};

// 寻找与关键词匹配的群组
const searchGroup = (value: string) => {};

const handleSearch = (value: string) => {
  searchUser(value);
};

// 判断该用户是否为好友: friendSign 为 0 表示否，为 1 表示是
const friendSign = ref(0);
function isFriend(item: FriendItem) {
  friendSign.value = 0;
  const friendsList = datas.isFriend(); // 数据库保存的好友表
  friendsList.forEach((obj) => {
    if (obj.friendId === item.id) {
      friendSign.value = 1;
    }
  });
  item.friendSign = friendSign.value;
}

const goBack = () => {
  uni.navigateTo({ url: "/pages/index/index" });
};
const goUserHome = (name: string) => {
  // 通过 storage 传递页面 url 参数
  uni.setStorageSync(
    "queryObj",
    JSON.stringify({
      name,
      from: "search",
    })
  );
  uni.navigateTo({ url: "/pages/userhome/userhome" });
};
</script>

<style lang="scss" scoped>
$tb-zIndex: 10;

.content {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: flex-start;
  padding-top: var(--status-bar-height);
  padding-bottom: env(safe-area-inset-bottom);
  height: 100vh;
}

.top-bar {
  padding-top: var(--status-bar-height);
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
