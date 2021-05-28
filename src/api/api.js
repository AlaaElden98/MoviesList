// The api key could be encrypted somehow, so no one else uses it
const api_key = 'acea91d2bff1c53e6604e4985b6989e2&p';

/**
 * See  https://developers.themoviedb.org/3/discover/movie-discover
 */
const movies_base_Url = 'http://api.themoviedb.org/3/discover/movie?api_key=';
export async function getMoviesList(page = 1, debug = false) {
  try {
    const response = await fetch(movies_base_Url + api_key + `&page=${page}`);
    const data = await (debug ? response.status : response.json());
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
export async function getConfiguration(debug) {
  try {
    const response = await fetch(configuration_base_url + api_key);
    if (debug) return response.status;
    const data = await response.json();
    const image_base_url = await data.images.secure_base_url;
    return image_base_url;
  } catch (err) {
    return err;
  }
}
