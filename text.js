let classIndex = [0,1,2,3];
let txt = [];
for(let i in classIndex){
  txt[i] = document.getElementsByClassName("circTxt")[i].innerHTML;
  circularText(txt[i], 105, i);
}

function circularText(txt, radius, classIndex) {
    txt = txt.split("");
    document.getElementsByClassName("circTxt")[classIndex].innerHTML="";
    classIndex = document.getElementsByClassName("circTxt")[classIndex];
    var deg = 180 / txt.length,
    origin = -90;
    var i;
    for(i=0; i<txt.length; i++){
      ea = "<p class='curved' style='transform:rotate("+origin+"deg)'>"+txt[i]+"</p>";
      classIndex.innerHTML += ea;
      origin += deg;
    }
  }
