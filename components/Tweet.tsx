import { View, Image, Text, StyleSheet } from 'react-native';
import { TweetType } from '../app/types';

type Props = {
  tweet: TweetType;
};

const Tweet = ({ tweet: { content, image, user } }: Props) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: image,
      }}
      style={styles.userImage}
    />
    <View style={styles.mainContainer}>
      <Text style={styles.name}>{user.name}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.content}>
        {content}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0.4,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    height: 80,
    padding: 10,
  },
  content: {
    color: 'grey',
    lineHeight: 20,
    marginTop: 5,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: 'grey',
    fontWeight: 'bold',
  },
  userImage: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});

export default Tweet;
