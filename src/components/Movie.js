import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {NoImage} from './NoImage';
import {responsiveFontSize, responsiveWidth} from '../utils/helperFunctions';

export function Movie(props) {
  const {movie, imageBaseUrl} = props;
  return (
    <View
      style={styles.container}
      accessibilityLabel={
        'Movie item includes poster,title,overview,and the release date of the movie'
      }>
      {imageBaseUrl ? (
        <Image
          source={{
            uri: imageBaseUrl + 'w500' + movie.poster_path,
          }}
          // Test this
          style={{
            width: responsiveWidth(30),
            height: responsiveWidth(65),
            borderRadius: 8,
          }}
          resizeMode="stretch"
          accessible={true}
          accessibilityLabel={`Poster of ${movie.title} movie`}
        />
      ) : (
        <NoImage />
      )}

      <View style={styles.textDataContainer}>
        <View style={styles.titleContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.title}
            accessibilityLabel={`Movie name: ${movie.title}`}>
            {movie.title}
          </Text>
        </View>
        <View style={styles.overViewContainer}>
          <Text
            numberOfLines={8}
            ellipsizeMode="tail"
            style={styles.overview}
            accessibilityLabel={`Movie overview: ${movie.overview}`}>
            {movie.overview}
          </Text>
        </View>
        <View style={styles.releaseDateContainer}>
          <Text
            style={styles.releaseDate}
            accessibilityLabel={`Release date : ${movie.release_date}`}>
            Release date : {movie.release_date}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0,
  },
  textDataContainer: {
    flex: 1,
  },
  overview: {fontSize: responsiveFontSize(2)},
  overViewContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  titleContainer: {
    alignItems: 'center',
    margin: 5,
  },
  releaseDateContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 5,
    padding: 5,
  },
  releaseDate: {
    fontSize: responsiveFontSize(2),
    color: 'grey',
    fontStyle: 'italic',
  },
});
