// var
// let
// const

// var t=10
// {
//     var t=100
//     let b=200
// }
// console.log(b)

// var hi = prompt("hi")
// console.log(hi)
// var lo = Math.floor(Math.random() * 100)
// console.log(lo)

// document.getElementById("lo").innerHTML = prompt("HI")
// document.getElementById("go").innerHTML = Math.floor(Math.random() * 100)

// var age = prompt("กรุณากรอกอายุของคุณ")
// if(age >= 18){
//     document.getElementById("ko").innerHTML =  "<iframe width=\"1000\" height=\"500\" src=\"https://www.youtube.com/embed/PGZ7QiKdumo?si=v4Qy5WBBW7StJjnJ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
//     console.log(1)
// }
// else{
//  console.log(0)
// }

// for(var x=0; x<=9; x++){
//     console.log("Hello world"+x)
// }

// var po=0
// var x= prompt("จำนวนสินค้า")
// for(var i=1; i<=x; i++){
//     var v= prompt("สินค้าชิ้นที่ : "+i)
//     document.getElementById("ko").innerHTML += "สินค้าชิ้นที่ "+i+" ราคา : "+v+" บาท"+"<br>"
//     po=po+parseInt(v)
// }
// document.getElementById("ko").innerHTML +="ราคาสินค้าทั้งหมด = "+po

// var x = prompt("คุณจะเล่นทั้งหมดกี่รอบ")
// for (var i = 1; i <= x; i++) {
//     var h = prompt("รอบที่ : " + i + "     จาก : " + x)
//     var j = Math.floor(Math.random() * 2)
//     if (j == 1) {
//         j = "หัว"
//     }
//     else {
//         j = "ก้อย"
//     }

//     if (h == j) {
//         var no = "✅"
//     }
//     else {
//         var no = "❌"
//     }
//     document.getElementById("ko").innerHTML += "รอบที่ :" + i + "คุณตอบ : " + h + " ผลที่ออก : " + j + "------>" + no + "<br>"
// }

// while(prompt("มีไรน้อง")!="เค"){
//     console.log("ไม่ให้ออก")
// }
// console.log("ออกไป!!")

// function fon(){
//     let no = prompt("fahrenheit :")
//     let bo = (no - 32)*5/9
//     document.getElementById("ko").innerHTML += bo.toFixed(2)+" C"
// }
// fon()

// function fon(o) {
//     let bo = (o - 32) * 5 / 9
//     return bo.toFixed(2)
// }
// alert(fon(150) + " C")
// document.getElementById("ko").innerHTML += fon(150) + " C"

// let x=prompt("value :")
// var po=0
// for(let z=1; z<=x; z++){
// let y = prompt("play : "+z);
// console.log("val : "+y)
// po=po+parseInt(y)
// }
// console.log("All val : "+po)
// var o =0
// function one(){
//     let no = Math.floor(Math.random()*2)
//     console.log(no)
//     o++
//     document.getElementById("y").innerHTML = o 
// }

$(document).ready(function() {
  $(".container").mouseenter(function() {
    $(".card").stop().animate({
      top:"-90px"
    },"slow");
  }).mouseleave(function(){
     $(".card").stop().animate({
      top:0
  },"slow");
});
});
