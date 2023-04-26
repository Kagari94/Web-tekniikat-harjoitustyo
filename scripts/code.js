let currentTime = new Date();
let accName = document.getElementById("name");
let note = document.getElementById("viesti");
let checkBox = document.getElementById("important");
let body = document.querySelector("body");

function addNote(){
    let h3 = document.createElement("h3");//Create elements h3 and p that will be added to body.append.
    let p = document.createElement("p");

    h3.textContent = "(" + accName.value + ", posted at: " + currentTime.toLocaleString() +")";//Print name + time.
    p.textContent = viesti.value;//Print value from note field.

    if(checkBox.checked){//If checkbox cheked, color stuff to what ever color is in CSS.
        h3.classList.add("important");
        p.classList.add("important");
    }
    
    body.append(h3, p, document.createElement("hr"));//Add an element
}