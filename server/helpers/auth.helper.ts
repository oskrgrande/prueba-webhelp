
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

const secret = process.env.JWT_SECRET || '';

type User = {
    id: string,
}

export const createToken = (user: User) => {
    jwt.sign({
        id_user:user.id,
    }, secret, {
        expiresIn: 86400, // 24hrs
    } )
}


export const verifyToken = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const token = String(req.headers["x-access-token"]);
        if(!token) return res.status(403).json({message:'No token provided'});
        const decoded = jwt.verify(token, secret);
        //validate rules by user id
        console.log(decoded)
        next();
    } catch (error) {
        return res.status(500).json({message:"Unauthorized"})
    }
   
};


export const checkExistingUser = async (req: Request, res:Response, next: NextFunction ) => {
    try {
    //   const userFound = await User.findOne({ username: req.body.username });
    //   if (userFound)
    //     return res.status(400).json({ message: "The user already exists" });
  
    //   const email = await User.findOne({ email: req.body.email });
    //   if (email)
    //     return res.status(400).json({ message: "The email already exists" });
  
      next();
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const checkExistingRole = (req: Request, res: Response, next: NextFunction ) => {
    req.body.roles.find();
  
    if (!req.body.roles) return res.status(400).json({ message: "No roles" });
  
    for (let i = 0; i < req.body.roles.length; i++) {
    //   if (!ROLES.includes(req.body.roles[i])) {
    //     return res.status(400).json({
    //       message: `Role ${req.body.roles[i]} does not exist`,
    //     });
    //   }
    }
  
    next();
  };