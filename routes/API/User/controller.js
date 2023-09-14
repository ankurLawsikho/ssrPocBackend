const UserRepo = require('../../../models/repositories/user.repository');
const CourseRepo = require('../../../models/repositories/course.repository');

const WebinarRepo = require('../../../models/repositories/webinar.repository');

const jwt = require("jsonwebtoken");
const fs = require('fs');


module.exports.login = async (req,   res)    =>  {
    try{

        let email = req.body.email ? req.body.email : '';

        const userDet = await UserRepo.GetByParameter({
            email
        })

        if(userDet.length === 0) {
            res.send({
                code: 2,
                message: "User Not EXist",
                userDet: userDet
            });
            return;
        }

        res.send({
            code: 1,
            message: "User EXist",
            userDet: userDet
        });
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
module.exports.create = async (req,   res)    =>  {
    try{

        let name = req.body.name ? req.body.name : '';
        let email = req.body.email ? req.body.email : '';
        let phone = req.body.phone ? req.body.phone : '';
        let password = req.body.password ? req.body.password : '123456';
        let typeOfUser = req.body.typeOfUser ? req.body.typeOfUser : 'normal';
        let companySize = req.body.companySize ? req.body.companySize : 0;
        let companyName = req.body.companyName ? req.body.companyName : '';

        let Userinfo = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            typeOfUser: typeOfUser,
            companySize: companySize,
            companyName: companyName
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

module.exports.createWebinar = async (req,   res)    =>  {
    try{

        let name = req.body.name ? req.body.name : '';
        let description = req.body.description ? req.body.description : '';
        
        let info = {
            name: name,
            description: description
        };
   
        let SaveInfo = await WebinarRepo.saveDetails(info);
        
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

module.exports.getAllWebinars = async (req,   res)    =>  {
    try{

        let webinarsDetails = await WebinarRepo.getAllItem();
        
        res.send({
            code: 1,
            message: "Successful",
            payload: webinarsDetails
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

