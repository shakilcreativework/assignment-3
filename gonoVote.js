/*function signature/sample */
function gonoVote(array) {
    //write your code here
    // console.log(array);
    if(!Array.isArray(array)){
        return 'Invalid';
    }else{
        let ha = 0;
        let na = 0;
        for(const vote of array){
            // console.log(vote);
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

// const gonoVoteResult = gonoVote(["ha", "na", "ha", "na"]);
// const gonoVoteResult = gonoVote(["ha", "na", "ha", "na", "na"]);
// const gonoVoteResult = gonoVote("ha, na");
// const gonoVoteResult = gonoVote(12345);
// console.log(gonoVoteResult);
