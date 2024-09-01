console.log("welcome to music hub");
let songindex = 0;
let songname = document.getElementById("songName")
let audioElement=new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myprogressbar= document.getElementById("progressbar");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songname: "What makes you beautiful",  filePath:"songs/1.mp3"      ,              coverPath: "cover/img1.jpg"},
    {songname: "Mocking Bird"            ,  filePath:"songs/2.mp3"     ,              coverPath: "cover/img2.jpg"},
    {songname: "Let me down slowly"      ,  filePath:"songs/3.mp3"      ,              coverPath: "cover/img3.jpg"},
    {songname: "Perfect"                 ,  filePath:"songs/4.mp3"     ,              coverPath: "cover/img5.jpg"},
    {songname: "Zindagi Bata De"         ,  filePath:"songs/5.mp3"     ,              coverPath: "cover/img5.jpg"},
    {songname: "Veh kamlaya"             ,  filePath:"songs/6.mp3"     ,              coverPath: "cover/img6.jpg"},
    {songname: "Calm Down"               ,  filePath:"songs/7.mp3"     ,              coverPath: "cover/img7.jpg"},
    {songname: "Heeriye"                 ,  filePath:"songs/8.mp3"     ,              coverPath: "cover/img8.jpg"},
    {songname: "Love Story"              ,  filePath:"songs/9.mp3"       ,              coverPath: "cover/img9.jpg"},
    {songname: "Falak Tak"               ,  filePath:"songs/10.mp3"     ,              coverPath: "cover/img10.jpg"},
    {songname: "Mast Magan"              ,  filePath:"songs/11.mp3"    ,              coverPath: "cover/img11.jpg"},
    {songname: "Yuh Hi"                  ,  filePath:"songs/12.mp3"    ,              coverPath: "cover/img12.jpg"},
    {songname: "Satranga"                ,  filePath:"songs/13.mp3"    ,              coverPath: "cover/img13.jpg"},
    {songname: "Lets the eyes talk"      ,  filePath:"songs/14.mp3"      ,              coverPath: "cover/img14.jpg"},
]
// songItems.forEach((element,i)=>{
    //console.log(element ,i);
    // element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    // element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
// })


masterPlay.addEventListener('click', ()=>{
    console.log('Clicking play')
    songname.innerText = songs[songindex].songname;
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
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);

    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeallplays =()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.target.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
     let   index=parseInt(e.target.id);
    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle');
    audioElement.src = "songs/${index + 1}.mp3";
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    
    myprogressbar.value = 0;
    if(songindex>=13)
    {
        songindex=0;
    }
    else{
    songindex +=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    songname.innerText = songs[songindex].songname;
    // console.log("Test finished")
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    
    myprogressbar.value = 0;
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
    songindex -=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    songname.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function toggleImage(element) {
    // Get the image element
    var imgElement = document.getElementById(element.id);
    console.log(imgElement);
    // Check the current image source and toggle it
    if (imgElement.src.endsWith("un.png")) {
        imgElement.src = "lk.png";
    } else {
        imgElement.src = "un.png";
    }
}