import express from "express";
import Login from "../module/login";
import bcrypt from "bcrypt";

export const userRegister = async(req,res) => {
    try {
        const { password } = req.bdy

        const salt = bcrypt.genSaltSync(5)
        const hashedPassword = bcrypt.hashSync(password, salt);
        
        const newLogin = await Login.create({
            ...req.body,
            password: hashedPassword
        })


    } catch (error) {
        res.json(error)
    }
}



export const userLogin = async(req,res) => {
    try {
        const { email, password } = req.bdy

       
        
        const newLogin = await Login.findOne({
           email
        })

        if(!user) {
            throw new Error("The user doesn't exist")
            return
        }

        const passwordCheck = bcrypt.compareSync(password, user.password)

        if(!password) {
            throw new Error("wrong password")
            return
        }

        const token = jwt.sign({loginId: login._id}, SECRET_KEY, { expiresIn: "1hour"}) 



    } catch (error) {
        res.json(error)
    }
}