let div=document.createElement("div")
document.body.appendChild(div)
let ele=["Orange","Bannana","Grape"]


var fruits=[{Fruit:"Orange",color:"orange"},{Fruit:"Bannana",color:"red"}]
var person={name:"Avinash",age:23}
for(var i in person){
    let p=document.createElement("p")
    p.innerText=i
    div.appendChild(p)
}
