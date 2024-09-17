//const UserModel=require('../models/User')
//const bcrypt = require('bcrypt')
//const cloudinary = require('cloudinary')


// cloudinary.config({
//     cloud_name: 'dskp0nrq3',
//     api_key: '232921997337532',
//     api_secret: 'FlPN1cSHj9wjHygcRNT_eCM4KdY'
// });

// class UserController{
//     static getalluser=async(req,res)=>{
//        try{
//            res.send('hello user')
//        } catch(error){
//             console.log(error)
//        }
//     }
   
     
//         static userinsert = async (req, res) => {
//             try {
//                 // console.log(req.files.image)
//                 const file = req.files.image
//                 const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
//                     folder: "userimageapi",
//                 })
//                 console.log(imageUpload)
    
//                 // console.log("hello insert")
//                 console.log(req.body)
//                 const { n, e, p, cp } = req.body
//                 const user = await UserModel.findOne({ email: e })
//                 console.log(user)
//                 if (user) {
//                     res
//                    .status(401)
//                    .json({status:"failed",message:"THIS EMAIL IS ALREADY EXISTS"})
//                 } else {
//                     if (n && e && p && cp) {
//                         if (p == cp) {
//                             const hashPassword = await bcrypt.hash(p, 10);
//                             const result = new UserModel({
//                                 name: n,
//                                 email: e,
//                                 password: hashPassword,
//                                 image: {
//                                     public_id: imageUpload.public_id,
//                                     url: imageUpload.secure_url
//                                 }
    
//                             })
//                             const userdata = await result.save()
//                             //console.log(userdata)
//                             if(userdata){
//                               // const token =jwt.sign({ID: userdata._id},"pninfosys123dhdjh");
//                                 //console.log(token)
//                                //res.cookie("token",token);
//                                // this.sendVerifymail(n,e,userdata._id);
//                                 //to redirect to login page
                             

                           
//                                 res.status(201).json({
//                                 status:"success",
//                                 message:"Registration Successfully",
//                               });
                            
    
//                             }else{
//                                 res
//                                 .status(401)
//                               .json({status:"failed",message:"NOT REGISTER"})
//                             }
//                             // req.flash('success', 'Register Succefully Insert! Plz Login ')
//                             // res.redirect('/')
//                         } else {
//                             res
//                    .status(401)
//                    .json({status:"failed",message:"PASSWORD & CONFIRM PASSWORD DOES NOT MATCH"})
    
//                         }
//                     } else {
//                         res
//                         .status(401)
//                         .json({status:"failed",message:"ALL FIELD REQUIRED"})
    
//                     }
//                 }
//             } catch (error) {
//                 console.log(error)
//             }
    
    
//         }
//      }



// module.exports =UserController


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