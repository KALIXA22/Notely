import React from "react";
function menuButton(){
    return(
        <>
{/* const navLinks=document.querySelectorAll('.nav-menu  .nav-link'); 
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
menuOpenButton.addEventListener('click', ()=>
     {
        //toggle mobile menu visibility
        document.body.classList.toggle('show-mobile-menu');
     })
menuCloseButton.addEventListener('click', ()=> menuOpenButton.click());

navLinks.forEach(link =>{
   link.addEventListener("click" , () =>menuOpenButton.click());
})*/}

<button id="menu-close-button" class="fas fa-times">

</button>
 <button id="menu-open-button" class="fas fa-bars"></button>
        
        </>
    )
}
export default menuButton;

