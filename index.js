const Nav  = document.getElementById('Nav') // nav bar
const trigger = document.getElementById('burger') // select the burger which is used to open the nav
const toggleNav = () =>  {
    trigger.classList.toggle('active')
    Nav.classList.toggle('show') //changes the class of the component to show ... and we have css properties for that class 
} 
trigger.addEventListener('click',toggleNav) 
