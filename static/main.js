videoIdForm = document.querySelector("#chooseVideo")

videoIdForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    chooseVideo = videoIdForm.querySelector("input")
    playingVideo = document.querySelector("#playingVideo")
    playingVideo.setAttribute("src", "../static/videos/" + chooseVideo.value + ".mp4")
    // playingVideo.currentTime = frameId.value / 25
})

frameIdForm = document.querySelector("#chooseFrame")

frameIdForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    chooseFrame = frameIdForm.querySelector("input")
    playingVideo = document.querySelector("#playingVideo")
    playingVideo.currentTime = chooseFrame.value / 25
})

setInterval(()=>{
    // console.log("Hello")
    playingVideo = document.querySelector("#playingVideo")
    document.querySelector("#currentFrame").innerHTML = "Current frame: " + Math.trunc(playingVideo.currentTime * 25)
}, 20)