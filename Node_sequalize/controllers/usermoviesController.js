const {movie,movieCast,user,userMovies} =require("../models");
const getUserMovies = async(req,res)=>{
    var query = require('url').parse(req.url,true).query;
    var id=query.id;
    var movieId=query.movieid;
   
    try{
       const mymovies=await userMovies.findAll({
            where:{userId:id,MovieId:movieId},   
        }).then(res=>{
           console.log(res);
        })
      
       if(mymovies){
        res.status(200).json(mymovies[0]);}
    else {res.status(200).json({"BuyedStatus":false,"RentStatus":false})}
    }catch(e){
        console.log(e);
    }
}
module.exports={getUserMovies};
