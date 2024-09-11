const playButton = document.getElementById("play")

const myVideo   = document.querySelector("video")

let isVideoPlaying = false

function playVideo(){
    //Playing video
   isVideoPlaying = true
   playButton.classList.replace("fa-play","fa-pause")
   myVideo.play()
}

function pauseVideo(){
    //Pause video
    myVideo.pause()
   isVideoPlaying = false
   playButton.classList.replace("fa-pause","fa-play")

}

function controlVideo() {

    //Logic to play the video and pause the video

    if(isVideoPlaying)
        {
            pauseVideo()
        }
        else{
            playVideo()
        }
}

const myProgressBar = document.getElementById("progress-bar")
const duration   =  document.getElementById("duration")
const currentTime = document.getElementById("current-time")

playButton.addEventListener("click",controlVideo)

// DYNAMIC PROGRESS BAR 

myVideo.addEventListener("timeupdate", function(event) {

    //Logic ( currentTime, duration)

     let myCurrentTime = myVideo.currentTime
     let myDuration = myVideo.duration
     let progressPercentage = (myCurrentTime/myDuration) * 100// give the total percentage of the video that is already played 
    //  console.log(progresspercentage)
    myProgressBar.style.width = `${progressPercentage}%`

// LOGIC FOR DURATION OF THE VIDEO -- convert to minutes, seconds also 


   const durationInMinutes=  Math.floor[ myDuration/60] //convert to minutes
//    console.log(durationInMinutes)

  let durationInSeconds=  Math.floor[ myDuration%60]
//    console.log(durationInSeconds)
     

   if(durationInSeconds<9){
    durationInSeconds = `0${durationInSeconds}`//05,06,08....
   }

   duration.innerText =   `${durationInMinutes}:${durationInSeconds}`

//////////// // // /////////////////////////////////////////////////////////////////////

   const currentTimeInMinutes=  Math.floor[ myCurrentTime/60] //convert to minutes
   //    console.log(durationInMinutes)
   
     let currentTimeInSeconds=  Math.floor[ myCurrentTime%60]
   //    console.log(durationInSeconds)
        
   
      if(currentTimeInSeconds<=9){
     currentTimeInSeconds  = `0${currentTimeInSeconds}`//05,06,08....
      }
   
      
currentTime.innerText =  `${currentTimeInMinutes}:${currentTimeInSeconds}/`

})


const progressRange = document.getElementById("progress-range")
progressRange.addEventListener("click",function(event){

    //Logic to move the orange bar to that loacation (big bar)

    //totalWidth of black bar is required --> 500px approx, 100 px what we have clicked 

    //totalWidth = 962px
    // console.log(event)

    const totalWidth = event.srcElement.offsetWidth
    console.log(totalWidth)

   const totalWidthFromStart =  event.offsetX // from start till where we have clicked
//    console.log(totalWidthFromStart)

const clickPercentage = totalWidthFromStart/totalWidth * 100
// console.log(this.clickPercentage)

myProgressBar.style.width = `${clickPercentage}%`

myVideo.currentTime = (totalWidthFromStart/ totalWidth) * myVideo.duration

})

const volumeRange = document.getElementById("volume-range")
const volumeBar = document.getElementById("volume-bar")

volumeRange.addEventListener("click",function(){
    //Logic to control the vol of video

    const totalWidth = event.srcElement.offsetWidth
    const totalWidthFromStart =  event.offsetX 


    let volumeBarPercentage = ((totalWidthFromStart/ totalWidth) * 100)
    volumeBar.style.width = `${volumeBarPercentage}%`

    let volumeInfo =  (totalWidthFromStart/ totalWidth)//0 to 1

    if (volumeInfo < 0.5) {
        myVideo.volume = 0.2
    }

    else {
        myVideo.volume = 1
    }

})


// 0--> nosound 
// 1--> mxsound

const volume = document.getElementById("volume")

let isMuted = false

function mute(){

    isMuted = true
    //Logic to make  video sound = 0, replace the volume button with mute button
    myVideo.volume = 0
    volume.classList.replace("fa-volume-up", "fa-volume-mute")
     volumeBar.style.width = `${0}%`

}

function unmute(){

    isMuted = false
   //Logic to make the sound work, and replace mte button with actual volume button
//    myVideo.volume = 0.2
   const totalWidth = event.srcElement.offsetWidth
   const totalWidthFromStart =  event.offsetX 
   let volumeBarPercentage = ((totalWidthFromStart/ totalWidth) * 100)
   volumeBar.style.width = `${volumeBarPercentage}%`

   let volumeInfo =  (totalWidthFromStart/ totalWidth)//0 to 1

   if (volumeInfo < 0.5) {
       myVideo.volume = 0.2
   }

   else {
       myVideo.volume = 1
   }

   volume.classList.replace("fa-volume-mute", "fa-volume-up")
}

volume.addEventListener("click",function(){

    if(isMuted){
        unmute()
    }
    else{
        mute()
    }
    
})

const speed = document.getElementById("speed")

speed.addEventListener("change",function(){

   myVideo.playbackRate = speed.value// to change the speed of video
})

const FullScreen = document.getElementById("full-screen")
const playerContainer = document.getElementById("player-container")

let fullScreen = false

function displayFullScreen(container){
//Logic  to display the video in full screen mode 
if(container.requestFullscreen){
    container.requestFullscreen()
}

}


function closeFullScreen(container){
//Logic to close the video from full screen

if(container.exitFullscreen){
    container.exitFullscreen()
}
}

fullScreen.addEventListener("clik",function(){
    //Logic to expand full screen

    if(!fullScreen ){
        displayFullScreen(playerContainer)
    }
    else{

        closeFullScreen(playerContainer)

    }
})
