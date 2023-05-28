import React from 'react';
import { View } from 'react-native';
import Tweet from '../../components/tweet/Tweet';
import tweets from '../../assets/data/tweets';
import { useSearchParams } from 'expo-router';

const TweetScreen = () => {
  const params = useSearchParams();
  const tweet = tweets.find((tweet) => tweet.id === params.id);

  return <View>{tweet && <Tweet tweet={tweet} />}</View>;
};

export default TweetScreen;
