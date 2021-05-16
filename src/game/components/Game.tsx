import { useEffect, useState, useCallback, memo } from 'react';
import search from '../utils/search';
import ListDetail from './ListDetail';
import judgePlayable from '../utils/judgePlayable';
import howManyMoreStonesThanWhite from '../utils/howManyMoreStonesThanWhite';
import ShowWinner from './ShowWinner';

type Stone = null | boolean;
type UseGame = () => [
  board: Stone[][],
  handleBoard: (x: number, y: number) => void,
  winner: 0 | 1 | 2 | null,
  isPlayerBlack: boolean,
  reset: () => void,
];

const useGame: UseGame = () => {
  const boardWidth = 4;

  const makeEmptyBoard = useCallback(
    (size: number): Stone[][] =>
      Array(size)
        .fill(null)
        .map(() => Array(size).fill(null) as null[]),
    [],
  );

  const initBoard = useCallback(
    (size: number): Stone[][] => {
      const empBoard = makeEmptyBoard(size);
      empBoard[size / 2 - 1][size / 2] = true;
      empBoard[size / 2][size / 2 - 1] = true;
      empBoard[size / 2 - 1][size / 2 - 1] = false;
      empBoard[size / 2][size / 2] = false;

      return empBoard;
    },
    [makeEmptyBoard],
  );

  const [isPlayerBlack, setIsPlayerBlack] = useState(true);

  const [step, setStep] = useState(0);
  const [winner, setWinner] = useState<null | 0 | 1 | 2>(null);
  const [board, setBoard] = useState(initBoard(boardWidth));

  const handleBoard = useCallback(
    (x: number, y: number) => {
      if (board[x][y] !== null) return;

      const [result, newBoard] = search(board, x, y, isPlayerBlack);
      if (result === false) return;

      setStep((prev) => prev + 1);
      setBoard(newBoard);
    },
    [board, isPlayerBlack],
  );

  const reset = useCallback(() => {
    setWinner(null);
    setBoard(initBoard(boardWidth));
    setIsPlayerBlack(true);
    setStep(0);
  }, [initBoard, boardWidth]);

  useEffect(() => {
    reset();
  }, [boardWidth, reset]);

  useEffect(() => {
    const handleGameEnd = (): void => {
      // boardを呼びたくない（関数に与えられたもの以外を使うと副作用を作りかねない）が、useEffectからhandleGameEnd(board)とするとeslint-disableすることになるので・・・
      const blackMinusWhite = howManyMoreStonesThanWhite(board);
      if (blackMinusWhite > 0) setWinner(0);
      else if (blackMinusWhite < 0) setWinner(1);
      else if (blackMinusWhite === 0) setWinner(2);
    };

    // 初期化のstate変更に反応しない
    if (step === 0) {
      //
    } else if (step === boardWidth ** 2 - 4) {
      handleGameEnd();
    } else {
      const { black, white } = judgePlayable(board);
      const nextPlayer = !isPlayerBlack;
      if (!black && !white) {
        handleGameEnd();
      } else if (nextPlayer ? black : white) {
        // 黒が手番で黒が打てる場所がない場合、手番をスキップする。（白も同様） ===  次の手番のプレイヤーがプレイ可能な場合のみ、toggle(isPlayerBlack);
        setIsPlayerBlack((prev) => !prev);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, setWinner, step]);

  return [board, handleBoard, winner, isPlayerBlack, reset];
};

const Game = memo((): JSX.Element => {
  const [board, handleBoard, winner, isPlayerBlack, reset] = useGame();

  return (
    <div className="w-320">
      <ListDetail arr={board} handleBoard={handleBoard} />
      <ShowWinner winner={winner} isPlayerBlack={isPlayerBlack} />
      <button
        type="button"
        onClick={reset}
        className="mx-auto my-12 p-3 w-24 bg-yellow-200 border-yellow-400 rounded-2xl shadow-md"
      >
        リセット
      </button>
    </div>
  );
});

export default Game;
