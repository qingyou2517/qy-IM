import type { FriendItem, FriendsFn } from "@/typings/datas"

// 用户表
const friends: FriendsFn = () => {
  let arr: FriendItem[] = [];
  for (let i = 1; i <= 15; i++) {
    arr.push({
      id: i,
      imgUrl: "four.png",
      tip: 999,
      name: `雷电影${i}`,
      email: `rs${i}@qq.com`,
      time: new Date(),
      news: "海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明，海压竹枝低复举，风吹山角晦还明",
    });
  }
  return arr;
}

// 好友关系表: userId 即当前账号的id，friendId 即当前账号的好友id、也对应上面arr数组项id
const isFriend = () => {
  let list = [{
    userId: 1,
    friendId: 2
  }, {
    userId: 1,
    friendId: 4
  }, {
    userId: 1,
    friendId: 6
  }]
  return list
}

export default {
  friends,
  isFriend,
};
