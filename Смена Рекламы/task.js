const arrayRotator = Array.from(document.querySelectorAll(".rotator"))
console.log(arrayRotator[0])
const rotator_case = Array.from(arrayRotator[0].querySelectorAll(".rotator__case"))
function GetActiveRotator() {
    let activeRotator = rotator_case.findIndex(item=>item.className == "rotator__case rotator__case_active")
    if (activeRotator < rotator_case.length-1){
        rotator_case[activeRotator].classList.remove("rotator__case_active")
        rotator_case[ activeRotator+1].classList.add("rotator__case_active")
        
        rotator_case[activeRotator+1].style.color = rotator_case[activeRotator].getAttribute('data-color')
    }
    else{
        rotator_case[activeRotator].classList.remove("rotator__case_active")
        rotator_case[0].classList.add("rotator__case_active")
        rotator_case[0].style.color = rotator_case[activeRotator].getAttribute('data-color')
    }

}



setInterval(()=>{
    GetActiveRotator()
    
   
},1000)