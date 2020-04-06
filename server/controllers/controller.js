const { User, Food } = require('../models');
const { comparePass } = require('../helpers/bcrypt');
const { jwtSign } = require('../helpers/jwt');
class controller {
    static register (req, res, next) {
        let form = { email: req.body.email, password: req.body.password };
        User.create(form)
        .then((result) => {
            res.status(201).json({id: result.id, email:result.email});
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: 'Internal server error'})
        });
    }

    static login (req, res, next) {
        let form = { email: req.body.email, password: req.body.password };
        User.findOne({
            where: {
                email: form.email
            }
        })
        .then((result) => {
            if (result) {
                const isPasswordValid = comparePass(form.password, result.password);
                if (isPasswordValid) {
                    let access_token = jwtSign({
                        UserId: result.id,
                        email: result.email
                    })
                    res.status(200).json({access_token})
                } else {
                    res.status(401).json({message: 'Password Salah'})
                }
            } else {
                res.status(404).json({message: 'Salah Username'})
            }
        })
        .catch((err) => {
            res.status(500).json({message: 'Internal server error'})
        });
    }

    static addFoods (req, res, next) {
        let form = {
            title: req.body.title,
            price: req.body.price,
            ingredients: req.body.ingredients,
            tag: req.body.tag,
            UserId: req.UserId
        }
        Food.create(form)
        .then((result) => {
            res.status(201).json({id:result.id, title:result.title, price:result.price, ingredients:result.ingredients, tag:result.tag, UserId:result.UserId});
        })
        .catch((err) => {
            res.status(500).json({message: 'Internal server error'})
        });
    }

    static getFoods (req, res, next) {
        let id = req.UserId;
        Food.findAll({
            where: {
                UserId: id
            }
        })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({message: 'Internal server error'})
        });
    }

    static deleteFoods (req, res, next) {
        let id = req.body.id;
        Food.destroy({
            where: {
                id
            }
        })
        .then((result) => {
            res.status(200).json({ "message": "Successfully delete food from your menu" });
        })
        .catch((err) => {
            res.status(500).json({message: 'Internal server error'})
        });
    }
}

module.exports = controller;