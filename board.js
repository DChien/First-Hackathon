/*  Implementation for the board of a game. */

/* ****************************************************************************
 * PUBLIC METHODS
 * 
 * Methods below can be called outside of the file.
 * ****************************************************************************/

/* Creates a board object according to an array of string PARAMETERS, and
 * returns the resulting board. */
function generateBoard(x, y, parameters) {
  board = new Array();
  for (var i = 0; i < x; i += 1) {
    var row = new Array();
    for (var j = 0; j < y; j += 1) {
      row[j] = makeSpace();
    }
    board[i] = row
  return nil;
}

function generateCustomBoard() {
  return nil;
}

function outputBoard() {
  return nil;
}

/* Adds a PLAYER to the BOARD. */
function addPlayer(player, board) {
  return nil;
}

/* Moves a PLAYER on a BOARD to a POSITION, assuming that the move is legal. */
function movePlayer(player, board, position) {
  return nil;
}

/* Adds an ITEM to a random space on the BOARD that does not already contain
 * anything. */
function addItem(item, board) {
  return nil;
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
  return nil;
}

function makeSpace() {
  return {isWall:false, item:null, stamp:null, shop:false}
}
