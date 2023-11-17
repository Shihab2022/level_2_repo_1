"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json()); // when we send a json type dat then we use this
app.use(express_1.default.text()); // when we send raw data then we use this
const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    // console.log(  req.query)
    res.send('Hello world');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Hello world');
});
exports.default = app;
