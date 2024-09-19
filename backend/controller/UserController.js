const UserModel = require('../models/users')


class UserController {

    static userinsert = async (req, res) => {
        try {
            // console.log(req.body)
            const { name, email } = req.body
            const result = new UserModel({
                name: name,
                email: email
                
            })
            const data = await result.save()
            res.status(200)
                .json({ status: "SUCCESS", message: "REGISTATION SUCCESSFULL", data })
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error});
        }
    }
    static getalluser = async (req, res) => {
        try {
            const data = await UserModel.find()
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error});
        
        }
    }
    static viewuser = async (req, res) => {
        try {
            const data = await UserModel.findById(req.params.id)
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error});
        
        }
    }
    static updateuser = async (req, res) => {
        try {
            const { name, email } = req.body
            const data = await UserModel.findByIdAndUpdate(req.params.id, {
                name: name,
                email: email
               
            })
            res.status(200).json(data)

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error});
        
        }
    }

    static deleteuser = async (req, res) => {
        try {
            
             await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"Delete Successfully"})

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error});
        }
    }



}


module.exports = UserController