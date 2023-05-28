export type TweetType = {
  id: string;
  user: UserType;
  image?: string;
  createdAt: string;
  content: string;
  numberOfComments: number;
  numberOfRetweets: number;
  numberOfLikes: number;
  impressions?: number;
};

type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
};
