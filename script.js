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

  
