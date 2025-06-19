let a=12;
 let b=4;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
console.log(a/b);
 console.log(a%b);
 console.log(a**b);

 let x=4;
 console.log(x+=2);
 console.log(x-=2);

 console.log(6==6);
 console.log(6===6);
 console.log(6!=7);
 console.log(6!=6);
 console.log(16<8);
 console.log(9>7);
 console.log(16<=8);
 console.log(5>=7);


let marks=75
if (marks>=60){
    console.log("grade A");
}
else if (marks>=35){
    console.log("grade B");
}

let day="monday";
switch(day){
    case"monday":
    console.log("start of the week");
    break;
    case"friday":
    console.log("end of the week");
    break;
    default:
        console.log("another day");
}

let ay="friday";
switch(ay){
    case"monday":
    console.log("start of the week");
    break;
    case"friday":
    console.log("end of the week");
    break;
    default:
        console.log("another day");
}


// Loop
for (let i=1;i<=5;i++){
    console.log("count:"+i);
}

// let count=1;
// while(count<=5){
//     console.log("while count": +count);
//     count++;
// }

// let num=6;
// do{
//     console.log("di while number:"+num);
//     num++;
    
// }