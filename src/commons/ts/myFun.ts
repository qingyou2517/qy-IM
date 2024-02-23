import dayjs from "dayjs"

// 首页时间转换
function formatTime(oldDate: Date) {
  // 过去时间
  let old = dayjs(new Date(oldDate));
  let h: string | number = old.hour();
  let m: string | number = old.minute();
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  let s: string | number = old.second();
  let Y: string | number = old.year();
  let M: string | number = old.month();
  let D: string | number = old.date();
  // 当前时间
  let now = dayjs()
  let nh: string | number = now.hour();
  let nm: string | number = now.minute();
  let ns: string | number = now.second();
  let nY: string | number = now.year();
  let nM: string | number = now.month();
  let nD: string | number = now.date();

  // 当天
  if (old.isSame(now, "day")) {
    if (Number(h) >= 0 && Number(h) < 6) {
      return `凌晨 ${h}:${m}`;
    } else if (Number(h) < 12) {
      return `上午 ${h}:${m}`;
    } else if (Number(h) < 18) {
      return `下午 ${h}:${m}`;
    } else {
      return `晚上 ${h}:${m}`;
    }
  }

  // 昨天
  let yesterday = now.subtract(1, "day")
  if (old.isSame(yesterday, "day")) {
    return `昨天 ${h}:${m}`;
  }

  // 超过2天
  return old.format("YYYY/MM/DD")
}

export default {
  formatTime
};
