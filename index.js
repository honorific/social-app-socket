import {Server} from 'socket.io'

const io = new Server(8900, {cors: {origin: 'http://localhost:3000'}})

let users = []

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({userId, socketId})
}

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('addUser', (userId) => {
    addUser(userId, socket.id)
    io.emit('getUsers', users)
  })
})
