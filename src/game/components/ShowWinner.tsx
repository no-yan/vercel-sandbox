import React from 'react';

type Props = { winner: null | 0 | 1 | 2; isPlayerBlack: boolean };

const ShowWinner = ({ winner, isPlayerBlack }: Props): JSX.Element | null => {
  if (winner !== null) {
    switch (winner) {
      case 0:
        return <p className="mx-auto w-full">黒プレイヤーの勝利です！</p>;
      case 1:
        return <p className="mx-auto w-full">白プレイヤーの勝利です！</p>;
      case 2:
        return <p className="mx-auto w-full">引き分けです</p>;
      default: {
        return null;
      }
    }
  } else return <p>{isPlayerBlack ? '黒' : '白'}の手番です</p>;
};

export default React.memo(ShowWinner);
