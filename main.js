let board = [[5, 4, 3, 2, 1],
             [],
             []];

const printBoard = function() {
  const currentBoard = board.map(function (peg) {
    return "---" + peg.join(" ");
  });

  currentBoard.map(function (peg) {
    console.log("peg", peg);
  });
}

const checkWinner = function () {
  if (board[1].length === 5 || board[2].length === 5) {
    console.log("Congratulations, you are a genius!");
    board = [[5, 4, 3, 2, 1],
             [],
             []];
  }

  return;
}

const moveDisc = function (sourcePeg, targetPeg) {
  let successfulMove = "That move was successful, board is now:";
  let error = "You cannot move a larger disc on top of a smaller one, board is still:";
  
  let originPeg = board [sourcePeg - 1];
  let moveToPeg = board [targetPeg - 1];

  if (moveToPeg.length === 0) {
    moveToPeg.push(originPeg.pop());
    console.log(successfulMove);
  } else 
  if (moveToPeg[moveToPeg.length - 1]  > originPeg[originPeg.length - 1]) {
    moveToPeg.push(originPeg.pop());
    console.log(successfulMove);
  } else {
    console.log(error);
  }

  checkWinner();
  printBoard();
}

printBoard();