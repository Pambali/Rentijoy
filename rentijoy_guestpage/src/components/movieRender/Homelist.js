import React,{useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import {  fetchMovieList } from './Api/apis';
import './Home.css';



/****************  Function to render Body of a single movie in the home list & genre list*****************/
export function movieBodyRenderFunction(props){
    return(<Link to={`/movies/movie/${props.MovieId}`} key={props.MovieId}>
        <div  className="movie">
            <img className="movieImg" alt="img" src={props.Poster} ></img>
            <div className="movieBody" >
                <div className="movieName">{props.MovieName+" "} </div>
                <div className="movieYear">{props.Year}</div>
            </div>
        </div></Link>

    )
}
/****************  Function to render Lists in the conatainer of Homepage*****************/
export  function listRenderFunction(props){
    return(
        <div className="list" key={props.id} id={props.id} >
            <div className="title_and_button" key={`title_and_button${props.id}`}>
                <h3 className="listTitle">{props.listTitle}</h3>
                <a href={`/movies/${props.listRoute}`}className='a'>
                <button className="button" >More</button></a>
            </div>
            <div className="listBody" key="listBody">
            {
                props.listobject.map((p)=>movieBodyRenderFunction(p))
            } 
            </div>
        </div>
)
}
/****************  Function to Fetch the movie details for the Homepage lists *****************/
export default  function Home() {   
const fetching={ moviename: "Fetching", year: "Fetching",id:'1'}
const notFetched=[fetching,fetching,fetching,fetching,fetching]
const[action_home,setaction_home]=useState([notFetched])
const[kids_home,setkids_home]=useState([notFetched])
const[thriller_home,setthriller_home]=useState([notFetched])
const[crime_home,setcrime_home]=useState([notFetched])
const[comedy_home,setcomedy_home]=useState([notFetched])
const[scifi_home,setscifi_home]=useState([notFetched])
const listOfMovies=[
{"listTitle":"Action","listRoute":"action","listobject":action_home,"id":"list2"},
{"listTitle":"Kids","listRoute":"kids","listobject":kids_home,"id":"list3"},
{"listTitle":"Thriller","listRoute":"thriller","listobject":thriller_home,"id":"list4"},
{"listTitle":"Crime","listRoute":"crime","listobject":crime_home,"id":"list5"},
{"listTitle":"Comedy","listRoute":"comedy","listobject":comedy_home,"id":"list6"},
{"listTitle":"Sci-Fi","listRoute":"sci-fi","listobject":scifi_home,"id":"list7"}]
useEffect(()=>{
    fetchMovieList('action&limit=5')
    .then(resp => {setaction_home(resp.data);})
    .catch(e=>{console.log(e)});
    fetchMovieList('crime&limit=5')
    .then(resp => {setcrime_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('kids&limit=5')
    .then(resp => {setkids_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('thriller&limit=5')
    .then(resp => {setthriller_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('comedy&limit=5')
    .then(resp => {setcomedy_home(resp.data)})
    .catch(e=>{console.log(e)});
    fetchMovieList('sci-fi&limit=5')
    .then(resp => {setscifi_home(resp.data)})
    .catch(e=>{console.log(e)});   
},[])
    return (
        <div id="homeContainer" key={"homeContainer"}>
            {   
                listOfMovies.map((props)=>listRenderFunction(props))  
            }
        </div>
    )
}
