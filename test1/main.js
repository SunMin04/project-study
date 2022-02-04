let target = document.querySelector("#dynamic");

function randomString(){
    let StringArr = ["Learn To HTML", "Learn To CSS", "Learn To JavaScript",
    "Learn To Python", "Learn To Ruby"];
let selectString = StringArr[Math.floor(Math.random() * StringArr.length)];
let selectStringArr = selectString.split("");

return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent +=randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);