const solution = (N,stages) =>{
    let nodeList = [];
    function Node(users=undefined,  num=undefined){
        this.stageUsers = users;  // 해당 스테이지에 도달한 유저
        this.number = num; // 스테이지 넘버
        this.failureRate = undefined; // 실패율
    }

    const splitStages = (stages) => { // 스테이지 넘버 별로 분리 1단계, 2단계 ....
        stages.sort();
        let userCount = 0;

        for(let i = 0; i< stages.length; i++){

            if(i!==0){
                if(stages[i-1] !== stages[i]){ // 새로운 단계를 만나면
                    nodeList.push(new Node(userCount,stages[i-1]));
                    userCount = 1; // 유저 수 초기화
                    if (i === stages.length -1) { // 맨 끝 단계일 경우
                        nodeList.push(new Node(userCount,N));
                    }
                }
                else { // 같은 단계면
                    ++userCount; // 해당 단계의 유저 수 +1
                    if (i === stages.length -1) {
                        nodeList.push(new Node(userCount,N));
                    }
                }
            }
            else{
                ++userCount;
            }
        }
    }

    const calculateFailRate = (arr) =>{
        let tmpN = stages.length;
        for(let i = 0; i<arr.length; i++){
            if(i !== arr.length-1){
                arr[i].failureRate = arr[i].stageUsers /tmpN;
                tmpN = tmpN - arr[i].stageUsers;
            }
            else if (i === arr.length-1) arr[i].failureRate=arr[i].stageUsers/stages.length;
        }
    }

    const reSortArray = (arr) => {
        for(let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length;j++){
                if(arr[j].failureRate > arr[i].failureRate){
                    let tmp = arr[i]
                    arr[i] =arr[j]
                    arr[j] =tmp;
                }
            }
        }
    }

    splitStages(stages);
    if(nodeList.length===1){
        let tmp = [];
        tmp.push(N);
        for(let i = 1; 1<N; i++){
            tmp.push(i);
        }
        return tmp;
    }
    calculateFailRate(nodeList);
    reSortArray(nodeList);
    return nodeList.map(value=> value.number);
}

console.log(solution(5,[4,4,4,4,4]))

