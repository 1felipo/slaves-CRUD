import {Router, Request, Response} from "express"
const router = Router()

import Slave from  "../models/slaves"

router.get("/", async (req: Request,res: Response)=>{
    const slaves = await Slave.find()
    console.log(slaves)
    res.send(slaves)
}) // Get the slaves

router.post("/add", async (req:Request,res:Response)=>{
    console.log(new Slave(req.body))
    const slave = new Slave(req.body)
    await slave.save()
}) // Add new slaves

router.delete("/delete/:id", async (req:Request,res:Response)=>{
    const id = req.params.id
    await Slave.remove({_id:id})
}) // Delete the slaves

router.put("/turn/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const slave = await Slave.findById(id)
    slave.status = !slave.status
    await slave.save()
}) // Change slave status

export default router