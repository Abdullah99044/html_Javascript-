//var btn = document.createElement('button');
//btn.style.margin = '10px';
//btn.innerHTML = 'Switch'  ;
//document.body.appendChild(btn);
//document.body.style.background = "#000000";

// schijf hier tussen je code

var button1 = document.querySelector("button");
 
 

button1.addEventListener("click", function() {
    
    document.body.classList.toggle("colorred");

});

var clicked = false;

function toggle(){
    if(!clicked){
        clicked = true
        document.getElementById("btn1").innerHTML = "Switch light on!";
    }else{
        clicked = false
        document.getElementById("btn1").innerHTML = "Switch light off!";

    }
}

// schijf hier tussen je code