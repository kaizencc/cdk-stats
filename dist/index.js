"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cdk_card_1 = require("./cards/cdk-card");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send(yield (0, cdk_card_1.renderCdkCard)({ username: 'kaizencc' }));
}));
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, } = req.query;
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send(yield (0, cdk_card_1.renderCdkCard)({ username: username.toString() }));
}));
app.get('/icon', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Content-Type", "image/svg+xml");
    return res.sendFile(path_1.default.join(__dirname, 'icons', 'cdk.svg'));
}));
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map