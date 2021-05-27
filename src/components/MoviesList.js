import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Movie} from './Movie';
import {getMoviesList} from '../api/api';

export function MoviesList(props) {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const {imageBaseUrl} = props;

  const getMoviesData = async page => {
    const data = await getMoviesList(page);
    setMovies([...movies, ...data.results]);
    setPage(data.page);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const onEndReached = () => {
    getMoviesData(page < totalPages ? page + 1 : page);
  };

  const renderItem = ({item}) => {
    return <Movie movie={item} imageBaseUrl={imageBaseUrl} />;
  };

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
    />
  );
}
