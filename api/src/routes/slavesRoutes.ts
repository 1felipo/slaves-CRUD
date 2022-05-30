import {Router, Request, Response} from "express"
import colors from "colors/safe"
const router = Router()

import Slave from  "../models/slaves"

router.get("/", async (req: Request,res: Response)=>{
    const slaves = await Slave.find()
    console.log(colors.green(`The slaves (lenght: ${slaves.length}) were gived successfully`))
    res.send(slaves)
}) // Get the slaves

router.post("/add", async (req:Request,res:Response)=>{
    const slave = new Slave(req.body)
    await slave.save()
    console.log(colors.green(`The slave ("${slave.slave}") was registered in the db successfully`))
}) // Add new slaves

router.delete("/delete/:id", async (req:Request,res:Response)=>{
    const id = req.params.id
    const slave = await Slave.findById(id)
    await Slave.deleteOne({_id:id})
    console.log(colors.green(`The slave ("${slave.slave}") was deleted from the db successfully`))
}) // Delete the slaves

router.put("/turn/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    const slave = await Slave.findById(id)
    slave.status = !slave.status
    await slave.save()
    console.log(colors.green(`The slave ("${slave.slave}") was changed her status (now is ${slave.status}) successfully`))
}) // Change slave status

router.put("/edit/:id", async (req:Request, res:Response)=>{
    const id = req.params.id
    await Slave.deleteOne({_id:id})
    const slave = new Slave(req.body)
    await slave.save()
    console.log(colors.green(`The slave ("${slave.slave}") was changed successfully`))
}) // Edit slave

export default router