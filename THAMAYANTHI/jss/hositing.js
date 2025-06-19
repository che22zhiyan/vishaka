// // var a =5 ;
// console .log (a);


// lexical environment
// function outer(){
//     let name="chezhiyan";
//     function inner(){
//         console.log(name);
//     }
//     inner();

// }
//  outer();


// closures
//  let a="global";
//  function outer(){
//     let b="outer";
//     function inner(){
//         let c="inner";
//         console.log(a,b,c);
//     }
//     inner();
//  }
// outer();

//temporal dead zone
// console.log(a);
// let a=5;


// 
let a=20;
{
    var b=10;
    }
    console.log(b);