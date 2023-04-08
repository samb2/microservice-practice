"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const ClientError_1 = require("../errors/ClientError");
exports.requireAuth = (req, res, next) => {
    if (!req.currentUser) {
        throw new ClientError_1.ClientError('Not authorized', 401);
    }
    next();
};
