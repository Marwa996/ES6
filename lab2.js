// async function getUser(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//    let data = await response.json();
//    console.log(data);
// }

// getUser();

fetch ("https://jsonplaceholder.typicode.com/users")
.then (response => {
    return response.json()
}).then (data => {
// setTimeout(() =>{
    for( let i =0;i<data.length;i++){

        var but=document.createElement("button");
        but.innerHTML=data[i].username;
        var div= document.getElementsByClassName("container");
        but.addEventListener("onclick",getData());
        but.setAttribute("value",data[i].username);
        document.body.appendChild(but);
        console.log(div);
    } return div;
},500)

//  })
// .then( div => {
//     let but =document.getElementsByTagName("button")
//     for(let i=0;i<but.length;i++){
//     but.addEventListener("click", getdata);
// }})
.catch (error => console.log("failed to load data"));

//  async function getData(){
//     let div=document.getElementsByTagName("button");
//     let response = await fetch("https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/posts?userId="+id);
// }