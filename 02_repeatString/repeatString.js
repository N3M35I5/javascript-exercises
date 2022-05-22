const repeatString = function(stri,num) {
    if(num==-1)
    {
        return 'ERROR'
    }
    res=''
    for(let i=0;i<num;i++)
    {
        res+=stri
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
