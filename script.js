console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');

let songs = [
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
]
let audioElement = new Audio('1.mp3');
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update Seekbar
})
