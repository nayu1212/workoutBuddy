const express =require('express')
const {createWorkout,getWorkout,singleWorkout,deleteWorkout,updateWorkout}=require('../controllers/workoutController')
// const Workout=require('../models/workoutModels')
const router=express.Router()

// router.get('/',(req,res)=>{
//   res.json({mssg:'GET all workouts'})
// })
router.get('/',getWorkout)


// router.get('/:id',(req,res)=>{
//     res.json({mssg:'GET single workout'})
// })
router.get('/:id',singleWorkout)


router.post('/',createWorkout)

router.patch('/:id',updateWorkout)
router.delete('/:id',deleteWorkout)
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:"DELETE a workout"})
// })


// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'UPDATE a workout'})
// })

module.exports=router