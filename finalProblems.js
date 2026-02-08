/*function signature/sample */
function newPrice(currentPrice , discount ) {
    // You have to write your code here
    if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
        return 'Invalid';
    }else if(currentPrice <= 0){
        return 'Invalid';
    }else if(discount < 0 || discount > 100){
        return 'Invalid, discount';
    }else{
        const amoount = (currentPrice * discount) / 100;
        const total = (currentPrice - amoount).toFixed(3);
        return total;
    }
}


/*function signature/sample */
function validOtp(otp) {
    // You have to write your code here
    if(typeof otp !== 'string'){
        return 'Invalid';
    }else if(!otp.startsWith('ph-')){
        return false;
    }else if(!otp.length >= 8 || otp.length < 8){
        return false;
    }else if(otp.length === 8){
        return true;
    };
}


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


/*function signature/sample */
function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return 'Invalid';
    }else{
        let ha = 0;
        let na = 0;
        for(const vote of array){
            if(vote === 'ha'){
                ha++;
            }else if(vote === 'na'){
                na++;
            }
        }
        if(ha > na){
            return true;
        }else if(na > ha){
            return false;
        }else if(ha === na){
            return 'equal';
        }
    }
}


function analyzeText(str){
    if(typeof str !== 'string' || str === ''){
        return 'Invalid';
    }else{
        const textSpilt = str.split(' ');
        const textTokens = textSpilt.join('');
        let bigStr = textSpilt[0];
        for(const loopStr of textSpilt){
            if(loopStr.length > bigStr.length){
                bigStr = loopStr;
            }
        }
        const token = textTokens.length;

        return { longwords: bigStr, token: token }
    }
    
}

