let inputs = document.querySelectorAll("input")
let btn = document.getElementById("submit")
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let arrow = document.getElementById('arrow')
let errorMsg = document.getElementById('error-msg')

console.log(inputs)

// checks only one input
let selectedInput = null;
document.querySelectorAll('input[type=button]').forEach(input => {
    input.addEventListener('click', function(){
        if(selectedInput){
            selectedInput.checked = false
        }
        selectedInput = this.value
        console.log(selectedInput)

        let rate = document.getElementById('rate')
        rate.innerHTML = `You selected ${selectedInput} out of 5`
    })
})

btn.addEventListener('click', () => {
    if(selectedInput == null){
        errorMsg.style.display = 'block'
        console.log("ki")
    }else{
        box1.style.display= 'none'
        box2.style.display='block'
        errorMsg.style.display = 'none'
    }
})

arrow.addEventListener('click', () => {
    box1.style.display = 'block'
    box2.style.display='none'
    selectedInput = null
})


