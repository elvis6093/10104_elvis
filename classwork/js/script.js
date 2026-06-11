let firstName="Elvis"
let lastName="Mutembei"
var fMarks=450
var fTermFees=20000
var sTermFees=30000
let tTermFees=25000
var gpa=4.5
var pass= true
let total= fTermFees + sTermFees +tTermFees
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
let term3fees=document.getElementById("tTermFees")
term3fees.innerHTML=tTermFees
let mTotalFees= document.getElementById("total")
mTotalFees.innerHTML=total
//car no data
let carOne = 1
let carTwo=2
let carThree=3
// distance data
let dist1=2000
let dist2=4000
let dist3=6000
//time data
let timeOne=12
let timeTwo=15
let timeThree=20
//calculatinf speed
let speedOne= dist1/timeOne
let speedTwo= dist2/timeTwo
let speedThree= dist3/timeThree
//displaying car no
let carone=document.getElementById("car1")
carone.innerHTML = carOne
let cartwo=document.getElementById("car2")
cartwo.innerHTML = carTwo
let carthree=document.getElementById("car3")
carthree.innerHTML = carThree
//displaying distance
let diSTance1=document.getElementById("distance1")
diSTance1.innerHTML = dist1
let diSTance2=document.getElementById("distance2")
diSTance2.innerHTML = dist2
let diSTance3=document.getElementById("distance3")
diSTance3.innerHTML = dist3
//Displaying the time
let Time1=document.getElementById("time1")
Time1.innerHTML = timeOne
let Time2=document.getElementById("time2")
Time2.innerHTML = timeTwo
let Time3=document.getElementById("time3")
Time3.innerHTML = timeThree
//S=D/T
let speedone=document.getElementById("speed1")
speedone.innerHTML= Math.round(speedOne)
let speedtwo=document.getElementById("speed2")
speedtwo.innerHTML= Math.round(speedTwo)
let speedthree=document.getElementById("speed3")
speedthree.innerHTML= Math.round(speedThree) 