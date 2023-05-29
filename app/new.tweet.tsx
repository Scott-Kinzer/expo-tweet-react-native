import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import tweets from '../assets/data/tweets';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

const user = tweets[0];

export default function NewTweetScreen() {
  const [text, setText] = useState('');
  const router = useRouter();

  const onTweetPress = () => {
    console.log('Works');

    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 20 }}>
            <Text>Cancel</Text>
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.image} source={{ uri: user.image }} />
          <TextInput
            placeholder="new tweet"
            multiline
            numberOfLines={5}
            maxLength={200}
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              borderRadius: 10,
              padding: 10,
            }}
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1c9bf0',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
    width: 50,
  },
  inputContainer: {
    flexDirection: 'row',
  },
});
