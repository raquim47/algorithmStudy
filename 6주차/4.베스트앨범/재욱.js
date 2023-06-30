// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(genres, plays) {
  let answer = [];
  let gMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (gMap.has(genres[i])) gMap.set(genres[i], gMap.get(genres[i])+plays[i])
    else gMap.set(genres[i], plays[i]) 
  }
  // console.log(gMap);

  let descArray = [...gMap];
  descArray.sort((a, b) => b[1]-a[1]);
  let descMap = new Map(descArray);
  // console.log(descMap);

  let genreSongs = [];
  while (descMap.size > 0) {
    let max = [...descMap.keys()][0];
    genres.filter((genre, idx) => {
      if (genre === max) genreSongs.push([idx, plays[idx]]);
    });
    // console.log(genreSongs);
    genreSongs.sort((a, b) => b[1]-a[1]).splice(2);
    // console.log(genreSongs);
    while (genreSongs.length > 0) {
      answer.push(genreSongs.shift()[0]);
    }
    descMap.delete(max);
  }

  return answer;
}


// console.log(
//   solution(
//     ['classic', 'pop', 'classic', 'classic', 'pop'],
//     [500, 600, 150, 800, 2500]
//   )
// ); //	[4, 1, 3, 0]

console.log(
  solution(
    ['classic', 'pop', 'rock', 'classic', 'pop', 'rock', 'pop', 'hiphop'],
    [500, 600, 150, 500, 2500, 1200, 600, 2300]
  )
); //	[4, 1, 7, 5, 2, 0, 3]