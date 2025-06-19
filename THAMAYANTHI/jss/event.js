let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    btn.style.background="green";
    btn.style.color="white";
});

let form =document.getElementById("myform");
let msg =document.getElementById("message");
form.addEventListener( " submit",
     function(event){
    event.preventDefault();
    const name=document.getElementById("name").Value.trim();
    console.log(name);
    const email=document.getElementById("email").Value.trim();
    console.log(email);
    if(name===""||email==="")
 
        {
            //  msg.textContent="please fill the form";
            alert("please fill the form");
    }
            else{
            msg.textContent="form submitted sucessfully";
            msg.style.color="green";
        }
    }
);



// <button onclick="alert('clicked!')">click me</button>