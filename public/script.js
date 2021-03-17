const socket = io('/')
const mypeer = new peer(undefined, {
    host: '/',
    port: 3001
})

mypeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, 10)
})

socket.on('user-connected', userId => {
    console.log('User connected: ' + userId)
})