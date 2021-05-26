import React from 'react';
import {FlatList} from 'react-native';
import {Movie} from './Movie';

export function MoviesList(props) {
  const renderItem = ({item}) => {
    return <Movie movie={item} />;
  };
  return (
    <FlatList
      data={props.movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
