import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import {MoviesList} from '../components/MoviesList';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <MoviesList />
    </SafeAreaView>
  );
};

export default HomeScreen;
