function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

const animatedEls = document.querySelectorAll(".animate")
document.addEventListener('scroll', () => {
    for(el of animatedEls){
        if(isInViewport(el)){
            el.classList.add('animate__animated', el.getAttribute("data-animation"))
        }
    }
    
}, {passive: true})
