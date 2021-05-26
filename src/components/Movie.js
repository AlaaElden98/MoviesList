import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

import {getConfiguration} from '../api/api';

export function Movie(props) {
  const {movie} = props;
  const [image_base_url, setImageBaseUrl] = useState('');

  const getImageUrl = async () => {
    const imageUrl = await getConfiguration();
    setImageBaseUrl(imageUrl);
  };

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <View>
      <Image
        //TODO: Handle no image case
        source={{
          uri: image_base_url + 'w500' + movie.poster_path,
        }}
        style={{width: 100, height: 100}}
      />
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
      <Text>{movie.release_date}</Text>
    </View>
  );
}
