let email = "qwer1234@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['qwer1234', 'gmail.com']
let userMail = email.split("@")[0] 
// undefined
let company = email.split("@")[1] 
// undefined
userMail
// 'qwer1234'
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['q', 'w', 'e', 'r']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['q', 'w', 'e', 'r', '*', '*', '*', '*']
let result=maskingMail.join("")+"@"+company
// undefined
result
// 'qwer****@gmail.com'