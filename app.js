for (let i = 0; i < 350; i++) {
    let box = document.createElement("span")
    document.querySelector(".container").appendChild(box)   
}

const curser = document.querySelector(".cursor") 

window.onmousemove = function (e) {
     curser.style.left = e.clientX + "px";
     curser.style.top = e.clientY + "px"; 
}