
const sliderInner = document.querySelector("#slider-inner"),
    tempArrayOfSliderEls = document.querySelectorAll(".card")
    step = tempArrayOfSliderEls[tempArrayOfSliderEls.length-1].offsetWidth + 16,
    innerW = sliderInner.offsetWidth

function sliderMove(dir){
    let tempStr = sliderInner.style.left,
        temp = Number(tempStr.replace("px",""))
    if(dir && temp < 0)
        temp += step
    else if(!dir && -temp < innerW-step)
        temp -= step

    console.log(`${temp}px`)
    sliderInner.style.left = `${temp}px`
}


const minDiff = 40,
    // maxTime = 300,
    sliderParent = document.querySelector("#slider")
let startX,
    starTime,
    startSliderX

sliderParent.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
    starTime = new Date()
    let tempStr = sliderInner.style.left,
        startSliderX = Number(tempStr.replace("px",""))
}, { passive: true } )

sliderParent.addEventListener("touchmove", (e) => {
    let diff = e.touches[0].clientX - startX
    sliderInner.style.left = `${startSliderX - diff}px`
}, { passive: true } )

sliderParent.addEventListener("touchend", (e) => {
    let diff = e.changedTouches[0].clientX - startX,
        tempStr = sliderInner.style.left,
        temp = Number(tempStr.replace("px",""))
        // endTime = new Date(),
        // timeDiff = endTime - starTime

    // if(timeDiff < maxTime){
        if(diff > minDiff && temp < 0)
            temp += step
        else if(-diff > minDiff && -temp < innerW-step)
            temp -= step
    // }

    sliderInner.style.left = `${temp}px`
})
// can add time/diff coefficient and wrap (if) inside touchend action with checking this coeff. and min of this coeff