const {user} = require('../model/mysql');

module.exports = class User{
    static async isThere(email) {
        try {
            let data = await user.findOne({ where: { email } });
            if (data === null) {
                return undefined;
            }
            data = data.toJSON();
            return data;
        } catch (err) {
            return err
        }
    }


    static async AddUser(email,name,surname,phone,password) {
        try {
            user.create({ email, name, surname, phone, password, wines:'' });
        } catch(err) {
            return err
        }
    }

    static async getUsers() {
        try {
            const data = await user.findAll();
            return data;
        } catch(err) {
            return err
        }
    }

    static async Delete(email) {
        try {
            user.destroy({ where: { email } });
        } catch(err) {
            return err
        }
    }
};