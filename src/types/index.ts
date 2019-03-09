import {string} from 'prop-types';

export interface ITheme {
  colors: {
    mainBackground: string;
    altBackground: string;
    accent: string;
    mainText: string;
    altText: string;
  };
}

export interface IShortUser {
  _id: string;
  name: string;
  username: string;
  isVerified: boolean;
  photoURL: string;
}

export interface ILike extends IShortUser {
  _id: string;
  userId: string;
}

export interface IComment extends IShortUser {
  _id: string;
  tweetId: string;
  fromUserId: string;
  toUserId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITweet {
  _id: string;
  body: string;
  user: IShortUser;
  createdAt: string;
  updatedAt: string;
  image?: string;
  link: string;
  likes: Array<ILike> | number;
  retweets: Array<IRetweet> | number;
  comments: Array<IComment> | number;
  hashtags: Array<IHashtag> | Array<string>;
}

export interface IRetweet extends ITweet {
  _id: string;
  userId: string;
  tweetId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IHashtag {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  photoURL: string;
  username: string;
  uid: string;
  email: string;
}

export interface IStore {
  tweets: Array<ITweet>;
  hashtags: Array<IHashtag>;
  user: IUser;
}
