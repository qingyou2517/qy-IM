declare module "@/typings/datas" {
  export interface FriendItem {
    id: number;
    imgUrl: string;
    tip: number;
    name: string;
    email: string,
    time: Date;
    news: string;
    friendSign?: number
  }
  export interface FriendsFn {
    (): FriendItem[]
  }
}


