let ourform  = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourform.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(ourField.value);
    createItem(ourField.value);
})

function createItem(x){
    let ourHTML = `<li>${x} <button>Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", x);
}