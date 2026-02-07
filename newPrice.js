/*function signature/sample */
function newPrice(currentPrice , discount ) {
    // You have to write your code here
    if(currentPrice === 0){
        return 'Please, input real product price of Amount';
    }else if(currentPrice < 0 || !currentPrice){
        return 'Please, check invalid input product price of Amount';
    }else if(typeof(currentPrice) === 'string' || typeof(discount) === 'string'){
        return 'Please give me correct numbers of product amounts not string';
    }else if(discount < 0 || discount > 100){
        return 'Invalid amount Please, use valid discount amount greater then 0 and maximum 100'
    }else{
        const amount = (currentPrice * discount) / 100;
        const total = currentPrice - amount;
        const payAmount = total.toFixed(3);
        return payAmount;
    }
}


const result = newPrice(1500, 20);
// const result = newPrice(2000, 15);
// const result = newPrice(1200, 7);
// const result = newPrice("1000", 10);
// const result = newPrice("0", 10);
// const result = newPrice("0", 10);
// const result = newPrice(1500, 101);
// const result = newPrice(2000, 10);

// console.log(result);
