gsap.registerPlugin(ScrollTrigger);
gsap.to(".story2", {
  x: 350,
  y:-200, // Animate back to its original position
  duration: 3,
  scrollTrigger: {
    trigger: ".story2",
    start: "top center",
    end: "bottom center",
  }
});
gsap.to(".story4", {
  x: 500,
  y:200, // Animate back to its original position
  duration: 3,
  scrollTrigger: {
    trigger: ".story4",
    start: "top center",
    end: "bottom center",
  }
});



const starting=document.querySelector('.starting')
const content=document.querySelector('.content')
const yes=document.querySelector('.yes')
const no=document.querySelector('.no')
const toshowifno=document.querySelector('.toshowifno')
let bgmusic = new Audio('Loyalty_Freak_Music_-_07_-_A_really_dark_alley.mp3');
yes.addEventListener('click',()=>{
  bgmusic.play()
    starting.style.display="none"
    content.style.display="block"
})
no.addEventListener('click',()=>{
    content.style.display="none"
    starting.style.display="none"
toshowifno.style.display="block"
})






    const giffy=document.querySelector('.gif')
    let jumpscare=document.querySelector('.music2')
    
    giffy.addEventListener('mouseover',()=>{
        jumpscare.play()
    })
    giffy.addEventListener('mouseleave',()=>{
        jumpscare.pause()
    })
    //alert("enter esc to stop background music")
    
 let screaming=new Audio('firstscream.mp3')   
 let womanScreaming=new Audio('secondscream.wav')   
 let door=new Audio('door.wav')   
 let doom=new Audio('doom.mp3')  
 let warning=new Audio('warning.wav') 
    

 function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playMusicWhenInView() {
  var triggerElement = document.querySelector('.story2');

  if (isElementInViewport(triggerElement)) {
    screaming.play();
    bgmusic.volume=0.5

  } else {
    screaming.pause();
    bgmusic.volume=1
  }
}

window.addEventListener('scroll', playMusicWhenInView);


function isElementInViewport2(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playMusicWhenInView2() {
  var triggerElement = document.querySelector('.story4');

  if (isElementInViewport2(triggerElement)) {
    doom.play();
    bgmusic.volume=0.5

  } else {
    doom.pause();
    bgmusic.volume=1
  }
}

window.addEventListener('scroll', playMusicWhenInView2);


function isElementInViewport3(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playMusicWhenInView3() {
  var triggerElement = document.querySelector('.story5');

  if (isElementInViewport3(triggerElement)) {
    door.play();
    bgmusic.volume=0.7

  } else {
    door.pause();
    bgmusic.volume=1
  }
}

window.addEventListener('scroll', playMusicWhenInView3);





function isElementInViewport4(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playMusicWhenInView4() {
  var triggerElement = document.querySelector('.story7');

  if (isElementInViewport4(triggerElement)) {
    womanScreaming.play();
    womanScreaming.volume=0.5
    bgmusic.volume=0.5

  } else {
    womanScreaming.pause();
    bgmusic.volume=1
  }
}

window.addEventListener('scroll', playMusicWhenInView4);


function isElementInViewport5(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playMusicWhenInView5() {
  var triggerElement = document.querySelector('.story8');

  if (isElementInViewport5(triggerElement)) {
    bgmusic.volume=0.5
    warning.play().then(()=>{
      warning.play().then(()=>{
        warning.play()
      })
    })
    
    
    

  } else {
    bgmusic.volume=1
  }
}

window.addEventListener('scroll', playMusicWhenInView5);
