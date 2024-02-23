declare module "@/typings/datas" {
  export interface FriendItem {
    id: number;
    imgUrl: string;
    tip: number;
    name: string;
    time: Date;
    news: string;
  }
  export interface FriendsFn {
    (): FriendItem[]
  }
}


