import { FlatList, StyleSheet, View } from 'react-native';
import Tweet from '../../components/tweet/Tweet';
import tweets from '../../assets/data/tweets';
import { TweetType } from '../types';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }: { item: TweetType }) => (
          <Tweet key={item.id} tweet={item} />
        )}
      />

      <Link href="new.tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.addTweetButton}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  addTweetButton: {
    alignItems: 'center',
    backgroundColor: '#1c9bf0',
    borderRadius: 25,
    bottom: 15,
    height: 50,
    justifyContent: 'center',
    lineHeight: 50,
    overflow: 'hidden',
    position: 'absolute',
    right: 15,
    textAlign: 'center',
    width: 50,
  },
  container: {
    flex: 1,
  },
});

export default FeedScreen;
