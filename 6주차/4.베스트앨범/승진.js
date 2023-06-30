// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution(genres, plays) {
  const db = {};
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    if (!db[genre]) {
      db[genre] = { songs: [], totalPlay: 0 };
    }
    db[genre].songs.push({ id: i, play });
    db[genre].totalPlay += play;
  }

  const genreList = Object.values(db).sort((a, b) => b.totalPlay - a.totalPlay);
  const answer = [];
  for (let genre of genreList) {
    genre.songs.sort((a, b) => {
      if (b.play === a.play) return a.id - b.id;
      return b.play - a.play;
    });
    answer.push(...genre.songs.slice(0, 2).map(song => song.id));
  }

  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
); //	[4, 1, 3, 0]
