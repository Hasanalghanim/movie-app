const requests = {
  topMovies: `movie/popular?api_key=ba5e7823bbf4d4c2d17adf631af2bffa`,
  actionMovies: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
  TopRated: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`,
};
export default requests;
