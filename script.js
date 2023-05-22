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
yes.addEventListener('click',()=>{
    let bgmusic = new Audio('Loyalty_Freak_Music_-_07_-_A_really_dark_alley.mp3');
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
        console.log("hovered");
    })
    giffy.addEventListener('mouseleave',()=>{
        jumpscare.pause()
    })
    //alert("enter esc to stop background music")
    
    
    

