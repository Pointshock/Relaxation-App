import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';

// Background pic
const backGImage = {
  uri: 'http://www.availableideas.com/wp-content/uploads/2016/02/Golden-Summer-Field-Sunset-iPhone-6-Wallpaper.jpg',
};
// Relaxing GIF
const relaxGIF = {
  uri: 'https://cdn.doyou.com/articles/6a-1575918606525.gif=w1080',
};

// A funciton that plays a sound
function playBackgroundMusic() {
  (async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      const sound = new Audio.Sound();
      await sound.loadAsync(require('./assets/background.mp3'));
      await sound.setIsLoopingAsync(true);
      await sound.playAsync(true);
    } catch (error) {
      console.error(error);
    }
  })();
}

// This is the main function that will return the view of the app
export default function App() {
  playBackgroundMusic();
  return (
    <View style={styles.container}>
      <ImageBackground source={backGImage} style={styles.BackGimage}>
        <Text style={styles.paragraph}>
          {'\n'}Breathe and Relax{'\n\n\n\n\n\n\n\n\n'}
        </Text>
        <Image source={relaxGIF} style={styles.image1}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
    lineHeight: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  BackGimage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  image1: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
