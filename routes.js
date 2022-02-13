var express = require('express');
var router = express.Router();
var Product = require('./Models/Product');


//To fetch the product data 
router.get("/products",async(req,res)=>{   
    const iproduct = await Product.find()
    res.send(iproduct)
})


//To add the product data 
router.post("/products",async(req,res)=>{    
    const ip = new Product({
        pname:req.body.pname,
        quantity:req.body.quantity
    });

    await ip.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                message:msg
            })
        }
    })
});

// for update data

router.patch('/products/:id',async (req,res)=>{
    const iproduct = await Product.findOne({_id:req.params.id})
    iproduct.pname = req.body.pname
    iproduct.quantity = req.body.quantity
    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

// for delete data

router.delete("/products/:pname",async(req,res)=>{
    const iproduct = await Product.deleteOne({pname:req.params.pname})
        if(iproduct.deletedCount==1)
        {
            res.status(200).json({
                "Message":iproduct
            })
        }
        else{
            res.status(500).json({
                "Error":iproduct
            })
        }
    })

module.exports = router