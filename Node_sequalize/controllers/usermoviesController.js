const {movie,movieCast,user,userMovies} =require("../models");
const getUserMovies = async(req,res)=>{
    var query = require('url').parse(req.url,true).query;
    var id=query.id;
    var movieId=query.movieid;
    var movies=[];
    //var movieslist=[]
    try{
       const mymovies=await userMovies.findAll({
            where:{userId:id,MovieId:movieId},   
        }).then(res=>{
           movies=res;console.log(res);
        })
        //  movies=JSON.stringify(movies)
        //  console.log(movies)
        // movies=JSON.parse(movies)
        // console.log(movies)
        // movies.map(async m=>{
        // var  mymoviesList=await movie.findAll({
        //     where:{MovieId:m.movieId},
        //     include: [{model: movieCast,as:"movieCast"}]
        // })
        // movieslist.push(mymoviesList)
    //})
    if(movies){
        res.status(200).json(movies[0]);}
    else {res.status(200).json({"BuyedStatus":false,"RentStatus":false})}
    }catch(e){
        console.log(e);
    }
}
module.exports={getUserMovies};