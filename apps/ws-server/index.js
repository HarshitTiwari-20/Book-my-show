"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@repo/db/client");
const ws_1 = require("ws");
const server = new ws_1.WebSocketServer({ port: 8080 });
server.on("connection", (socket) => {
    client_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    socket.send(" Server conncected ");
});
