import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function signIn(req,res){
  const { email , password } = req.body;

  try{
    const exists = await User.findOne({email});

    if(exists)
    {
      const match = await bcrypt.compare(password , exists.password);

      if(match)
      {
        return res.status(200).json({
          msg:"Signed in successfully",
          status:"Success"
        })
      }
      else
      {
        return res.status(401).json({
          msg:"Wrong password",
          status:"Error"
        })
      }
    }
    else
    {
      return res.status(404).json({
        msg:"User with the given email doesn't exist",
        status:"Error"
      })
    }
  }catch(err){
    return res.status(400).json({
      msg:"Error while signing in",
      status:"Error"
    })
  }
}

export async function signUp(req,res){
  const { name , phone , email , password } = req.body;

  try{
    const exists = await User.findOne({email});

    if(exists)
    {
      return res.status(400).json({
        msg:"User with the given email already exists",
        status:"Error"
      })
    }
    else
    {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password , salt);

      await User.create({
        name,
        phone,
        email,
        password:hashedPassword
      })

      return res.status(201).json({
        msg:"User created successfully",
        status:"Success"
      })
    }

  }catch(err){
    return res.status(400).json({
      msg:"Error while signing up",
      status:"Error"
    })
  }
}