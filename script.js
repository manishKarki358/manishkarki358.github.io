/*
window.addEventListener('DOMContentLoaded',(()=>{

    function addName (source, overlay){
        return new Promise ((resolve, reject) => {
          if(source){
            let image=document.querySelector('.ad-image')
            let overlays=document.querySelector('.overlay-text')
            setTimeout(()=>{
             
              image.src=source
              overlays.textContent=overlay
              resolve();
            },3000)
          }else{
            reject('No such name');
          }
        })
      }
      
      addName('vehicles.jfif', ' Ride our top quality vehicles and motors')
        .then(()=>addName('cosmetics.jfif', 'Buy top quality skin care products'))
        .then(()=>addName('electronics.jfif', 'Find every electronic gadgets'))
        .then(()=>addName('mens-fashion.jfif', 'Buy fashionable wears for man'))
        .then(()=>addName('sports.jfif', 'Shop best sport outfits for athletes'))
      
        .catch((err)=>console.log(err))

}))
*/

const videoPlayer = document.querySelector('.current-video');
const videoFiles = ['fashion.mp4','books.mp4', 'cosmetics.mp4', 'lapcom.mp4']; 
let currentVideoIndex = 0;
const slideshowInterval = 6000;

function playVideo(index) {
  if (index >= 0 && index < videoFiles.length) {
    videoPlayer.src = videoFiles[index];
    videoPlayer.load();
    videoPlayer.play();
    currentVideoIndex = index;
  }
}

function nextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
  playVideo(currentVideoIndex);
}

function prevVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videoFiles.length) % videoFiles.length;
  playVideo(currentVideoIndex);
}
function startSlideshow() {
  setInterval(() => {
    nextVideo();
  }, slideshowInterval);
}


// Initial video load
playVideo(currentVideoIndex);
startSlideshow();
