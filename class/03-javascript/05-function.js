// function makeCertNum() {
//    let certiNum=String(Math.floor(Math.random()*1000000)).padStart(6,'0');
//    document.getElementById("certiNum").innerHTML=certiNum;
//    document.getElementById("certiNum").style.color="#"+certiNum;
//   }

  let makeCertNum=() =>{
    let certiNum=String(Math.floor(Math.random()*1000000)).padStart(6,'0');
   document.getElementById("certiNum").innerHTML=certiNum;
   document.getElementById("certiNum").style.color="#"+certiNum;
  }