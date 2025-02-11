var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var video = document.getElementById("video");
var videoRange = document.getElementById("videoRange");
var durationVideo = document.getElementById("durationVideo");
var videoVolume = document.getElementById("videoVolume");
var speed = document.getElementById("speed");


btn1.addEventListener("click", function () {
    if(btn1.innerHTML=="Play"){
        console.log("btn1 Play");
        video.play();
        btn1.innerHTML="Stop"
    }else{
        console.log("btn1 Stopped");
        video.pause();
        btn1.innerHTML="Play"
    }

})

// btn1.addEventListener("click", function () {
//     console.log("btn1");
//     video.play();

// })


// btn2.addEventListener("click", function () {
//     console.log("btn2");
//     video.pause();

// })

btn3.addEventListener("click", function () {
    console.log("btn3");
    video.currentTime -= 20;

})
btn4.addEventListener("click", function () {
    console.log("btn4");
    video.currentTime -= 10;

})
btn5.addEventListener("click", function () {
    console.log("btn6");
    video.currentTime += 10;

})
btn6.addEventListener("click", function () {
    console.log("btn6");
    video.currentTime += 20;

})

btn7.addEventListener("click", function () {
    console.log("btn7");
    if (btn7.innerHTML == "Mute") {
        video.muted = true;
        btn7.innerHTML = "UnMute"
    }
    else {
        video.muted = false;
        btn7.innerHTML = "Mute";
    }
})


video.addEventListener("timeupdate", function () {
    videoRange.value = video.currentTime
    durationVideo.innerHTML = (video.currentTime / 60).toFixed(2) + " / " + (video.duration / 60).toFixed(2)
});

videoRange.addEventListener("change", function () {
    video.currentTime = videoRange.value
})

videoVolume.addEventListener("change", function () {
    video.volume = videoVolume.value;
    console.log(video.volume);

})

speed.addEventListener("change", function () {
    video.playbackRate = speed.value;
    console.log(video.playbackRate);

})

