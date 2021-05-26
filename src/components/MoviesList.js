import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Movie} from './Movie';
import {getMoviesList} from '../api/api';

export function MoviesList() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState();
  const [movies, setMovies] = useState([]);

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
    console.log('EndReacshed');
    getMoviesData(page < totalPages ? page + 1 : page);
    console.log(page);
    console.log(totalPages);
  };
  const renderItem = ({item}) => {
    return <Movie movie={item} />;
  };

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0}
      onEndReached={onEndReached}
    />
  );
}
