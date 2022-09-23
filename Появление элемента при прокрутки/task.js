const arrayReveal = Array.from(document.querySelectorAll(".reveal"))

function ShowReveal(elementReveal) {
    let {top,bottom} = elementReveal.getBoundingClientRect()
    if (top/window.innerHeight <= 1 & bottom/window.innerHeight >=0 ){
        elementReveal.classList.add("reveal_active")
        return true
    }
    else{
        elementReveal.classList.remove("reveal_active")
        return false
    }
}
window.addEventListener("scroll",() =>{
    arrayReveal.map(item => {
        ShowReveal(item)
    })
})

// setInterval(()=>{
// console.log(ShowReveal(arrayReveal[0]),arrayReveal[0].className)



// },1000)