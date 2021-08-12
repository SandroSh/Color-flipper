const colors=["green", "red", "purple", "yellow", "gold", "greenyellow"];
const btn =document.getElementById("btn");
const color= document.querySelector(".color");



btn.addEventListener("click", function(){
// get random number bettwen 0 -3 colors[2]
const randomNumber=getRandomNum();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent=colors[randomNumber];
});
function getRandomNum(){
    return Math.floor(Math.random() *colors.length);
}


// copy function
function copyer(copyText){
    var  strng= document.createElement("textarea");
    strng.value=copyText;
    document.body.appendChild(strng);
    strng.select();
    document.execCommand("copy");
    document.body.removeChild(strng);
    
}