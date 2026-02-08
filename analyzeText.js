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

// const output = analyzeText("I am a little honest person");
// const output = analyzeText("I am a little honest person");
// const output = analyzeText("Hello world");
// const output = analyzeText("Keep coding keep shining");
// const output = analyzeText(12345);
// const output = analyzeText("Keep coding keep shining to shining");
// console.log(output);