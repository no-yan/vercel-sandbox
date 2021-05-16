type Stone = null | boolean;
type Props = { black: boolean; white: boolean };

const judgePlayable = (board: Stone[][]): Props => {
  let canBlackPlay = false;
  let canWhitePlay = false;
  const boardWidth = board.length;

  const omitDuplicate = (array: Stone[]) => {
    const noSequence = array.filter(
      (element, ind, arr) =>
        element !== arr[Math.min(array.length - 1, ind + 1)],
    ); // 配列の最後の要素は必ずfalseになるのでpushする
    noSequence.push(array[array.length - 1]);

    return noSequence;
  };

  const updateStatus = (
    black: boolean,
    white: boolean,
    result: boolean[],
  ): boolean[] => [black || result[0], white || result[1]];

  const judgeArrayReversible = (array: Stone[]): boolean[] => {
    let black = false;
    let white = false;

    // jに石を置くと裏返すことが可能か判定する
    for (let j = 0; j + 2 < array.length; j += 1) {
      // j+1の色によって裏返す色が決定する。
      if (
        array[j] === null &&
        array[j + 2] !== null &&
        array[j + 1] !== array[j + 2]
      ) {
        /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
        array[j + 1] === true ? (white = true) : (black = true);
      }
    }

    // 逆方向
    for (let k = array.length - 1; k - 2 >= 0; k -= 1) {
      if (
        array[k] === null &&
        array[k - 2] !== null &&
        array[k - 1] !== array[k - 2]
      ) {
        /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
        array[k - 1] === true ? (white = true) : (black = true);
      }
    }

    return [black, white];
  };

  // まずは縦横
  //   board.map((row) =>
  //     row.filter((element, ind, arr) => element !== arr[ind + 1]),
  //   );

  // 横
  for (let i = 0; i < boardWidth; i += 1) {
    // 隣が同色の石を省略する
    const noSequence = omitDuplicate(board[i]);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence),
    );
  }
  if (canBlackPlay === true && canWhitePlay === true)
    return {
      black: true,
      white: true,
    };

  // 縦
  for (let i = 0; i < boardWidth; i += 1) {
    const column = board.map((row) => row[i]);
    const noSequence = omitDuplicate(column);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence),
    );
  }
  if (canBlackPlay === true && canWhitePlay === true)
    return {
      black: true,
      white: true,
    };

  // ナナメ x + y = x' + y'
  for (let i = 0; i < boardWidth; i += 1) {
    // 初期値 x = 0, y = i delta x: +, y: -
    const column = board
      .map((row, ind) => board[ind]?.[i - ind])
      .filter((element) => element !== undefined);
    const noSequence = omitDuplicate(column);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence),
    );

    // 初期値 x = i, y = boardWidth delta x: +, y: -
    // [0,5]は二回チェックがかかっているが気にしない
    const column2 = board
      .map((row, ind) => board[i + ind]?.[boardWidth - ind])
      .filter((element) => element !== undefined);
    const noSequence2 = omitDuplicate(column2);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence2),
    );
  }

  // ナナメ x - y = x' - y'
  for (let i = 0; i < boardWidth; i += 1) {
    // 初期値 x = 0, y = i delta x: +, y: +
    const column = board
      .map((row, ind) => board[ind]?.[i + ind])
      .filter((element) => element !== undefined);
    const noSequence = omitDuplicate(column);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence),
    );

    // 初期値 x = i  y = 0 delta x: +, y: +
    const column2 = board
      .map((row, ind) => board[i + ind]?.[ind])
      .filter((element) => element !== undefined);
    const noSequence2 = omitDuplicate(column2);
    [canBlackPlay, canWhitePlay] = updateStatus(
      canBlackPlay,
      canWhitePlay,
      judgeArrayReversible(noSequence2),
    );
  }

  return {
    black: canBlackPlay,
    white: canWhitePlay,
  };
};
export default judgePlayable;
