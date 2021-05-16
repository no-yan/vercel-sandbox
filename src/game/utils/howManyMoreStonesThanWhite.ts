type Stone = null | boolean;

// How many more stones does black have than white?
// コマの総数を数えて、黒の石-白の石の数を返す。
// ret>0 ? "黒の勝利" : ret===0 ? "引き分け" : "白の勝利"
const howManyMoreStonesThanWhite = (arr: Stone[][]): number => {
  const result = arr.map((row) =>
    row.reduce((acc, element) => acc + Number(element) * 2 - 1, 0),
  );
  // Number(null) === 0 なので。第2引数はaccの初期値
  // element ===true ? 1 : -1
  // 見づらいので二重reduceはしない

  return result.reduce((prev, curr) => prev + curr);
};

export default howManyMoreStonesThanWhite;
