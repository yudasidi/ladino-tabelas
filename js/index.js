const buttonElements = document.querySelectorAll(".titleButton");
const normalElement = document.querySelector(".normalDiv");
const browseElement =  document.querySelector(".browseDiv");
const messageElement = document.querySelector(".messageDiv");
const conjugationElement = document.querySelector('.conjugationDiv');


buttonElements.forEach(bt => {
  bt.addEventListener('click', function(e) {
    if (e.target.innerHTML == "Normal Mode") {
      normalMode();
    } else {
      browseMode();
    }
  });
});

function normalMode() {
  messageElement.innerHTML="";
  conjugationElement.innerHTML="";
  normalElement.style.display = "block";
  browseElement.style.display = "none";   
}

function browseMode() {
  messageElement.innerHTML="";
  conjugationElement.innerHTML="";
  loadData(verbs, browseListElement);
  normalElement.style.display = "none";
  browseElement.style.display = "block";
  browseInputElement.value = "";
}
normalMode();