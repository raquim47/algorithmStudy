function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b); 
    rocks.push(distance); 

    let left = 1;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); 
        let min = distance;
        let prev = 0;
        let removeCount = 0;

        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - prev < mid) { 
                removeCount++; 
            } else { 
                min = Math.min(min, rocks[i] - prev); 
                prev = rocks[i]; 
            }
        }

        if (removeCount > n) { 
            right = mid - 1; 
        } else { 
            answer = min; 
            left = mid + 1; 
        }
    }

    return answer; 
}