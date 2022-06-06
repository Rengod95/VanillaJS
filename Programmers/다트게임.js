const solution = (dartResult) => {
    const bonus = { 'T':3 , 'D':2 , 'S':1 }

    const divideResult = (dartResult) => {
        let newBonus = [];
        let newNumber = [];
        let newOption = [];
        let lastIndex = 0;

        dartResult.split("").forEach((value,index)=>{
            if(value === 'S' || value === 'D' || value === 'T') {
                newBonus.push(value);
                newNumber.push( dartResult.slice(lastIndex,index));
                lastIndex = index+1;
            }
            if(value === '*' || value === '#') {
                newOption.push([value,newNumber.length-1]);
                lastIndex = index+1;
            }
        })
        newNumber = newBonus.map((val,index)=>Math.pow(newNumber[index], bonus[val]))
        if(newOption.length>0){
          newOption.forEach((val,index)=>{
                if(val[0] === '#') newNumber[val[1]] =  -(newNumber[val[1]]);
                if(val[0] === '*' && newNumber[val[1]-1]){
                    newNumber[val[1]] = newNumber[val[1]]*2
                    newNumber[val[1]-1] = newNumber[val[1]-1]*2
                }
                if(val[0] === '*' && val[1]=== 0) newNumber[val[1]] = newNumber[val[1]]*2;
            })
        }
        return(newNumber.reduce((acc,cur)=> acc+cur));
    }

    return divideResult(dartResult);

}

console.log(solution("1S*2T*3S"))




