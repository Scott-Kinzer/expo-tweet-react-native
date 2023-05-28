import { FlatList, StyleSheet, View } from 'react-native';
import Tweet from '../../components/tweet/Tweet';
import tweets from '../../assets/data/tweets';
import { TweetType } from '../types';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }: { item: TweetType }) => (
          <Tweet key={item.id} tweet={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedScreen;
