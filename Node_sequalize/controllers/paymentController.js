const {payment, sequelize,userMovies,movie}=require("../models");
const { QueryTypes } = require('sequelize');
const Razorpay = require("razorpay");

const key_id = "rzp_test_11uZlqQcw3DCmb";
const key_secret = "FpolAAE7GM8PgMZw4K02dhUG";
var instance = new Razorpay({
    key_id,
    key_secret
})


const orderMovie=async  (req, resp) => {
    var query = require('url').parse(req.url,true).query;
    try{
    const productId = query.id;
    const type=query.type;
    console.log(type)
    var product =await movie.findOne({where :{MovieId:productId}})
    var amount=0;
    if(type==="Rent")
     amount = product.RentAmt * 100;
     else
     amount= product.BuyAmt*100;
    const currency = 'INR';
    const notes = {Movie_name:product.MovieName};

    instance.orders.create({amount, currency, notes}, (error, order) => {
        if(error){
            return resp.status(500).json(error);
        }
        order.movieId = product.MovieId
        return  resp.status(200).json(order);
    });}
    catch(e){
        return resp.status(500).json("message"+e)
    }
}


const moviePayment= async(req,res)=>
{
    var {userId,MovieId,movieRentType}=req.body;
    console.log(userId)
    var paymentStatus=true;
    
    try{
        var rentexpdate=await sequelize.query("SELECT DATE_ADD( NOW(), INTERVAL 30 DAY) as rentdate; ",{
            type: QueryTypes.SELECT 
          })
       var userpayment= await payment.create({userId,MovieId,paymentStatus,movieRentType})
       if(userpayment.paymentStatus===true){
           let userMovieInfo={
               userId:userId,
               MovieId:MovieId,
               RentStatus:(movieRentType==="Rent")?true:false,
               RentExpireDate:rentexpdate[0].rentdate,
               BuyedStatus:(movieRentType==="Buy")?true:false
           }
         var usermovie=await userMovies.create(userMovieInfo)
       }
       return res.status(200).json({userpayment,usermovie})
    }catch(e){
        return res.status(500).json("message"+e)
    }
}
 
module.exports={
    moviePayment,orderMovie
}
