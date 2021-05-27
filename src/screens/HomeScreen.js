import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {MoviesList} from '../components/MoviesList';
import {getConfiguration} from '../api/api';

const HomeScreen = () => {
  const [imageBaseUrl, setImageBaseUrl] = useState();

  // We only need to this once to get the api configuration, espicially the images_secure_url
  (async function getImageBaseUrl() {
    setImageBaseUrl(await getConfiguration());
  })();

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <MoviesList imageBaseUrl={imageBaseUrl} />
    </SafeAreaView>
  );
};

export default HomeScreen;
