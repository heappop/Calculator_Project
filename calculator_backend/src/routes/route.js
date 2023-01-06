const express = require("express");
const router = new express.Router();
const Result = require("../models/calculator_model");



router.get('/', (req, res)=> {
    res.send("hello man");
})
router.get('/sum', async(req, res)=> {
    try{
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = num1 + num2;
    console.log(sum);
    const data1 = {num1: num1, num2: num2, total: sum};
    const user= new Result(data1);
    const data = await user.save();
    console.log(data);
    res.status(201).send(data);
    }catch(error)
    {
        res.send("Error found : " + error);
    }
}
    );


//........Subtraction...........................

    router.get('/sub', async(req, res)=> {
        try{
        const num1= req.body.num1;
        const num2= req.body.num2;
        let sum = num1 - num2;
        console.log(sum);
        const data1 = {num1: num1, num2: num2, total: sum};
        const user= new Result(data1);
        const data = await user.save();
        console.log(data);
        res.status(201).send(data);
        }catch(error)
        {
            res.send("Error found : " + error);
        }
    }
        );

//........Multiplication........................
router.get('/multi', async(req, res)=> {
    try{
    const num1= req.body.num1;
    const num2= req.body.num2;
    let sum = num1 * num2;
    console.log(sum);
    const data1 = {num1: num1, num2: num2, total: sum};
    const user= new Result(data1);
    const data = await user.save();
    console.log(data);
    res.status(201).send(data);
    }catch(error)
    {
        res.send("Error found : " + error);
    }
}
    );

    //............Devide...............
    router.get('/devide', async(req, res)=> {
        try{
        const num1= req.body.num1;
        const num2= req.body.num2;
        let sum = num1 / num2;
        console.log(sum);
        const data1 = {num1: num1, num2: num2, total: sum};
        const user= new Result(data1);
        const data = await user.save();
        console.log(data);
        res.status(201).send(data);
        }catch(error)
        {
            res.send("Error found : " + error);
        }
    }
        );

        //.................History...............
        router.get('/history', async(req, res)=> {
            try{
            let n=5;
            const data = await Result.find().sort({$natural: -1}).limit(n);
            console.log(data);
            res.status(201).send(data);
            }catch(error)
            {
                res.send("Error found : " + error);
            }
        }
            );


router.all("/**", function (req, res) {
    res.status(404).send({ status: false, message: "The api you request is not available" })
})

//-----------------------------------------------------------------------------------//

module.exports = router