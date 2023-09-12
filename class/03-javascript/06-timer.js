sendAuthNum=()=>{
    let time=180
    let authNum=String(Math.floor(Math.random()*1000000)).padStart(6,'0')

    document.getElementById("authNum").innerText=authNum
    setInterval(() => {
        if (time>=0){
            let min=String(Math.floor(time/60))
            let sec=String(time%60).padStart(2,"0")
            document.getElementById("timer").innerText=min+":"+sec
            time=time-1
        } else{
            document.getElementById("success").disabled=true
        }
    }, 1000);

    
}