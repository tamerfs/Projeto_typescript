"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
jquery_1.default.fn.extend({
    novaFuncao() {
        console.log("chamou nova função");
    }
});
(0, jquery_1.default)('body').novaFuncao();
