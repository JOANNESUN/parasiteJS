let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hid;

var buttonDark = document.querySelector("#btn btn-warning");

var inputVar = document.querySelector("#form-control");

buttonDark.addEventListener("click", function () {
    var liVar = document.createElement("li");
    var textVar = document.createTextNode(inputVar.value); // .value is inside JS package
    liVar.appendChild(textVar);
    ulVar.appendChild(liVar); 
    inputVar.value = "";
});
