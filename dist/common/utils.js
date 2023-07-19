"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const request = (data, headers) => {
    // @ts-ignore
    return (0, axios_1.default)({
        url: "https://api.github.com/graphql",
        method: "post",
        headers,
        data,
    });
};
exports.request = request;
//# sourceMappingURL=utils.js.map