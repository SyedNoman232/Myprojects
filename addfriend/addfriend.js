var istatus = document.querySelector("h5")


var add = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

add.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
})

removeFriend.addEventListener("click",function(){
    istatus.innerHTML="Stranger";
    istatus.style.color ="red"
})


  