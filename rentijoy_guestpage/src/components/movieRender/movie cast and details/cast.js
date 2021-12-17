import "../assests/cast.css"
export default function MovieCast(props){
  return(
        <div className="movie-cast-and-info">
        <p className="plot">{props.movie.Description}</p>
        <hr/>
         <p>CAST AND CREDITS</p>
        <div className="cast-detail">
          <div className="block">
            <p>Actors</p>
            <div><p>{props.cast.Actors}</p></div>
          </div>
          <div className="block">
            <p>Producer</p>
            <div><p>{props.cast.Producers}</p></div>
          </div>
          <div className="block">
            <p>Director</p>
            <div><p>{props.cast.Director}</p></div>
          </div>
          <div className="block">
            <p>Writer</p>
            <div><p>{props.cast.Writer}</p></div>
          </div>
        </div> 
        <hr/>
        <p>ADDITIONAL INFORMATION</p>
        <div className="add-info">
          <div className="block">
            <p>Language</p>
            <p>{props.movie.Language}</p>
          </div>
          <div className="block">
            <p>Rating</p>
            <p>{props.movie.Rating}</p>
          </div>
          <div className="block">
            <p>Released on</p>
            <p>{props.movie.Released}</p>
          </div>
        </div>
      </div>
    )
}