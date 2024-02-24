import type { FriendItem, FriendsFn } from "@/typings/datas"

const friends: FriendsFn = () => {
  let arr: FriendItem[] = [];
  for (let i = 1; i <= 15; i++) {
    arr.push({
      id: i,
      imgUrl: "four.png",
      tip: 999,
      name: `雷电影${i}`,
      time: new Date(),
      news: "海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明",
    });
  }
  return arr;
}

export default {
  friends,
};
