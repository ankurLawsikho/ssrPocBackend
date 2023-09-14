const Webinar = require('../models/webinars.model');
const mongoose = require('mongoose');
const WebinarsRepository = {

   /**
    * @GetUSER
    * Get Details As Per the given parameter
  */
    GetByParameter: async (findQry) => {
      try {
        let Info = await Webinar.find(findQry).exec();
        return Info;
      } catch (e) {
        throw e;
      }
    },
    /**
      * @GetById
      * Get Details As Per _id
    */
   GetById: async (Id) => {
      try {
        let Info = await Webinar.findOne({ '_id': Id }).exec();
        return Info;
      } catch (e) {
        throw e;
      }
    },
      /**
      * @saveDetails
      * save Details in mongo db
    */
   saveDetails: async (data) => {
      try {
        let Info = await Webinar.create(data);
        if (!Info) {
          return null;
        }
        return Info;
      } catch (e) {
        throw e;
      }
    },
  
    /**
      * @getAllUser
      * delete the User from Mongo DB
    */
     deleteInfo: async (findQry) => {
      try {
        let Info = await Webinar.deleteOne(findQry).exec();
        return Info;
      } catch (e) {
        throw e;
      }
    },

    /**
      * @UpdateUserByParamer
      * update User Info
    */
    updateByParameter: async (parameter, Details) => {
    try {
      let UpdateInfo = await Webinar.updateMany(parameter, Details).exec();
      return UpdateInfo;
      } catch (error) {
        throw error;
      }
    },
  
    /**
      * @UpdateUserInfo
      * update User Info
    */
   UpdateInfo: async (Id, Details) => {
    try {
      let UpdateInfo = await Webinar.updateOne({ _id: Id }, Details).exec();
      return UpdateInfo;
      } catch (error) {
        throw error;
      }
    },
    /**
      * @getAllUser
      * get all the User from Mongo DB
    */
     getAllItem: async () => {
      try {
        let UserInfo = await Webinar.find().exec();
        return UserInfo;
      } catch (e) {
        throw e;
      }
    },

    

    

};

module.exports = WebinarsRepository;