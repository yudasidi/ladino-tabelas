const normalInputElement = document.querySelector(".normalVerbInput");
const magnifierInputElement = document.querySelector(".magnifier");

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        text=normalInputElement.value;
        conjugate(text);
    }
}
function handleMagnifierButton() {
  text=normalInputElement.value;
  conjugate(text);
}

normalInputElement.addEventListener('keydown', handleKeyPress);
magnifierInputElement.addEventListener('click', handleMagnifierButton);
