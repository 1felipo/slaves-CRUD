import {Router, Request, Response} from "express"
const router = Router()

import Slave from  "../models/slaves"

router.get("/", async (req: Request,res: Response)=>{
    const slaves = await Slave.find()
    console.log(slaves)
    res.render("index", {
        slaves
    })
})

router.post("/add", async (req:Request,res:Response)=>{
    console.log(new Slave(req.body))
    const slave = new Slave(req.body)
    await slave.save()
    res.redirect("/")
})

router.get("/delete/:id", async (req:Request,res:Response)=>{
    const id = req.params.id
    await Slave.remove({_id:id})
    res.redirect("/")
})

router.get("/turn/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const slave = await Slave.findById(id)
    slave.status = !slave.status
    await slave.save()
    res.redirect("/")
})

router.get("/edit/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const slave = await Slave.findById(id)
    res.render("edit",{
        slave
    })
})

router.post("/edit/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    await Slave.update({_id:id}, req.body)
    res.redirect("/")
})

export default router