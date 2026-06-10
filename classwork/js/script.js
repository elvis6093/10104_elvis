let firstName="Elvis"
let lastName="Mutembei"
var fMarks=450
var fTermFees=20000
var sTermFees=3000
var gpa=4.5
var pass= true
console.log(firstName+" " + lastName)
console.log(fMarks)
console.log(fTermFees)
console.log(sTermFees)
console.log(gpa)
console.log(pass)
let mainName = document.getElementById("fName")
mainName.innerHTML=firstName
let secName = document.getElementById("sName")
secName.innerHTML=lastName
let sMarks = document.getElementById("fMarks")
sMarks.innerHTML=fMarks
let GPA = document.getElementById("gpa")
GPA.innerHTML=gpa
let term1fees = document.getElementById("fTermFees")
term1fees.innerHTML=fTermFees
let term2fees = document.getElementById("sTermFees")
term2fees.innerHTML=sTermFees