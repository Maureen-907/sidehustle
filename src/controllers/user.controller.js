const User = require("../models/user.model");

//Create and save new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

//Create a user
const { id, email, phone_number } = req.body;
const user = new User (id, email, phone_number);

//Save User in the database
User.create(user, (err, data) => {
    if (err)
    res.status(500).send({
        message:
        err.message || "Some arror occured while creating th User. "
    });
    else res.send(data);
});
};

//Retrive all users from database
exports.findAll = (req, res) => {

    User.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some arror occured while creating th User. "
        });
        else res.send(data);
    });
};

//Find a single user by Id
exports.findOne = (req, res) =>{
    User.findById(Number(req.params.id), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message:
                    `Not found User with id ${req.params.id}.`
                })
            }else {
                res.status(500).send({
                    message:
                    "Error retriving USer with id " + req.params.id
                });
            }
        }else res.send(data);
    });
};

//Updata a User identified by the id in the request
exports.update = (req, res) => {
    //validate Request
if (!req.body) {
    res.status(400).send({
        message: "Conteent can not be empty."
    });
}
const { id, email, phone_number } = req.body;
User.updateById(
    Number(req.params.id),
    new User(id, email, phone_number),
    (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            }else {
                res.send(500).send({
                    message: "Error updating Useer with id " + req.params.id
                });
            }
        }else res.send(data);
    }
);
};

//Delete a User with the specified id in the request

exports.delete = (ree, res) => {
    User.delete(Number(req.params.id), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: 
                    `Not found User with id ${req.params.id}.`
                });
            }else {
                res.send(500).send({
                    message: 
                    "Could not delete Useer with id " + req.params.id
                });
            }
        }else res.send({ 
            message: `User was deleted successfully!` 
        });
    });
};