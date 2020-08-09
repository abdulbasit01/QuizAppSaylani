console.log("imported")
var score=0;

function submit(){
    var q1answer1=document.getElementById('q-1answer1')
    if(q1answer1.checked=== true){
        score++
    }
    var q2answer1=document.getElementById('q-2answer1')
    var q2answer2=document.getElementById('q-2answer3')
    if (q2answer1.checked=== true && q2answer2.checked ===true){
        score++
    }
    var q3answer1=document.getElementById('q-3answer4')
    if(q3answer1.checked===true){
        score++
    }
    setTimeout(()=>{
        document.getElementsByTagName('button')[0].disabled=true
    },250)
    console.log(score)
    
    document.getElementsByClassName('model-body')[0].innerHTML=`Total score of the quiz is ${score}`
    document.getElementsByClassName('model')[0].classList.add("model-show")
    document.getElementsByClassName('container')[0].style.filter='blur(50px)'
    var cross=document.getElementsByClassName('model')[0].childNodes[1].childNodes[3]
    cross.setAttribute('onclick','cancel()')
    console.log(document.getElementsByClassName('model')[0].childNodes[1].childNodes[3])
}
function cancel(){
    alert('quiz is submitted')
}