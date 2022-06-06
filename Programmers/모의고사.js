
const solution = (answers) =>{
    const N1 = [1,2,3,4,5];
    const N2 = [2,1,2,3,2,4,2,5];
    const N3 = [3,3,1,1,2,2,4,4,5,5];
    const counter = [0,0,0];
    const highers = [];

    const compareAnswer = (answers) =>{
         answers.map((value, key) => {
            counter[0] += (value === N1[key%N1.length]) ? 1 : 0;
            counter[1] += (value === N2[key%N2.length]) ? 1 : 0;
            counter[2] += (value === N3[key%N3.length]) ? 1 : 0;
        })
    }

    const higher = () =>{
        const maxNum = Math.max(...counter);
        counter.forEach((value,index)=> value===maxNum ? highers.push(index+1) : 0);
    }

    compareAnswer(answers);
    higher();

    return highers;
}