/*  Implementation for the board of a game. */

/* ****************************************************************************
 * PUBLIC METHODS
 * 
 * Methods below can be called outside of the file.
 * ****************************************************************************/

/* Creates an X by Y board object according to an array of string PARAMETERS,
 * and returns the resulting board. The parameters that are accepted:
 *    --STAMPS=<N>    -Adds N stamps to the board
 *    --CUSTOM=<ID>   -Uses a custom map as specified by ID instead of randomly
 *                     generating a board
 *    --SEED=<V>      -Uses the seed V to generate the board
 *    */
function generateBoard(x, y, parameters) {
  board = generateBlankBoard(x, y);
  return board;
}

/* Generates a small test 2x2 board */
function generateTestBoard() {
  board = generateBlankBoard(2, 2);
  board[0][0].isWall = false;
  board[1][1].isWall = false;
  return board;
}

/* Generates a custom X by Y board, whose LAYOUT is specified as an array of an
 * array of numbers. The numbers are represent the following spaces:
 *     0 - A wall
 *     1 - An empty space
 *     2 - A stamp
 *     3 - A shop
 * */
function generateCustomBoard(x, y, layout) {
  board = [];
  var stampCount = 0;
  for (var i = 0; i < layout.length; i += 1) {
    var row = layout[i];
    board[i] = [];
    for (var j = 0; j < row.length; j += 1) {
      board[i][j] = makeSpace();
      if (layout[i][j] > 0) {
        board[i][j].isWall = false;
        if (layout[i][j] == 2) {
          board[i][j].stamp = true;
          stampCount += 1;
        } else if (layout[i][j] == 3) {
          board[i][j].shop = true;
        }
      }
    }
  }
  return board;
}

/* Generates an HTML representation of a board. */
function outputBoard(board) {
  outputSpaces(board);
  return null;
}

/* Adds a PLAYER to a random spot on the BOARD. */
function addPlayer(player, board) {
  var pos = randomSpace(board);
  player.x = pos[0];
  player.y = pos[1];
  return null;
}

/* Moves a PLAYER on a BOARD to the position X, Y, assuming that the move is
 * legal. */
function movePlayer(player, board, x, y) {
  player.x = pos[0];
  player.y = pos[1];
  if (board[x][y].stamp) {
    removeStamp(board, x, y);
  }
  return null;
}

/* Given a PLAYER on a BOARD, and a X, Y position, and the number of SPACES that
 * the player can travel, returns TRUE iff the player can legally move to that
 * position. */
function isLegalMove(player, board, x, y, spaces) {
  return false;
}

/* Given a PLAYER on a BOARD and the number of SPACES that the player can
 * travel, returns an array of all legal positions that a player can move to. */
function allLegalMoves(player, board, spaces) {
  return new Array();
}

/* ****************************************************************************
 * PRIVATE METHODS
 *
 * Methods below may have undefined behaviour if called from outside of this 
 * file. 
 * ****************************************************************************/

function randomSpace(board) {
  return null;
}

function makeSpace() {
  return {isWall:true, stamp:false};
}

function outputSpaces(board) {
  var row_header = "<div class='row' id='row";
  var col_header = "<div class='space";
  var close = "'></div>";
  for (var i = 0; i < board.length; i += 1) {
    $("#game-container").append(row_header + i + close);
    var row = board[i];
    for (var j = 0; j < board.length; j += 1) {
      var classes = col_header;
      if (row[j].isWall) {
        classes += " wall";
      }
      if (row[j].stamp) {
        classes += " stamp";
      }
      classes += "' id='space";
      if (row[j].isWall) {
        $("#row" + i).append(classes + i + "," + j + close);
      } else {
        $("#row" + i).append(classes + i + "," + j + close);
      }
    }
  }
  return null;
}

function generateBlankBoard(x, y) {
  board = [];
  for (var i = 0; i < x; i += 1) {
    var row = [];
    for (var j = 0; j < y; j += 1) {
      row[j] = makeSpace();
    }
    board[i] = row
  }
  return board;
}

function randomSpace(board) {
  return [0, 0];
}
