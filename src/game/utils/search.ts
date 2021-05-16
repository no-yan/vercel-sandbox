type Search = (
  squareArray: (null | boolean)[][],
  x: number,
  y: number,
  playerColor: boolean,
) => [canReverse: boolean, board: (null | boolean)[][]];

const search: Search = (squareArray, x, y, playerColor) => {
  let canReverse = false;
  const board = squareArray;
  const boardWidth = squareArray.length;
  if (board[x][y] !== null) return [canReverse, board];
  const directions = [
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const [deltaX, deltaY] of directions) {
    let [newX, newY] = [x + deltaX, y + deltaY];

    while (newX >= 0 && newX < boardWidth && newY >= 0 && newY < boardWidth) {
      if (board[newX][newY] === null) break;

      if (board[newX][newY] === playerColor) {
        // 一マスしか進んでいない場合、何もはさめていないので手番は回らない。
        if (Math.max(Math.abs(newX - x), Math.abs(newY - y)) <= 1) break;

        canReverse = true;
        for (
          let i = 0;
          i < Math.max(Math.abs(newX - x), Math.abs(newY - y));
          i += 1
        ) {
          board[x + deltaX * i][y + deltaY * i] = playerColor; // 原点は何度も書き込みされる(bad)。理由は複数方向裏返せるかどうかの場合分けをしたくない
        }

        break;
      }
      newX += deltaX;
      newY += deltaY;
    }
  }

  return [canReverse, board];
};

export default search;
