console.log("welcome to spotify")
// iniatialize the variables 
let songIndex=0;
let audioElement=new Audio('/assets/song/8.mp3')    
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"Attif Asla song collection  all the song",id:1, filepath:"/assets/song/1.mp4",coverPath:"/assets/cover/img-1.jpg"},
    {songName:"Har-Har shambhu",filepath:"/assets/song/2.mp4",coverPath:"/assets/cover/img-2.jpg"},
    {songName:"Jingal Bell ",filepath:"/assets/song/3.mp4",coverPath:"/assets/cover/img-3.jpg"},
    {songName:"Rim Jhim ",filepath:"/assets/song/4.mp4",coverPath:"/assets/cover/img-4.jpg"},
    {songName:"Barsat ki dhun",filepath:"/assets/song/5.mp4",coverPath:"/assets/cover/img-5.jpg"},
    {songName:"Ja hamse juda  ",filepath:"/assets/song/6.mp4",coverPath:"/assets/cover/img-6.jpg"},
    {songName:"Naina Da  ",filepath:"/assets/song/7.mp3",coverPath:"/assets/cover/img-7.jpg"},
    {songName:"war of nat ",filepath:"/assets/song/4.mp4",coverPath:"/assets/cover/img-7.jpg"},
    {songName:"wariyo ",filepath:"/assets/song/1.mp4",coverPath:"/assets/cover/img-2.jpg"},
   // {songName:"wariyo ",filepath:"/assets/song/2.mp4",coverPath:"/assets/cover/img-7.jpg"}
    
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})
// audioElement
         
  let audioElemen= new Audio('/assets/song/8.mp3');
// handle paly/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused|| audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
 }
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    
}   
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.play){
        gif.style.opacity=1;
    }
    if(audioElement.paused){
        gif.style.opacity=0;
    }
    else
    {
        gif.style.opacity=1;
    }
})
// listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
          
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `/assets/song/${songIndex}.mp4`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`/assets/song/${songIndex}.mp4`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=1) {
        songIndex=9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`/assets/song/${songIndex}.mp4`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   
})
