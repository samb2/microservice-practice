"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = require("../errors/CustomError");
exports.errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).send({
            code: err.statusCode,
            errors: err.msg // array
        });
    }
    res.status(400).send({
        errors: [{ message: 'Something went wrong' }]
    });
};
