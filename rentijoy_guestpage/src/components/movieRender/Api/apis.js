
import axios from 'axios';
export  function fetchMovieList(listname) {
    return  axios.get(`http://localhost:4000/movie/findByGenre?genre=${listname}`)
}
export  function fetchMovieDetail(id) {
    return  axios.get(`http://localhost:4000/movie/findById?id=${id}`)
}
export  function fetchUserMovieDetail(id,mid) {
  
    return  axios.get(`http://localhost:4000/user/movies/mymovies?id=${id}&movieid=${mid}`)
}
