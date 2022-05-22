const reverseString = function(stri) 
{
    let res=''
    for(let i=stri.length-1;i>=0;i++)
    {
        res+=stri[i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
