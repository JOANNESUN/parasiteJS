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

// view.onclick = open;
// close.onclick = hid;

var buttonDark = document.querySelector("#buttonX");

var inputVar = document.querySelector("#formX");

var ulVar = document.querySelector("#unList");

buttonDark.addEventListener("click", function () {
  console.log('hello'); // always write this so we know this function is working
    var liVar = document.createElement("li");
    var textVar = document.createTextNode(inputVar.value); // .value is inside JS package
    liVar.appendChild(textVar);
    ulVar.appendChild(liVar); 
    inputVar.value = "";
});
