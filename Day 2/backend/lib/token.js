import jwt from 'jsonwebtoken';

const algorithm = "HS256";

const create = payload => {
    const options = {
        algorithm,
        expiresIn: `${process.env.TOKEN_EXP}s`,
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET, options);
}

const verify = token => {
    return jwt.verify(token, process.env.TOKEN_SECRET, { algorithms: [algorithm] }, (error, payload) => {
        if (error) throw new Error("token invalid");
        return payload;
    });
}

export default {
    create,
    verify,
};