// FORM SUBMIT:

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engellendi
    console.log("islem gerceklesti")
}