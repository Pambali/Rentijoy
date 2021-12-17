import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { movieBodyRenderFunction } from './Homelist'
import { fetchMovieList,fetchMovieDetail,fetchUserMovieDetail } from './Api/apis'
import MovieCast from './movie cast and details/cast'
import MovieBasic from './movie cast and details/basic'
import './Home.css'

/****************  Function to render details of cast inside the Single movie detail*****************/

/****************  Function to render Single Movie detail with buy rent option*****************/
export function SingleMovie(){
    let path=useParams();
    let movieID=path.movie;
    let userdetail = localStorage.getItem('user_mail')
    userdetail = JSON.parse(userdetail)
    const userid=userdetail.users.userId;
    const[movie,setMovie]=useState([{}]);
    const [cast,setcast]=useState([])
    const [userm,setUserm]=useState(false)
    useEffect(()=>{
    fetchUserMovieDetail(userid,movieID)
    .then((res)=>{setUserm(res.data.BuyedStatus||res.data.RentStatus)})
    .catch(e=>console.log(e))
    fetchMovieDetail(movieID)
    .then(res=>{
      setMovie(res.data); 
      setcast(res.data.movieCast);
    })
    .catch(e=>{console.log(e)})
    },[movieID,userid])
    return(
        <div className="movie-detailed-page">
        <MovieBasic movie={movie} userm={userm}/>
        <MovieCast movie={movie} cast={cast}/>
      </div>
        )
}
/****************  Function to render list of movies Grouped by genre*****************/
export default function MoviesByGenre() {
let path= useParams();
let genre=path.genre;
const[list,setList]=useState([])
useEffect(()=>{
    fetchMovieList(genre)
    .then(resp =>setList(resp.data))
    .catch(e=>console.log(e));
},[genre])
    return (
        <div>
            <h1 className="listtitle">{`${genre[0].toUpperCase()+genre.slice(1,genre.length)} Movies`}</h1>
            <div className="listBody">
            {
                list.map((obj)=>{return(movieBodyRenderFunction (obj))})
            }
            </div>
        </div>
    )
}
