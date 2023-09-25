let gameSeq=[]
let userSeq=[]
score=[]
let btns=['yellow','red','purple','green']
let started= false
let level=0
let h2=document.querySelector('h2')
document.addEventListener("keypress",function(){
    if (started==false)
    {
        console.log("Game Started")
        started=true
        levelUp()
    }
})
function gameFlash (b)
{
    b.classList.add("flash")
    setTimeout(function(){
        b.classList.remove("flash")
    },250)
}
function userflash(b)
{
    b.classList.add("userflash")
    setTimeout(function(){
        b.classList.remove("userflash")
    },250)
}
function levelUp()
{
    userSeq=[]
    level++
    score.push(level)
    h2.innerText=`Level ${level}`
    let random=Math.floor(Math.random()*3)
    let randColor=btns[random]
    let randbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(gameSeq)
     gameFlash(randbtn);
}
function checkAns(index)
{
    if (userSeq[index]==gameSeq[index])
    {
        if (userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over!! Your Score was <b>${level} </b><br>Press any key to Start<br>Your High Score is ${Math.max(...score)}`
        document.querySelector('body').style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
        },150)
        reset()
    }
}
function btnPress()
{
   let btn=this
   userflash(btn)
   let usercolor=btn.getAttribute("id")
   userSeq.push(usercolor)
   checkAns(userSeq.length-1)

}

let allbtns= document.querySelectorAll(".btn")
for (b of allbtns)
{
    b.addEventListener("click",btnPress)
}

function reset()
{
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
}