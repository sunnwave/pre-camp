let isStarted= false
let time
let timeLimit=180
let timer
let authPhone=false
const changeFocus=()=>{
    let phone1=document.getElementById("phone1").value
    if (phone1.length===3){
        document.getElementById("phone2").focus()
    }
}

const changeFocus2=()=>{
    let phone2=document.getElementById("phone2").value
    if (phone2.length===4){
        document.getElementById("phone3").focus()
    }
}

const activateSend=()=>{
    let phone1=document.getElementById("phone1").value
    let phone2=document.getElementById("phone2").value
    let phone3=document.getElementById("phone3").value

    if(phone1.length===3 && phone2.length===4 &&phone3.length===4){
        document.getElementById("sendAuth").disabled=false
        document.getElementById("sendAuth").style="color:#0068FF; cursor:pointer"
    }
}

const sendAuth=()=>{
    
    if(isStarted===false){
        authPhone=false
        isStarted=true
        document.getElementById("finishAuth").disabled=false
        document.getElementById("finishAuth").style="background-color:#0068FF; color:#FFFFFF; cursor:pointer;"
        time=timeLimit

        let authNum=String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("authNum").innerText=authNum

        timer=setInterval(()=>{
            if(time>=0){
                let min=String(Math.floor(time/60))
                let sec=String(time%60).padStart(2,"0")
                document.getElementById("timer").innerText=min+":"+sec
                time=time-1
            } else{
                document.getElementById("finishAuth").disabled=true
                document.getElementById("finishAuth").style="background-color:#FFFFFF; color:#D2D2D2;"
                isStarted=false
                clearInterval(timer)
                document.getElementById("authNum").innerText="000000"
                document.getElementById("timer").innerText="3:00"
                document.getElementById("finishAuth").innerText="인증 확인"
            }
        },1000)


    }
}

const finishAuth=()=>{
    if(time>0){
        alert("인증이 완료되었습니다")
        document.getElementById("finishAuth").innerText="인증 완료"
        document.getElementById("finishAuth").style="color:#D2D2D2"
        authPhone=true
        clearInterval(timer)
    }

}

const signUp=()=>{

    let email=document.getElementById("email").value
    let name=document.getElementById("name").value
    let password1=document.getElementById("password1").value
    let password2=document.getElementById("password2").value
    let region=document.getElementById("region").value
    let genderList=document.getElementsByName("gender")
    let gender

    
    checkEmail=email.includes("@")
    checkPassword=Boolean(password1===password2)
    
    genderList.forEach((node) => {
        if(node.checked) {
            gender=node.value
        }
    });

    if (!email){
        document.getElementById("emailError").innerText="이메일을 입력해 주세요"
    }else if(!checkEmail){
        document.getElementById("emailError").innerText="이메일이 올바르지 않습니다"
    }else{
        document.getElementById("emailError").innerText=""
    }

    if(!name){
        document.getElementById("nameError").innerText="이름을 입력해주세요"
    }else{
        document.getElementById("nameError").innerText=""
    }

    if(!password1){
        document.getElementById("password1Error").innerText="비밀번호를 입력해주세요"
    }else{
        document.getElementById("password1Error").innerText=""
    }

    if(!password2){
        document.getElementById("password2Error").innerText="비밀번호를 입력해주세요"
    }else if(!checkPassword){
        document.getElementById("password2Error").innerText="비밀번호가 일치하지 않습니다"
    }else{
        document.getElementById("password2Error").innerText=""
    }

    if(!authPhone){
        document.getElementById("numError").innerText="휴대폰 번호 인증을 해주세요"
    }else{
        document.getElementById("numError").innerText=""
    }

    if(!region){
        document.getElementById("regionError").innerText="지역을 선택해주세요"
    }else{
        document.getElementById("regionError").innerText=""
    }

    if(!gender){
        document.getElementById("genderError").innerText="성별을 선택해주세요"
    }else{
        document.getElementById("genderError").innerText=""
    }

    if(checkEmail && name && checkPassword && authPhone && region && gender){
            alert("가입을 축하합니다")
    }
}
