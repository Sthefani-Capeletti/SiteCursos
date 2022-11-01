const navBtn = document.querySelector("#navBtn");
const navItems = document.querySelector("#navItems");

navBtn.addEventListener("click",function(){
    navBtn.classList.toggle("animacao");
    navItems.classList.toggle("nav-items-abrir")
})
