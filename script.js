function navbar(){
    document.querySelector('.sale').addEventListener('mouseover', function() {
        document.querySelector('#sale-div').style.display = 'flex';
    });
    
    document.querySelector('.sale').addEventListener('mouseout', function() {
        document.querySelector('#sale-div').style.display = 'none';
    });
    document.querySelector('#sale-div').addEventListener("mouseenter",function(){
        document.querySelector('#sale-div').style.display = "flex"
    })
    document.querySelector('#sale-div').addEventListener("mouseleave",function(){
        document.querySelector('#sale-div').style.display = "none"
    })
    
    document.querySelector('.ladies').addEventListener('mouseover', function() {
        document.querySelector('#ladies-div').style.display = 'flex';
    });
    
    document.querySelector('.ladies').addEventListener('mouseout', function() {
        document.querySelector('#ladies-div').style.display = 'none';
    });
    document.querySelector('#ladies-div').addEventListener("mouseenter",function(){
        document.querySelector('#ladies-div').style.display = "flex"
    })
    document.querySelector('#ladies-div').addEventListener("mouseleave",function(){
        document.querySelector('#ladies-div').style.display = "none"
    })
    
    
    document.querySelector('.man').addEventListener('mouseover', function() {
        document.querySelector('#man-div').style.display = 'flex';
    });
    
    document.querySelector('.man').addEventListener('mouseout', function() {
        document.querySelector('#man-div').style.display = 'none';
    });
    document.querySelector('#man-div').addEventListener("mouseenter",function(){
        document.querySelector('#man-div').style.display = "flex"
    })
    document.querySelector('#man-div').addEventListener("mouseleave",function(){
        document.querySelector('#man-div').style.display = "none"
    })
    
    
    document.querySelector('.baby').addEventListener('mouseover', function() {
        document.querySelector('#baby-div').style.display = 'flex';
    });
    
    document.querySelector('.baby').addEventListener('mouseout', function() {
        document.querySelector('#baby-div').style.display = 'none';
    });
    document.querySelector('#baby-div').addEventListener("mouseenter",function(){
        document.querySelector('#baby-div').style.display = "flex"
    })
    document.querySelector('#baby-div').addEventListener("mouseleave",function(){
        document.querySelector('#baby-div').style.display = "none"
    })
    
    
    document.querySelector('.kids').addEventListener('mouseover', function() {
        document.querySelector('#kids-div').style.display = 'flex';
    });
    
    document.querySelector('.kids').addEventListener('mouseout', function() {
        document.querySelector('#kids-div').style.display = 'none';
    });
    document.querySelector('#kids-div').addEventListener("mouseenter",function(){
        document.querySelector('#kids-div').style.display = "flex"
    })
    document.querySelector('#kids-div').addEventListener("mouseleave",function(){
        document.querySelector('#kids-div').style.display = "none"
    })
    
    
    
    document.querySelector('.h-and-m-div').addEventListener('mouseover', function() {
        document.querySelector('#h-and-m-div').style.display = 'flex';
    });
    
    document.querySelector('.h-and-m-div').addEventListener('mouseout', function() {
        document.querySelector('#h-and-m-div').style.display = 'none';
    });
    document.querySelector('#h-and-m-div').addEventListener("mouseenter",function(){
        document.querySelector('#h-and-m-div').style.display = "flex"
    })
    document.querySelector('#h-and-m-div').addEventListener("mouseleave",function(){
        document.querySelector('#h-and-m-div').style.display = "none"
    })
    
    
    
    document.querySelector('.sports').addEventListener('mouseover', function() {
        document.querySelector('#sports-div').style.display = 'flex';
    });
    
    document.querySelector('.sports').addEventListener('mouseout', function() {
        document.querySelector('#sports-div').style.display = 'none';
    });
    document.querySelector('#sports-div').addEventListener("mouseenter",function(){
        document.querySelector('#sports-div').style.display = "flex"
    })
    document.querySelector('#sports-div').addEventListener("mouseleave",function(){
        document.querySelector('#sports-div').style.display = "none"
    })
    
    
    document.querySelector('.sustainibility').addEventListener('mouseover', function() {
        document.querySelector('#sustainability-div').style.display = 'flex';
    });
    
    document.querySelector('.sustainibility').addEventListener('mouseout', function() {
        document.querySelector('#sustainability-div').style.display = 'none';
    });
    document.querySelector('#sustainability-div').addEventListener("mouseenter",function(){
        document.querySelector('#sustainability-div').style.display = "flex"
    })
    document.querySelector('#sustainability-div').addEventListener("mouseleave",function(){
        document.querySelector('#sustainability-div').style.display = "none"
    })
}

function timer(){
    var timer = 4800 ;
 
    function formatTime(seconds) {
       const h = Math.floor(seconds / 3600);
       const m = Math.floor((seconds % 3600) / 60);
       const s = seconds % 60;
       return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
   }
   countdown = setInterval(() => {
       if (timer > 0) {
           timer--;
           document.querySelector(".timer").textContent = formatTime(timer) ;
       } else {
           clearInterval(countdown);
       }
   }, 1000);
   document.querySelector(".timer").textContent = formatTime(timer)
}


function likeFeature(){
    var like = document.querySelectorAll(".page6 .img-content i");

document.querySelectorAll(".img-content").forEach( like => {
    var icon = like.childNodes[3] ;
    // console.log(like.childNodes[3] )
    var flag = 0 ;
    icon.addEventListener('click' , function(){
  
        if(flag==0){
            icon.style.color = "red"   
    flag =1
    }
    else{
    icon.style.color = "white"
    flag =0
    }
    })
    
})
}

function LocomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function ImgScroller(){

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
navbar()
timer()
likeFeature()
ImgScroller()
LocomotiveScroll()