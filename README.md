

# Movies List

Movies list is a mobile application that display a list of movies from [TMDB](https://www.themoviedb.org/)
developed with [react-native](https://reactnative.dev/).  
This is a Task that's a part of instabug's internship hiring proccess.

<img src="https://user-images.githubusercontent.com/34111697/119987154-00ee1e80-bfc5-11eb-8073-78ee7664b5fa.gif" width="200"/>


## Getting started

### Setup the development environment

Follow the instructions from react native [docs](https://reactnative.dev/docs/environment-setup).

### installation

- Clone this repo or download the ZIP file.
- Open the terminal inside the project root.
- Run the following commands :
  - `npm install` to download the dependencies and generates node_module.
  - `npm start` to starts Metro Bundler.
  - `npm run android` to run on android device/emulator.
  - `npm run ios` to run on ios device/emulator.

### Run tests

- `npm test`

## API

[TMDB API](https://developers.themoviedb.org/3/discover/movie-discover).

## More about the app

The app main function is to displays a list of movies fetched through a web API.

- The app’s initial (and only) screen should list movies fetched from the TMDB API.
- For each movie, the following should be displayed: title, overview, date, poster.
- List should lazily load more data as you scroll down. A loading indicator should be displayed at the bottom
  of the list when new data is still loading.
- Following the react native [Accessibility](https://reactnative.dev/docs/accessibility) to make the app usable by the people with disabilities.
