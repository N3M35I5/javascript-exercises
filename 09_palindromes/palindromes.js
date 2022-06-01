const isLetter = function(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
const palindromes = function (string1) {
    let newstr="";
    for(let i =0;i<string1.length;i++){
       if(isLetter(string1[i]))
       {
           newstr+=string1[i]
       }
    };
    newstr=newstr.toLowerCase();
    for(let j =0; j<(newstr.length)/2;j++){
        if(newstr[j]!=newstr[newstr.length-j-1])
        {
            return false;
        }
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
