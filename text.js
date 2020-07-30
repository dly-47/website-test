function circularText(txt, radius, classIndex) {
    txt = txt.split(""),
      classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
    var deg = 180 / txt.length,
    origin = -90;
    //   txt.forEach((ea) => {
    //     ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;left:50%;bottom:50%;font-size: 1.3em;font-weight:bold'>${ea}</p>`; ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%;left:50%;bottom:50%;font-size: 1.3em;font-weight:bold'>${ea}</p>`;
    //     classIndex.innerHTML += ea;
    //     origin += deg;
    // });
    var i;
    for(i=0; i<txt.length; i++){
      ea = "<p style='height:"+radius+"px;position:absolute;transform:rotate("+origin+"deg);transform-origin:0 100%;left:50%;bottom:50%;font-size: 1.3em;font-weight:bold'>"+txt[i]+"</p>";
      classIndex.innerHTML += ea;
      origin += deg;
    }
  }
  
  circularText("Online telefooncentrale", 105, 0);
  circularText("Fysieke telefooncentrale", 105, 1);
  circularText("Toestellen, headsets & softphones", 105, 2);
  circularText("Maandabonnementen voip", 105, 3);