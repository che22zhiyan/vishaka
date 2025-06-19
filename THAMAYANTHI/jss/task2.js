var cart=[];
console.log(cart);

function addItem(name,price,quantity){
    var item={
        name:name,
        price:price,
        quantity:quantity,
    };
    cart.push(item);
}
addItem("pen",10,2);
addItem("notebook",50,2);
addItem("pencil",5,5);
console.log(cart);

// function viewcart(){
//     console.log("items in your cart");
//     for(vari=0;i<cart.length;i++){
//         console.log((i+1)+"."+cart[i].name+"-$"+cart[i].price+"*"+cart[i]-quantity);
//     }
// }

function calculateTotal(){
    var total=0;
    for (var i=0;i<cart.length;i++){
        total+=cart[i].price*cart[i].quantity;
    }
    return total;
}