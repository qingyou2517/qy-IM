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
    </view>
    <view class="add-friend-button">
      <u-button type="default" size="large" :customStyle="style1"
        >加为好友</u-button
      >
    </view>
    <view class="add-friend-msg">
      <view class="name">{{ userData.name }}</view>
      <textarea
        :value="myName + '请求添加好友~'"
        :maxlength="120"
        class="add-main"
      ></textarea>
    </view>
    <view class="btns">
      <view class="close">
        <u-button :customStyle="close_style">取消</u-button>
      </view>
      <view class="send">
        <u-button :customStyle="send_style">发送</u-button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, getCurrentInstance, onMounted } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import myTopBar from "@/components/myTopBar.vue";

let _this = getCurrentInstance();

// 按钮自定义样式
const style1 = reactive({
  color: "$uni-text-color",
  background: "#FFE431",
  fontSize: "32rpx",
  fontWeight: "400",
});
const close_style = reactive({
  width: "172rpx",
  height: "80rpx",
  background: "rgba(39,40,50,0.10)",
  borderRadius: "10rpx",
  fontSize: "32rpx",
});
const send_style = reactive({
  flex: "1",
  height: "80rpx",
  background: "#FFE431",
  borderRadius: "10rpx",
  fontSize: "32rpx",
});

// 用户数据
const userData = reactive({
  name: "",
  nickName: "小影",
  signature: "温柔要有，但不是妥协，在安静中，不慌不忙的坚强。",
});
const myName = ref("青游");

const goBack = () => {
  uni.navigateBack({ delta: 1 });
};

onLoad((e: AnyObject | undefined) => {
  const queryObj = JSON.parse(uni.getStorageSync("queryObj"));
  userData.name = queryObj.name;
});

// 获取节点信息
let getElementStyle = () => {
  const query = uni.createSelectorQuery().in(_this);
  query
    .select(".bg")
    .boundingClientRect((data) => {
      console.log("得到布局位置信息" + JSON.stringify(data));
      // console.log("节点离页面顶部的距离为" + data.top);
      // let newdata = JSON.parse(JSON.stringify(data));
      // yaoHei.value = yaoHei.value - newdata.height;
    })
    .exec();
};

onMounted(() => {
  getElementStyle();
});
</script>

<style lang="scss" scoped>
$bg-zIndex: -2;
$bg-img-zIndex: -1;
$avatar-zIndex: 10;
$gender-zIndex: 15;
$add-friend-zIndex: 90;
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
}

.add-friend-button {
  position: fixed;
  bottom: 76rpx;
  width: calc(100% - 64rpx);
}

// 发送添加好友请求相关
.add-friend-msg {
  position: fixed;
  bottom: 0rpx;
  width: 100%;
  height: 75%;
  background: #ffffff;
  border-radius: 40rpx 40rpx 0rpx 0rpx;
  box-sizing: border-box;
  padding: 0 56rpx;

  .name {
    padding-top: 168rpx;
    padding-bottom: 40rpx;
    height: 74rpx;
    font-size: 52rpx;
    color: #272832;
    letter-spacing: -0.89rpx;
    font-weight: 400;
  }
  .add-main {
    box-sizing: border-box;
    padding: 18rpx 22rpx;
    width: 100%;
    height: 40%;
    line-height: 44rpx;
    background: #f3f4f6;
    border-radius: 20rpx;
    font-size: 32rpx;
    color: #272832;
    letter-spacing: -0.55rpx;
    font-weight: 400;
  }
}
.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 94rpx 32rpx 0;
  position: fixed;
  bottom: 76rpx;
  width: 100%;
  .close {
    margin-right: 32rpx;
  }
  .send {
    flex: 1;
  }
}
</style>
