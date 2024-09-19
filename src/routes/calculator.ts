import { Router } from "express";

export const router = Router();


router.get('/',(req,res)=>{
    res.send({message: 'Get all calculations',
        data:[
            {id:1,result:1},
            {id:2,result:2},
        ],
    })

});

router.get('/:id',(req,res)=>{
    res.send({
        message:'Get calculation by id',
        id: req.params.id ,
        result:1
    })
})