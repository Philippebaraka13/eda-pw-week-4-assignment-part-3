console.log('***** Cart Functions *****');
let basket = [];
function addItem(item){
    basket.push(item);
    return true;
}
addItem('car');
addItem('bus');
addItem('bike');
addItem('phone');
addItem('book');
addItem('pen');
console.log(`${basket}`);
console.log(addItem());

function listItem(){
   for(let i=0; i<basket.length; i++){ 
console.log(`${basket}`);
   }
}
console.log(listItem());
 
function empty(){
    basket.length = 0;
    return basket;
}
console.log(empty());


const maxItems = 5;
function isFull(){
    if(maxItems >= basket.length || basket.length <= maxItems){
        return true;
    }
    else{
        return false;
    }
}
console.log(isFull());

function removeItem(item){
    item = basket.splice(0, 1);
    console.log(basket.indexOf('car'));
    return item;
    


}
console.log('This item was removed:', removeItem());
console.log(`${basket}`);

// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
