let browseListElement = document.querySelector(".browseVerbList");
let browseInputElement = document.querySelector(".browseVerbInput");
const verbs = irregularVerbs;

function loadData(data, element) {
  if (data) {
    element.innerHTML = "";
    let innerElement = "";
    data.forEach((item) => {
      innerElement += `<li>${item}</li>`
    });
    element.innerHTML = innerElement;
  }
}

function filterData(data, searchText) {
  return data.filter((x) => x.toLowerCase().startsWith(searchText.toLowerCase()));
}

browseListElement.addEventListener('click', 
  function(e) {
    if (e.target.nodeName == "LI") {
      conjugate(e.target.innerHTML);
    };
  });

browseInputElement.addEventListener("input",
  function() {
    const filteredData = filterData(verbs, browseInputElement.value);
    loadData(filteredData, browseListElement);
  });

    
