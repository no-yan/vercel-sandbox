import React from 'react';

type InteractiveButtonProps = {
  element: boolean | null;
  x: number;
  y: number;
  handleGameBoard: (x: number, y: number) => void;
};

const InteractiveButton = ({
  element,
  x,
  y,
  handleGameBoard,
}: InteractiveButtonProps): JSX.Element => {
  const handleClick = () => {
    handleGameBoard(x, y);
  };

  const judgeColor = (color: null | boolean) => {
    switch (color) {
      case true:
        return 'bg-black';
      case false:
        return 'bg-white';
      default:
        return '';
    }
  };

  return (
    <li className="inline-flex py-0 w-20 h-20 bg-puregreen border-4 border-double border-black outline-none focus:outline-none">
      <button
        className={`h-16 w-16 flex justify-center items-center mx-auto outline-none my-auto m-5 focus:outline-none ${judgeColor(
          element,
        )}
          ${element !== null ? 'border-black rounded-full' : ''}`}
        type="button"
        onClick={handleClick}
        key={x * 100 + y}
        aria-label={`Reversi stone-${element ? 'black' : 'white'}`}
      />
    </li>
  );
};

export default React.memo(InteractiveButton);
