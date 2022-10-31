const asia = document.querySelectorAll('h5');


window.addEventListener('load', () =>{

   const TL = gsap.timeline({paused:true});
   TL
    .staggerFrom(asia,1,{top:-40,opacity: 0,ease:"power1.out"},0.5);
   
     TL.play();
})  
   
   
   
   
   
   
   const titreSpans = document.querySelectorAll('h1 span');


window.addEventListener('load', () =>{

   const TL = gsap.timeline({paused:true});
   TL
    .staggerFrom(titreSpans,1,{top:-90,opacity: 0,ease:"power1.out"},0.1);
   
     TL.play();
})

const asil = document.querySelectorAll('h2 span');


 window.addEventListener('load', () =>{

     const TL = gsap.timeline({paused:true});
     TL
     .staggerFrom(asil,1,{top:-10,opacity: 0,ease:"power1.out"},0.2);
   
     TL.play();
 })

 const anim = document.querySelectorAll('a');


 window.addEventListener('load', () =>{

     const TL = gsap.timeline({paused:true});
     TL
     .staggerFrom(anim,1,{top:-10,opacity: 0,ease:"power1.out"},0.1);
   
     TL.play();
 })

 const adim = document.querySelectorAll('a span');


 window.addEventListener('load', () =>{

     const TL = gsap.timeline({paused:true});
     TL
     .staggerFrom(adim,1,{top:-10,opacity: 0,ease:"power1.out"},0.2);
   
    TL.play();
 })
 const asila = document.querySelectorAll('p');


 window.addEventListener('load', () =>{

     const TL = gsap.timeline({paused:true});
     TL
     .staggerFrom(asila,2,{top:-90,opacity: 0,ease:"power1.out"},0.5);
   
     TL.play();
 })


function oppenMenu(){
    var slide = document.getElementById("slide");
     var open = document.getElementById("open");
     var close = document.getElementById("close");
     slide.style.display = "flex";
    open.style.display = "none";
     close.style.display = "block";
 }
 function closeMenu(){
    var slide = document.getElementById("slide");
     var open = document.getElementById("open");
     var close = document.getElementById("close");
    slide.style.display = "none";
         open.style.display = "block";
   close.style.display = "none";
 }


