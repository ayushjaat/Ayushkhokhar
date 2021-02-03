// navbar

hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.ul');
menulink = document.querySelectorAll('.menuLink')

hamburger.addEventListener('click',function(){
  
  navbar.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
  navlist.classList.toggle('v-class');
})

//hamburger.addEventListener('click', function() {

  //navbar.classList.close('v-class');
  //navbar.classList.close('h-nav');
//  navlist.classList.close('v-class');
//})