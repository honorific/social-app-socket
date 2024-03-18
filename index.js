import {Server} from 'socket.io'

const io = new Server(8900, {cors: {origin: 'http://localhost:3000'}})
