
import axios from 'axios';
export async function fetchMovieList(listname) {
    return await axios.get(`http://localhost:4000/movie/findByGenre?genre=${listname}`)
}
export async function fetchMovieDetail(id) {
    return await axios.get(`http://localhost:4000/movie/findById?id=${id}`)
}
export async function fetchUserMovieDetail(id,mid) {
    let fumd=await axios.get(`http://localhost:4000/user/movies/mymovies?id=${id}&movieid=${mid}`)
    return fumd
}
