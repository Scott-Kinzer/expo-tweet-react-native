import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { TweetType } from '../../app/types';
import { Entypo } from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';

type Props = {
  tweet: TweetType;
};

const Tweet = ({
  tweet: {
    id,
    content,
    image: tweetImage,
    numberOfComments,
    numberOfLikes,
    impressions,
    numberOfRetweets,
    user: { image, name, username },
  },
}: Props) => (
  <Link href={`/tweet/${id}`} asChild>
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.userImage}
      />
      <View style={styles.mainContainer}>
        <View style={styles.name_container}>
          <View style={styles.name_sub_container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>@{username}</Text>
            <Text style={styles.name}>•2h</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color="grey" />
        </View>

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.content}>
          {content}
        </Text>

        {!!tweetImage && (
          <Image source={{ uri: tweetImage }} style={styles.tweetImage} />
        )}

        <View style={styles.footer}>
          <IconButton icon="comment" text={numberOfComments.toString()} />
          <IconButton icon="retweet" text={numberOfRetweets.toString()} />
          <IconButton icon="heart" text={numberOfLikes.toString()} />
          <IconButton icon="chart" text={impressions?.toString() || '0'} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0.4,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    padding: 10,
  },
  content: {
    color: 'grey',
    lineHeight: 20,
    marginTop: 5,
  },
  footer: {
    columnGap: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  name_container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name_sub_container: {
    columnGap: 5,
    flexDirection: 'row',
  },
  tweetImage: {
    aspectRatio: 16 / 9,
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
  },
  userImage: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});

export default Tweet;
