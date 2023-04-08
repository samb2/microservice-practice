"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const RequestValidationError_1 = require("../errors/RequestValidationError");
function validateRequest(req, res, next) {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        throw new RequestValidationError_1.RequestValidationError(errors.array());
    }
    next();
}
exports.validateRequest = validateRequest;
