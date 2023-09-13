let isStarted=false

sendAuthNum=()=>{
    if (isStarted===false){
        //타이머가 작동중이 아닐 때
        isStarted=true
        document.getElementById("success").disabled=false
        let time=180
        let timer

        let authNum=String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        document.getElementById("authNum").innerText=authNum

        timer=setInterval(() => {
            if (time>=0){
                let min=String(Math.floor(time/60))
                let sec=String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText=min+":"+sec
                time=time-1
            } else{
                document.getElementById("success").disabled=true
                isStarted=false
                clearInterval(timer)
            }
        }, 1000);

    }else{
        //타이머가 작동중일 때
    }    
}