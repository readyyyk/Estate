function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&
        rect.left <= window.innerWidth
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
