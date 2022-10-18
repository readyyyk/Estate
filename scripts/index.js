const section1El = document.querySelector("#section1"),
    section2El = document.querySelector("#section2")

section1El.addEventListener("click", ()=>{
    section2El.scrollIntoView()
})