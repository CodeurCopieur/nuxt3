import axios from 'axios';

export default () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;
  const apiKey = config.public.currencyKey;

  const showDate = (date) => {
    const str = date;
    const res = new Date(str);
    return res.toLocaleDateString()
  };
  const showYear = (date) => {
    const str = date;
    const res = new Date(str);
    return res.getFullYear()
  };

  const percent = (note)=> {
    var result = note/10*100;

    return parseInt(result)
  };

  //Movies 
    // Get Now Playing : https://api.themoviedb.org/3/movie/now_playing?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Popular : https://api.themoviedb.org/3/movie/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Top Rated : https://api.themoviedb.org/3/movie/top_rated?api_key={CURRENCY_API_KEY}&page=${page}



    // Movie Discover : https://api.themoviedb.org/3/discover/movie?api_key={CURRENCY_API_KEY}&sort_by=popularity.desc&page=${page}
    const req = async(get, page, option) => {
      if(page) {
        // return useFetch(`${baseUrl}${get}?api_key=${apiKey}${page}`, { baseURL: baseUrl })

        const response = await axios.get(`${baseUrl}${get}?api_key=${apiKey}&sort_by=popularity.desc${page}`)
        const movies = response.data.results;
        return movies
      } else {
        // return useFetch(`${baseUrl}${get}?api_key=${apiKey}`, { baseURL: baseUrl })
        const response = await axios.get(`${baseUrl}${get}?api_key=${apiKey}&sort_by=popularity.desc`)
        const movies = response.data.results;
        return movies
      }
    }

    const getMovies = async(get, page=1) => {
      let query = `&page=`;

      if (page) {
        query +=`${page}`;
      }
       return req(`${get}`, query);
    }

    // Get Details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={CURRENCY_API_KEY}

    const getDetails = async(getId) => {
      if (getId) {
        const response = await axios.get(`${baseUrl}${getId}?api_key=${apiKey}`)
        return response.data
      }
    }

    // Get All Genres: https://api.themoviedb.org/3/genre/movie/list?api_key={CURRENCY_API_KEY}

    const getGenres = async(type) => {
      const response = await axios.get(`${baseUrl}genre/${type}/list?api_key=${apiKey}`)
      return response
    };

    // Get Movies By Genres: https://api.themoviedb.org/3/discover/movie?api_key={CURRENCY_API_KEY}&sort_by=popularity.desc&page=1&with_genres={CURRENCY_GENRE}

    const reqDiscover = async(get, page, genre) => {
      if(page) {
        const response = await axios.get(`${baseUrl}${get}?api_key=${apiKey}&sort_by=popularity.desc${page}${genre}`)
        const movies = response.data.results;
        return movies
      }
    }

    const getMoviesD = async(get, page, genre) => {
      let query = `&page=`;
      let query2 = `&with_genres=`;

      if (page) {
        query +=`${page}`;
      }
      if (genre !== null) {
        query2 += `${genre}`;
      }
       return reqDiscover(`${get}`, query, query2);
    }

    // Search Movie or Person or Tv
    const search = async(keyword, value, page) => {
      if(value) {
        const response = await axios.get(`${baseUrl}search/${keyword}?api_key=${apiKey}&query=${value}&page=${page}`)
        const movies = response.data.results;
        const totalResults = response.data.total_results
        return movies
      }
    }

      return {
        showDate,
        showYear,
        percent,
        req,
        getMovies,
        getDetails,
        getGenres,
        getMoviesD,
        search
      };

  // Series

    // Get Popular : https://api.themoviedb.org/3/tv/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Details : https://api.themoviedb.org/3/tv/{tv_id}?api_key={CURRENCY_API_KEY}

    // Get Top Rated : https://api.themoviedb.org/3/tv/top_rated?api_key={CURRENCY_API_KEY}&page=${page}

  // Get All Genres

    // Get TV List : https://api.themoviedb.org/3/genre/tv/list?api_key={CURRENCY_API_KEY}

  // Get a Single Genres
}