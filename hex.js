const  hex =[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn= document.getElementById("btn");
const color= document.querySelector(".color");
const copy = document.getElementById("copy");


btn.addEventListener("click", function(){
    const randomHex= randomer();
    document.body.style.backgroundColor=randomHex;
    color.textContent=randomHex;

});
function randomer(){
  
    var  finalString="#";
        
    for( let  k=0; k<6; k++){

        finalString+=(hex[Math.floor(Math.random()*hex.length)]);
    }
    console.log(finalString)
    return finalString;
}

function copyer(copyText){
        var  strng= document.createElement("textarea");
        strng.value=copyText;
        document.body.appendChild(strng);
        strng.select();
        document.execCommand("copy");
        document.body.removeChild(strng);
        
}

