let inp1 = document.getElementById("input1") as HTMLInputElement;
let inp2 = document.getElementById("input2") as HTMLInputElement;
let checkY = document.getElementById("checky") as HTMLInputElement;
let checkN = document.getElementById("checkn") as HTMLInputElement;
let btn = document.getElementById("button");

function addNum(num1: number, num2: number, haveToPrint:boolean){
    if (haveToPrint){
        console.log(`O Total é ${num1 + num2}`)
    }
    return num1+num2
}
let haveToPrint:boolean;

checkY.addEventListener("change", ()=>{
    haveToPrint = true
})

checkN.addEventListener("change", ()=>{
    haveToPrint = false
})

if (btn){
    btn.addEventListener('click',()=>{
        if(inp1  && inp2){
           addNum(Number(inp1.value),Number(inp2.value), haveToPrint)
        }
    })
}
