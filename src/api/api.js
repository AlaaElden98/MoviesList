const api_key = 'acea91d2bff1c53e6604e4985b6989e2&p';

/**
 * See  https://developers.themoviedb.org/3/discover/movie-discover
 */
const movies_base_Url = 'http://api.themoviedb.org/3/discover/movie?api_key=';
export async function getMoviesList(page = 1) {
  try {
    const response = await fetch(movies_base_Url + api_key + `&page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

/**
 * See  https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
const configuration_base_url =
  'https://api.themoviedb.org/3/configuration?api_key=';
export async function getConfiguration() {
  try {
    const response = await fetch(configuration_base_url + api_key);
    const response_json = await response.json();
    const image_base_url = await response_json.images.secure_base_url;
    return image_base_url;
  } catch (err) {
    console.log(err);
    return err;
  }
}
