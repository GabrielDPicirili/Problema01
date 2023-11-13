import {Router} from "express"

const studentsRoutes = Router();

studentsRoutes.get("/", (req, res )=>{
    return res.status(200).send({menssage: "Get all students"})
})
studentsRoutes.get("/:id", (req, res )=>{
    const {id} = req.params
    return res.status(200).send({menssage: `Get student with id ${id}`})
});

studentsRoutes.post("/", (req, res )=>{
    const {name,age,email} = req.body
    if (!name || !email || !age){
        return res.status(400).send({message: " missing fields"})
    }
    return res.status(200).send({menssage: `Create student with name ${name}, email ${email}, age ${age}`})
});
studentsRoutes.put("/:id", (req, res) => {
    const {id} = req.params;
    const {name,age,email} = req.body;
    if (!name || !age || !email) {
        return res.status(400).send({ message: "Missing fields" });
    }else{
    return res.status(200).send({ message: `Student with id ${id} updated with name ${name}, with age ${age}, email ${email}` });}
    });

studentsRoutes.delete("/:id", (req, res) => {
    const {id} = req.params;
    return res.status(200).send({ message: `Student with id ${id} deleted` });
    });


export default studentsRoutes