import User from '../models/User.js';
import tokenHandler from '../lib/token.js';

export default {
    login: async (req, res, next) => {
        try {
            const user = await User.login({
                name: req.body.name,
                password: req.body.password,
            });

            // const token = tokenHandler.create(user);

            // res.cookie("token", token, {
            //     maxAge: process.env.TOKEN_EXP * 1000,
            //     httpOnly: true,
            // });

            res.json(user);
        } catch (error) {
            res.status(401).send();
            next(error);
        }
    },
    readOne: async function (req, res, next) {
        try {
            const users = await User.readOne(req.body.id);
            res.json(users);
        } catch (error) {
            next(error);
        }
    },
    readAll: async function (req, res, next) {
        try {
            const users = await User.readAll();
            res.json(users);
        } catch (error) {
            next(error);
        }
    },
    create: async function (req, res, next) {
        try {
            const result = await User.register(req.body.name, req.body.email, req.body.password);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    updateOne: async function (req, res, next) {
        try {
            const result = await User.updateOne(req.body.name, req.body.email, req.body.password);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    deleteOne: async function (req, res, next) {
        try {
            const result = await Link.deleteOne(req.params.id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
}