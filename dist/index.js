"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cdk_card_1 = require("./cards/cdk-card");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (_req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send((0, cdk_card_1.renderCdkCard)({ username: 'kaizencc' }));
});
app.get('/api', (req, res) => {
    const { username, } = req.query;
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send((0, cdk_card_1.renderCdkCard)({ username: username.toString() }));
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map