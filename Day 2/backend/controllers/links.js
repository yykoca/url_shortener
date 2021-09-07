const Link = require('../models/Link.js');

module.exports = {
    readOne: async function (req, res, next) {
        try {
            const links = await Link.readOne(req.body.id);
            console.log("links", links);
            res.json(links);
        } catch (error) {
            next(error);
        }
    },
    readAll: async function (req, res, next) {
        try {
            const links = await Link.readAll();
            console.log("links", links);
            res.json(links);
        } catch (error) {
            next(error);
        }
    },
    create: async function (req, res, next) {
        try {
            const result = await Link.register(req.body.title, req.body.beschreibung, req.body.link);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    updateOne: async function (req, res, next) {
        try {
            const result = await Link.updateOne(req.body.title, req.body.beschreibung, req.body.link);
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