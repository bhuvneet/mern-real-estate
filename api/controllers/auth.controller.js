import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) =>
{
    //const {username, email, password} = req.body;
    const password = req.body.password;
    const hashedPass = bcryptjs.hashSync(password, 10)
    
    const newUser = new User({
        username: req.body.username,
        password: hashedPass,
        email: req.body.email
    });

    console.log("USER:", newUser);
    try
    {
        await newUser.save()  // save user to DB
        res.status(201).json("User created successfully")
    }
    catch (error)
    {
        next(error);
    }
    
    console.log(req.body)
}