"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname + '/../dist')));
app.use(express_1.default.static(path_1.default.join(__dirname + '/../public/css')));
app.use(express_1.default.static(path_1.default.join(__dirname + '/../public/html')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join('index.html'));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map