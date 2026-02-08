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

// const getOtp = validOtp("ph-10985");
// const getOtp = validOtp("ph-29456");
// const getOtp = validOtp("dh-10985");
// const getOtp = validOtp(12310985);
// const getOtp = validOtp(["ph-10985"]);
// console.log(getOtp);