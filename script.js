console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.frace(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "salam-e-Ishq",filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "salam-e-Ishq",filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementByTagName("img")[0].src = songs[i].filePath;
    element.getElementsByClassName("")[0].innerText = songs[1].songName;

})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
