require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
 const app=express();

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//router
// app.get('/',(req,res)=>{
//     res.json({mssg:'Welcome to app'})
// })

app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to mongo and Listening on port 4000')
    })
    
})
.catch((error)=>{
    console.log(error)
})

