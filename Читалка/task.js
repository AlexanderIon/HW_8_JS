const book = document.getElementById("book")
const arrayFont =Array.from( book.querySelectorAll(".font-size"))
const bookControl = document.querySelector(".book__control_font-size")
const start_ = bookControl.getElementsByClassName("font-size font-size_active")


arrayFont.map(element => element.onclick=()=> {
    let activ = arrayFont.findIndex(el => el.className == 'font-size font-size_active')
    console.log(activ)
    if(element.getAttribute('data-size') === null){
        arrayFont[activ].className = "font-size font-size"
        book.className='book'
        element.className = 'font-size font-size_active'
        
    }
    else{
        arrayFont[activ].className = "font-size font-size"
        book.className = `book book_fs-${element.getAttribute('data-size')}`
        element.className = 'font-size font-size_active' 
    }
    // console.log(element) 
    return false

})
