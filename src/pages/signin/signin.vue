<template>
  <view>
    <u-form labelPosition="left" ref="form1">
      <u-form-item prop="userInfo.name" borderBottom ref="item1">
        <u-input borderBottom></u-input>
      </u-form-item>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {});
</script>

<style lang="scss" scoped></style>
