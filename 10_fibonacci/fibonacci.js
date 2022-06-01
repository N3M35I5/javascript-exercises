const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let c = 0;
    num=Number(num);
    if(num<0)
    {
        return "OOPS";
    }
    if(num<3){
        return 1;
    }
    for(let i = 0; i<num-2;i++)
    {
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
