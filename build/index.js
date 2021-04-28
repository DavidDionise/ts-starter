"use strict";
exports.__esModule = true;
var express = require("express");
var router_1 = require("./router");
var app = express();
app.use(express.json());
app.use(router_1.router);
app.listen(9999, function () { return console.log("LISTENING"); });
//# sourceMappingURL=index.js.map