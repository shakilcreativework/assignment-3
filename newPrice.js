/*function signature/sample */
function newPrice(currentPrice , discount ) {
    // You have to write your code here
    if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
        return 'Invalid, Please give me price of numbers.';
    }else if(currentPrice <= 0){
        return 'Invalid, Please give me real price of products';
    }else if(discount < 0 || discount > 100){
        return 'Invalid, discount';
    }else{
        const amoount = (currentPrice * discount) / 100;
        const total = (currentPrice - amoount).toFixed(3);
        return total;
    }
}


const result = newPrice(1500, 20);
// const result = newPrice(2000, 15);
// const result = newPrice(1200, 7);
// const result = newPrice("1000", 10);
// const result = newPrice("0", 10);
// const result = newPrice("0", 10);
// const result = newPrice(1500, -101);
// const result = newPrice(1500, 101);
// const result = newPrice(2000, 10);

// console.log(result);
