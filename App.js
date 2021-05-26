import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MoviesList} from './src/components/MoviesList';
import {movies} from './src/constants/mockData';
const App = () => {
  return (
    <SafeAreaView>
      <Text>sdasd</Text>
      <MoviesList movies={movies} />
    </SafeAreaView>
  );
};

export default App;
