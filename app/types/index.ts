export type TweetType = {
  id: string;
  user: UserType;
  content: string;
  image?: string;
};

type UserType = {
  name: string;
};
