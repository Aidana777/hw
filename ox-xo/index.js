const btn=document.getElementById("btn")
const box=document.getElementById("box")
const boxbtn=document.getElementById("box-btn")
btn.addEventListener("click",function() {
    box.style.display= "block"
})

boxbtn.addEventListener("click",function() {
    box.style.display= "none"
})