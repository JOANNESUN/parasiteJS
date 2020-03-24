var changingColor = document.querySelector(".display-1");
// connecting js to html 

changingColor.addEventListener("click", function () {
    // headingh3.classList.add("newcolor");
    changingColor.classList.toggle("newbody");
    
}); 


var buttonYellow = document.querySelector("#buttonX");

var inputVar = document.querySelector("#inputY");

// changingColor.classList.add("newcolor");

var changing_background = document.querySelector(".intro_body");

changing_background.addEventListener("click", function () {
    changing_background.classList.toggle("newbody");

}); 


buttonYellow.addEventListener("click", function () {
    console.log("working");
    var liVar = document.createElement("li");
    var textVar = document.createTextNode(inputVar.value); // .value is inside JS package
    liVar.appendChild(textVar);
    ulVar.appendChild(liVar); 
    inputVar.value = "";
    console.log(liVar);
});





