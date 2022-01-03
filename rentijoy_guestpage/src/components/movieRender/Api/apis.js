
import axios from 'axios';
export async function fetchMovieList(listname) {
    return await axios.get(`http://localhost:4000/movie/findByGenre?genre=${listname}`)
}
export async function fetchMovieDetail(id) {
    return await axios.get(`http://localhost:4000/movie/findById?id=${id}`)
}
export  function fetchUserMovieDetail(id,mid) {
  
    return  axios.get(`http://localhost:4000/user/movies/mymovies?id=${id}&movieid=${mid}`)
}
