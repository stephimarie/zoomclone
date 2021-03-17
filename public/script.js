const { truncate } = require("fs")
const { connect } = require("http2")
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
    addVideoStream(myVideo, stream)

    socket.on('user-connected', userId =>{
        connectToNewUser(userId, stream)
    })
})

mypeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, 10)
})

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, Stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(userVideoStream)
    })
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}