import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    video: {
        maxWidth: '100%',
        height: 210,
    },
    container: {
        marginVertical: 10
    }
}); 