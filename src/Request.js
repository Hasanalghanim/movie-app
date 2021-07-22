const requests = {
  popular: `movie/popular?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&sort_by=popularity.desc`,
  comedy: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&include_adult=false&include_video=false&page=1&with_genres=35`,
  actionMovies: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28`,
  TopRated: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&include_adult=false&include_video=false&page=1&with_genres=12`,
  Trending: `trending/movie/week?api_key=ba5e7823bbf4d4c2d17adf631af2bffa`,
  Anime: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&include_adult=false&include_video=false&page=1&with_genres=210024`,
  Romantic: `discover/movie?api_key=ba5e7823bbf4d4c2d17adf631af2bffa&language=en-US&include_adult=false&include_video=false&page=1&with_genres=10749`,
};
export default requests;
