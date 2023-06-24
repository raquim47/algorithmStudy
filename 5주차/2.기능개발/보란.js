function solution(progresses, speeds) {
    const answer = [];
    let finished = 0;
    
    while (progresses.length > 0) {     
        for (let i = 0; i < progresses.length; ++i) {
            progresses[i] += speeds[i];
        }
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            ++finished;
        }
        if (finished > 0) {
            answer.push(finished);
            finished = 0;
        }
    }
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //	[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //	[1, 3, 2]