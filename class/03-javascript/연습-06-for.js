let persons = [
    {name: "철수", age:17},
    {name: "영희", age:22},
    {name: "도우너", age:5},
    {name: "그루트", age:65},
    {name: "도비", age:3}
    ]
// undefined
persons
// (5) [{…}, {…}, {…}, {…}, {…}]
for (let count = 0; count < persons.length; count++) {
    if(persons[count].age>=20){
        console.log("성인입니다")
    } else{
        console.log("미성년자입니다")
    }
}
// VM2207:5 미성년자입니다
// VM2207:3 성인입니다
// VM2207:5 미성년자입니다
// VM2207:3 성인입니다
// VM2207:5 미성년자입니다
// undefined
for (let count = 0; count < persons.length; count++) {
    if(persons[count].age>=20){
        console.log(persons[count].name +"님은 성인입니다")
    } else{
        console.log(persons[count].name +"님은 미성년자입니다")
    }
}
// VM2316:5 철수님은 미성년자입니다
// VM2316:3 영희님은 성인입니다
// VM2316:5 도우너님은 미성년자입니다
// VM2316:3 그루트님은 성인입니다
// VM2316:5 도비님은 미성년자입니다
// undefined


const fruits = [
    { number:  1, title: "레드향"　　　　},
    { number:  2, title: "샤인머스켓"　　},
    { number:  3, title: "산청딸기"　　　},
    { number:  4, title: "한라봉"　　　　},
    { number:  5, title: "사과"　　　　　},
    { number:  6, title: "애플망고"　　　},
    { number:  7, title: "딸기"　　　　　},
    { number:  8, title: "천혜향"　　　　},
    { number:  9, title: "과일선물세트"　},
    { number: 10, title: "귤"　　　　　 },
]
// undefined
for (let index = 0; index < fruits.length; index++) {
    console
}
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index].number+" "+fruits[index].title)
}
// VM2573:2 1 레드향
// VM2573:2 2 샤인머스켓
// VM2573:2 3 산청딸기
// VM2573:2 4 한라봉
// VM2573:2 5 사과
// VM2573:2 6 애플망고
// VM2573:2 7 딸기
// VM2573:2 8 천혜향
// VM2573:2 9 과일선물세트
// VM2573:2 10 귤
// undefined
for (let index = 0; index < fruits.length; index++) {
    console.log(`${fruits[index].number} ${fruits[index].title}`)
}
// VM2613:2 1 레드향
// VM2613:2 2 샤인머스켓
// VM2613:2 3 산청딸기
// VM2613:2 4 한라봉
// VM2613:2 5 사과
// VM2613:2 6 애플망고
// VM2613:2 7 딸기
// VM2613:2 8 천혜향
// VM2613:2 9 과일선물세트
// VM2613:2 10 귤
// undefined


Math.floor(Math.random()*1000000)
// 534393
String(Math.floor(Math.random()*1000000))
// '719609'
String(Math.floor(Math.random()*1000000))
// '475861'
String(Math.floor(Math.random()*1000000))
// '731141'
String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// '394915'
String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// '549635'
String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// '482553'
String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// '395667'
let result =String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// undefined
result
// '522788'