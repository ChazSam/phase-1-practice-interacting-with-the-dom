let timeCounter = document.getElementById("counter")
let startTimer = setInterval(updateTimer, 1000)

let counter=0;

function updateTimer(){
    counter ++
    timeCounter.innerText = counter
}

let plusClick= document.getElementById("plus")
plusClick.addEventListener("click", ()=>{
    counter++;
    timeCounter.innerText = counter
})

let minusClick= document.getElementById("minus")
minusClick.addEventListener("click", ()=>{
    counter--;
    timeCounter.innerText = counter
})

let likeObj ={};
let heartClick = document.getElementById("heart");
heartClick.addEventListener("click", (e)=>{


    let counterValue = document.getElementById("counter").textContent
    let ul = document.querySelector(".likes")
    let newLi= document.createElement("li")



    console.log(likeObj)
    
    if (likeObj[counterValue]){
        likeObj[counterValue] +=1

        newLi.innerText = `${counterValue} has been liked ${likeObj[counterValue]} times.`
        ul.appendChild(newLi)
    

    }else{
        likeObj[counterValue]=1
        newLi.innerText = `${counterValue} has been liked ${likeObj[counterValue]} times.`
        ul.appendChild(newLi)
    }
    

})

let pauseClick= document.getElementById("pause")
pauseClick.addEventListener("click", ()=>{
    console.log("pause")
    if (minusClick.disabled === true){
        minusClick.disabled = false
        plusClick.disabled = false
        heartClick.disabled = false
        pauseClick.innerText = "pause"
        startTimer = setInterval(updateTimer, 1000)

    }else{
    minusClick.disabled = true
    plusClick.disabled = true
    heartClick.disabled = true
    pauseClick.innerText = "resume"
    clearInterval(startTimer)
    
    }
})

let commentForm =document.querySelector("#comment-form")
commentForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const addList= document.getElementById("list")
    let li = document.createElement("li")
    li.innerText= e.target[0].value
    addList.appendChild(li)
    commentForm.reset()
})
