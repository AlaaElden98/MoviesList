import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, View, StyleSheet} from 'react-native';

import {MoviesList} from '../components/MoviesList';
import {getConfiguration} from '../api/api';
import {responsiveFontSize} from '../utils/helperFunctions';
const HomeScreen = () => {
  const [imageBaseUrl, setImageBaseUrl] = useState();

  // We only need to this once to get the api configuration, espicially the images_secure_url
  (async function getImageBaseUrl() {
    setImageBaseUrl(await getConfiguration());
  })();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Home</Text>
      </View>
      <View style={styles.divider} />
      <MoviesList imageBaseUrl={imageBaseUrl} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  topBar: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topBarText: {
    fontSize: responsiveFontSize(3),
  },
  divider: {
    backgroundColor: 'black',
    height: 0.5,
  },
});

export default HomeScreen;
