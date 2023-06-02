function solution(info, query) {
    let answer = [];
    let map = {};

    function combination(array, score, start) {
        let key = array.join("");
        if (map[key]) map[key].push(score);
        else map[key] = [score];

        for (let i = start; i < 4; i++) {
            let temp = [...array];
            temp[i] = "-";
            combination(temp, score, i + 1);
        }
    }

    for (let i = 0; i < info.length; i++) {
        let [a, b, c, d, e] = info[i].split(" ");
        let score = parseInt(e);
        combination([a, b, c, d], score, 0);
    }

    for (let key in map) {
        map[key] = map[key].sort((a, b) => a - b);
    }

    for (let i = 0; i < query.length; i++) {
        let [a, , b, , c, , d, e] = query[i].split(" ");
        let score = parseInt(e);
        let key = a + b + c + d;

        if (map[key]) {
            let start = 0;
            let end = map[key].length;
            while (start < end) {
                let mid = Math.floor((start + end) / 2);

                if (map[key][mid] < score) start = mid + 1;
                else end = mid;
            }
            answer.push(map[key].length - start);
        } else {
            answer.push(0);
        }
    }

    return answer;
}
