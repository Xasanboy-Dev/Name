import { Request, Response } from "express";
 import {pool}  from "../config/db";
export const getMethod =async (req:Request,res:Response)=>{
    try {
         const users = await pool.query(`SELECT * FROM xasanboy`)
         res.status(200).json(users.rows)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}

export const postMethod = async (req:Request,res:Response)=>{
    try {
        const {name,lastname,email} = req.body
        await pool.query(`INSERT INTO xasanboy (name,lastname,email) VALUES ($1,$2,$3)`,[name,lastname,email])
        res.status(200).json({message:"Created"})
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}
export const deleteMethod = async (req:Request,res:Response)=>{
    try {
        const {id} = req.params
       await pool.query(`DELETE FROM xasanboy WHERE id = $1`,[id])
       res.status(200).json({message:"Deleted"})
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}