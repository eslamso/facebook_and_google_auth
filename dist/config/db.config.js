"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = () => {
    mongoose_1.default
        .connect(process.env.DBURL)
        .then((c) => console.log(`data base connect does Successfully:${c.connection.host}`.green))
        .catch((e) => {
        console.error(`failed to connect to data base: ${e}`.red);
        process.exit(1);
    });
};
exports.connectDb = connectDb;
