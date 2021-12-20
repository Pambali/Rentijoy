const express=require('express')
const cors=require('cors')
const {sequelize}=require('./models');
const movierouter=require("./routes/movieRoutes")
const userrouter=require("./routes/userRoutes")
const payrouter=require("./routes/paymentRoutes")
const mymovierouter=require("./routes/usermovieRoutes")
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin:"*"}));

app.get("/",(req,res)=>
{
    return res.json({"message":"Success"})
})


const PORT= 4000 ;
app.listen(PORT,async()=>{
    console.log(`server started at ${PORT}`)
    try{
       await sequelize.authenticate();
       console.log("connected"); 
    }catch(e) 
    {
        console.log(e)
    }
    
})
app.use('/movie',payrouter)
app.use('/user',userrouter)
app.use('/movie',movierouter);
app.use('/user/movies',mymovierouter)

