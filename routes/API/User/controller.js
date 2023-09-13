const UserRepo = require('../../../models/repositories/user.repository');
const CourseRepo = require('../../../models/repositories/course.repository');

const jwt = require("jsonwebtoken");
const fs = require('fs');


// Here, this function is used to create the roles
module.exports.create = async (req,   res)    =>  {
    try{

        let name = req.body.name ? req.body.name : '';
        let email = req.body.email ? req.body.email : '';
        let password = req.body.password ? req.body.password : '';

        let Userinfo = {
            name: name,
            email: email,
            password: password
        };

        // Here, we are inserting the role     
        let SaveInfo = await UserRepo.saveDetails(Userinfo);
        
        res.send({
            code: 1,
            message: "Successful",
            payload: SaveInfo
        })
        return;
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload:  error.message
        })
    }
}

// Here, this function is used to create the roles
module.exports.getAllUser = async (req,   res)    =>  {
    try{
        console.log("tttt ------", req);
        // Here, we are inserting the role     
        let getAllUserStatus = await UserRepo.getAllItem();
        
        res.send({
            code: 1,
            message: "Successful",
            payload: getAllUserStatus
        })
        return;
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload:  error.message
        })
    }
}


module.exports.createCourse = async (req,   res)    =>  {
    try{

        let name = req.body.name ? req.body.name : '';
        let description = req.body.description ? req.body.description : '';
        
        let courseinfo = {
            name: name,
            description: description
        };
   
        let SaveInfo = await CourseRepo.saveDetails(courseinfo);
        
        res.send({
            code: 1,
            message: "Successful",
            payload: SaveInfo
        })
        return;
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload:  error.message
        })
    }
}


module.exports.getAllCourse = async (req,   res)    =>  {
    try{

        let courseDetails = await CourseRepo.getAllItem();
        
        res.send({
            code: 1,
            message: "Successful",
            payload: courseDetails
        })
        return;
        
    }catch(error){
        res.send({
            code: 3,
            message: "Error",
            payload:  error.message
        })
    }
}

