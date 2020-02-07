const {check,validationResult} = require('express-validator')

let name = "name", email = "email", password = "password", username = "username";

let signup = [
    check(name).not().isEmpty().withMessage("Name is empty"),
    check(name).isLength({min: 6}).withMessage("Name too short"),

    check(email).not().isEmpty().withMessage("Email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),
    check(email).isLength({min: 5}).withMessage("Email too short, < 5"),

    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5"),

    check(username).not().isEmpty().withMessage("username is empty"),
    check(username).isLength({min: 5}).withMessage("username too short < 5")
];

let login = [

    check(password).not().isEmpty().withMessage("password is empty"),
    check(password).isLength({min: 5}).withMessage("password too short < 5"),

    check(email).not().isEmpty().withMessage("email is empty"),
    check(email).isEmail().withMessage("Invalid Email"),
    check(email).isLength({min: 5}).withMessage("Email too short, < 5"),

];


let createTodo =[
    check("subject").not().isEmpty().withMessage("Todo Subject is empty"),
    check("subject").isLength({min: 5}).withMessage("Subject too short < 5"),

     check("detail").not().isEmpty().withMessage("Todo Detail is empty"),
    check("detail").isLength({min: 5}).withMessage("Detail too short < 5"),
];

let update = [
    check('subject').not().isEmpty().withMessage('Subject not Available'),
    check('detail').not().isEmpty().withMessage('Subject not Available')
]
module.exports= {signup,login,createTodo,update};