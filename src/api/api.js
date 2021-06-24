import {API_KEY} from "@env"

const base_url = 'http://api.themoviedb.org/3/';
const api_key = 'api_key='

/**
 * See  https://developers.themoviedb.org/3/discover/movie-discover
 */
const movies_path = 'discover/movie?'
export async function getMoviesList(page) {
  try {
    const response = await fetch(base_url + movies_path + api_key + API_KEY + `&page=${page}`);
    const data = await response.json();
    console.log(API_KEY);
    if (!response.ok) return (data.status_message)
    return data;
  } catch (error) {
    return error;
  }
}

/**
 * See  https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
const configuration_path = 'configuration?';
export async function getConfiguration() {
  try {
    const response = await fetch(base_url + configuration_path + api_key + API_KEY);
    const data = await response.json();
    if(!response.ok)return (data.status_message)
    const image_base_url = await data.images.secure_base_url;
    return image_base_url;
  } catch (err) {
    return err;
  }
}
