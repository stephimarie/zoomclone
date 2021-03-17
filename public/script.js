const { truncate } = require("fs")
const { Stream } = require("stream")

const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const mypeer = new peer(undefined, {
    host: '/',
    port: 3001
})
const myVideo = document.createElement('video')
myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(Stream => {

})

mypeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, 10)
})

socket.on('user-connected', userId => {
    console.log('User connected: ' + userId)
})

