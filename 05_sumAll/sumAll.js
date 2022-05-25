const sumAll = function(lowerLimit,upperLimit) 
{
    let sum=0;
    let temp=0
    if(upperLimit<0 || lowerLimit<0)
        return "ERROR";
    if(!(Number.isInteger(upperLimit)&&Number.isInteger(lowerLimit)))
        return "ERROR"
    if(upperLimit<lowerLimit)
    {
        temp=upperLimit;
        upperLimit=lowerLimit;
        lowerLimit=temp;
    }
    for(let i=lowerLimit;i<=upperLimit;i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
