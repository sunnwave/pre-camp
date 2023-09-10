//데이터 타입, 연산자 실습
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true &&true
// true
true&&false
// false
false||true
// true
!false
// true
!true
// false

//조건문 실습 1
if(1+1===2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM686:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM714:2 정답입니다
// undefined
if(!true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM717:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM725:4 틀렸습니다
// undefined
if(1){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM757:2 정답입니다
// undefined

//조건문 실습2
const profile={
    name:"철수",
    age:12,
    school:"다람쥐초등학교"
}
// undefined
if (profile.age>=20){
    console.log("성인입니다")
}else if (profile.age>=8) {
    console.log("학생입니다")
}else{
    console.log("어린이입니다")
}
// VM1342:4 학생입니다
// undefined




const children=["철수", "영희", "훈이"]
// undefined
for (let i = 0; i < 3; i++) {
    console.log(children[i]+"입니다")
}
// VM1689:2 철수입니다
// VM1689:2 영희입니다
// VM1689:2 훈이입니다
// undefined
for (let i = 0; i < children.length; i++) {
    console.log(children[i]+"입니다")
}
// VM1707:2 철수입니다
// VM1707:2 영희입니다
// VM1707:2 훈이입니다
// undefined