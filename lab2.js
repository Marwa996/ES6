//---------------1---------------//

// fetch ("https://jsonplaceholder.typicode.com/users")
// .then (response => {
//     return response.json()
// }).then (data => {
//     let output="";
//     for( let i of data){
//       output +=`
//         <button onclick="display(${i.id})">${i.username}</button>
//       `;
//       document.getElementById("container").innerHTML=output;
//     }
// })

// .catch (error => console.log("failed to load data"));

//  async function display(id){
//     let response = await fetch("https://jsonplaceholder.typicode.com/https://jsonplaceholder.typicode.com/posts?userId="+id);
//     let user = await response.json();
//     console.log(user);
//     let output="";
//     for (i of user){
//         output +=`
//             <p>${i.body}</p>
//         `;
//     }
//     document.getElementById("posts").innerHTML=output;
// }

//-----------------2--------------------//

// async function getUser(){
//     const response =await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products ");
//     const user = await response.json();

//     console.log(user);
//     let output="";
//     for (let i=0;i<user.length;i++){
//         output +=`
//             <div>
//                 <img src="${user[i].image}">
//                 <h2>${user[i].name}</h2>
//                 <p>${user[i].price}</p>
//             </div>
//         `;
//     }
//     document.getElementById("container").innerHTML=output;
// }

// getUser();