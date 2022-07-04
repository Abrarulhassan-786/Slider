var slide = document.getElementById("sliders")
var btns1 = document.getElementById("btn1")
var btns2 = document.getElementById("btn2")
var btns3 = document.getElementById("btn3")

btns1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    btns1.classList.add("active")
    btns2.classList.remove("active")
    btns3.classList.remove("active")
}
btns2.onclick = function(){
    slide.style.transform = "translateX(-100%)";
    btns1.classList.remove("active")
    btns2.classList.add("active")
    btns3.classList.remove("active")
}
btns3.onclick = function(){
    slide.style.transform = "translateX(-200%)";
    btns1.classList.remove("active")
    btns2.classList.remove("active")
    btns3.classList.add("active")
}
