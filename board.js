/*  Implementation for the board of a game. */

/* ****************************************************************************
 * PUBLIC METHODS
 * 
 * Methods below can be called outside of the file.
 * ****************************************************************************/

/* Creates a board object according to an array of string PARAMETERS, and
 * returns the resulting board. */
function generateBoard(x, y, parameters) {
  board = generateBlankBoard(x, y);
  return board;
}

function generateTestBoard() {
  board = generateBlankBoard(2, 2);
  board[0][0].isWall = false;
  board[1][1].isWall = false;
  return board;
}

function generateCustomBoard() {
  return null;
}

function outputBoard(board) {
  outputSpaces(board);
  return null;
}

/* Adds a PLAYER to the BOARD. */
function addPlayer(player, board) {
  return null;
}

/* Moves a PLAYER on a BOARD to a POSITION, assuming that the move is legal. */
function movePlayer(player, board, position) {
  return null;
}

/* Adds an ITEM to a random space on the BOARD that does not already contain
 * anything. */
function addItem(item, board) {
  return null;
}

/* Given a PLAYER on a BOARD, and a POSITION, and the number of SPACES that the
 * player can travel, returns TRUE iff the player can legally move to that
 * position. */
function isLegalMove(player, board, position, spaces) {
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
  return {isWall:false, item:null, stamp:null, shop:false}
}

function outputSpaces(board) {
  var space_header = "<div class='game_space' id='";
  var wall_header = "<div class='game_space game_wall' id='";
  var close = "'></div>";
  for (var i = 0; i < board.length; i += 1) {
    var row = board[i];
    for (var j = 0; j < board.length; j += 1) {
      if (row[j].isWall) {
        $("#game-container").append(wall_header + i + "," + j + close);
      } else {
        $("#game-container").append(space_header + i + "," + j + close);
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
