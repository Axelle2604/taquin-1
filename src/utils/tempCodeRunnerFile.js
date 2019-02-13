const createColumn = (nb, line, result = [], column = 0) => {
  if (column === nb - 1) {
    return [
      ...result,
      {
        id: line * nb + column,
        position: { x: line, y: column },
        bgPosition: { x: -column, y: -line },
      },
    ];
  }
  return createColumn(
    nb,
    line,
    [
      ...result,
      {
        id: line * nb + column,
        position: { x: line, y: column },
        bgPosition: { x: -column, y: -line },
      },
    ],
    column + 1
  );
};
const createBoard = (nb, line = 0, result = []) => {
  if (line === nb - 1) {
    return [...result, ...createColumn(nb - 1, line)];
  }
  return createBoard(nb, line + 1, [
    ...result,
    ...createColumn(nb, line),
  ]);
};

console.log(createBoard(2))