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
// const express = require('express')
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json()); // when we send a json type dat then we use this
app.use(express_1.default.text()); // when we send raw data then we use this
/// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// For use router in our app
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User create successfully',
        user: user
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'Course create successfully',
        user: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.hostname);
    next();
};
app.get('/error-handler', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /// we use async await 
    //and try catch for error handle
    try {
        res.send(some, thing, wrong);
    }
    catch (error) {
        next(error);
        // res.status(400).json({
        //   success:false,
        //   message:'Your request is field .'
        // })
    }
}));
app.get('/', logger, (req, res) => {
    // console.log(  req.query)
    res.send('Hello world');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('Hello world');
});
// route error
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'You put wrong route !!!'
    });
});
/// handle all error without route error
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Your request is field form global.'
        });
    }
});
exports.default = app;
