const {getUserMovies} =require("../controllers/usermoviesController")

const mymovierouter = require('express').Router()

mymovierouter.get("/mymovies",getUserMovies)

module.exports=mymovierouter;