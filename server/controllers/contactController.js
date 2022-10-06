const Contact = require('../models/models');

class contactController {
    async getAll(req, res) {
        const contacts = await Contact.findAll();
        return res.json(contacts);
    }
    async create(req, res) {
        const {name, phoneNumber} = req.body;
        const contact = await Contact.create({name, phoneNumber});
        return res.json(contact);
    }
    async delete(req, res) {
        /* if(req.method === 'OPTIONS') {
            return res.json(new Error('method OPTIONS not supported'));
        } */
        const {id} = req.params;
        const contact = await Contact.destroy({where: {id}});
        return res.json(contact);
    }
}

module.exports = new contactController();