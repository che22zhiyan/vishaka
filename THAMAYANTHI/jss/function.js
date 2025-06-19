    function greet(){
        console.log('hello!');
    }
    greet();

    setTimeout(function() 
     {console.log('I run after 1 second!');
        
    }, 1000);

    
   const gret=() => {
       console.log('welcome!') ;
        }
        gret();

        (function(){
            console.log('I run immediately!');
        })();


        function grt(callback){
            callback();
        }
grt (function(){
    console.log('hello from the callback!');
})

function demo(a,b)
{
    console.log(a+b);
}
demo(5,8);


function dem(callback)
{
     callback();
}
dem(function(){
    console.log("callback function running")
});

function CountDown(number){
    if (number>0){
        console.log(number);
        CountDown(number-1)
    }
}
CountDown(3);