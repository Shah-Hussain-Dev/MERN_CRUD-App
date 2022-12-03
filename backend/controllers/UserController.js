import { request } from "express";
import UserModel from "../models/User.js";

const UserController = {
    addUser: async function (req, res) {
        const {email} = req.body;
        const checkUser = await UserModel.findOne({email:email})
        if(checkUser){
            res.send('User is already registered');
        }else{
        try {
            const data = await req.body
            const newUser = await new UserModel(data)
            const result = await newUser.save()
            res.status(201).json(result)
           
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }
    },
    getAlluser: async function (req, res) {
      try {
        const allUser = await UserModel.find();
        res.status(201).json(allUser)
      } catch (error) {
        res.status(404).json({message:error.message})
      }
    },
    getSingleUserByID: async function (req, res) {
        try {
            const result = await UserModel.findById(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    },
    deleteById: async function (req, res) {
        try {
            const result = await UserModel.findByIdAndDelete(req.params.id,);
        res.json(result)
        } catch (error) {
            res.json({message:error.message})
        }
    },
    updateUserById : async function (req, res) {
       
        const {id} = req.params.id;
        const checkUser = await UserModel.findById(id)
        if(checkUser){
            res.send('User is already registered');
        }else{
            return UserModel.findByIdAndUpdate(req.params.id,{$set:req.body})
            .then((response)=>{
                res.send({status:true,data:{...response._doc,...req.body}})
            }).catch((error)=>{
                res.send({status:false,data:null})
            })
        }
      
    },
}

export default UserController