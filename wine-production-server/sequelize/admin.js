const {admin} = require('../model/mysql');

module.exports = class Admin {
    static async getAdmin(email){
        return await admin.findOne({where:{email}})
    }
}