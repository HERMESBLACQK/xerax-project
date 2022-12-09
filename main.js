



var hamburgerdiv = document.querySelector(".hamburger")
console.log(hamburgerdiv)
var mobilelink = document.querySelector(".mobile-link")
var backdropshow = document.querySelector(".backdrop")
function showme(){
        
      hamburgerdiv.classList.toggle("show")
      mobilelink.classList.toggle("show-link") 
      backdropshow.classList.toggle("backdrop-show")
}

