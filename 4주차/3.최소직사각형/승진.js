function solution(sizes) {
  let maxX = -1;
  let maxY = -1;

  for (let i = 0; i < sizes.length; i++) {
    const card = sizes[i];
    if (card[0] > card[1]) {
      [card[0], card[1]] = [card[1], card[0]];
    }

    if (maxX < card[0]) {
      maxX = card[0];
    }

    if (maxY < card[1]) {
      maxY = card[1];
    }
  }

  return maxX * maxY;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);