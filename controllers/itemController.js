import Item from "../models/Item.js";

export async function getAllItems(req,res){
  try{
    const items = await Item.find();
    
    return res.status(200).json(items);
  }catch(err){
    console.error(err);

    return res.status(400).json({
      msg:"Error while fetching items",
      status:"Error"
    })
  }
}

export async function insertItem(req,res){
  const item = req.body;

  try{
    await Item.create(item);

    return res.status(201).json({
      msg:"Item inserted successfully",
      status:"Success"
    })
  }catch(err){
    return res.status(400).json({
      msg:"Error while inserting item",
      status:"Error"
    })
  }
}