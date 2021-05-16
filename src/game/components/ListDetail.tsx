import React from 'react';
import InteractiveButton from './InteractiveButton';

type Props = {
  arr: (boolean | null)[][];
  handleBoard: (x: number, y: number) => void;
};

type ColumnProps = {
  column: (boolean | null)[];
  x: number;
  handleBoard: (x: number, y: number) => void;
};
const Column: React.FC<ColumnProps> = ({ column, x, handleBoard }) => (
  <div key={x}>
    {column.map((element, y) => (
      <InteractiveButton
        element={element}
        x={x}
        y={y}
        // eslint-disable-next-line react/no-array-index-key
        key={x * 100 + y}
        handleGameBoard={handleBoard}
      />
    ))}
  </div>
);

const ListDetail: React.FC<Props> = ({ arr, handleBoard }: Props) => (
  <div>
    {arr.map((column, x) => (
      // eslint-disable-next-line react/no-array-index-key
      <Column column={column} key={x} x={x} handleBoard={handleBoard} />
    ))}
  </div>
);

export default ListDetail;
