/*function signature/sample */
function finalScore (omr) {
    //write your code here
    const {right, wrong, skip} = omr;
    if(typeof right !== 'number' || typeof wrong !== 'number' || typeof skip !== 'number'){
        return 'Invalid';
    }else if((right + wrong + skip) !== 100){
        return 'Invalid';
    }else{
        return Math.round((right * 1) - (wrong * 0.5) - (skip * 0));
    }

}

// const result = finalScore({ right: 67, wrong: 23, skip: 10 });
// const result = finalScore({ right: 80, wrong: 25, skip: 0 });
// const result = finalScore({ right: 50, wrong: 10, skip: 40 });
// const result = finalScore({ right: 30, wrong: 30, skip: 40 });
// const result = finalScore("!@#");
// const result = finalScore(["Raj"]);
// console.log(result);
