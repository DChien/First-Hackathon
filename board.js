/*  Implementation for the board of a game. */

/* ****************************************************************************
 * PUBLIC METHODS
 * 
 * Methods below can be called outside of the file.
 * ****************************************************************************/

/* Creates board object and returns the resulting board. */
function generateBoard() {
  options = queryBoardCustomization();
  if (options[0] != -1) {
    return generatePrebuiltBoard(options[0]);
  }
  return generateRandomBoard(options[1], options[2]);
}

function queryBoardCustomization() {
  return [0, 0, 0];
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
 * */
function generateCustomBoard(x, y, layout) {
  board = [];
  for (var i = 0; i < layout.length; i += 1) {
    var row = layout[i];
    board[i] = [];
    for (var j = 0; j < row.length; j += 1) {
      board[i][j] = makeSpace();
      if (layout[i][j] > 0) {
        board[i][j].isWall = false;
        if (layout[i][j] == 2) {
          board[i][j].stamp = true;
        }
      }
    }
  }
  return board;
}

/* Generates an HTML representation of a board. */
function outputBoard(board) {
  outputSpaces(board);
  addPlayers();
  return null;
}

/* Adds a PLAYER to a random spot on the BOARD. */
function addPlayer(player, board) {
  var pos = randomSpace(board);
  player.setPosition(pos[0], pos[1]);
  return null;
}

/* Moves a PLAYER on a BOARD to the position X, Y, assuming that the move is
 * legal. */
function movePlayer(player, board, x, y) {
  stamp = board[x][y].stamp;
  player.move(x, y, board[x][y].stamp);
  if (stamp) {
    removeStamp(board, x, y);
  }
  return null;
}

/* Given a PLAYER on a BOARD, and a X, Y position, and the number of SPACES that
 * the player can travel, returns TRUE iff the player can legally move to that
 * position. */
function isLegalMove(player, board, x, y, spaces) {
  return [x, y] in allLegalMoves(player, board, spaces);
}

/* Given a PLAYER on a BOARD and the number of SPACES that the player can
 * travel, returns an array of all legal positions that a player can move to. */
function allLegalMoves(player, board, spaces) {
  return bfs(board, player.x, player.y, spaces);
}

/* ****************************************************************************
 * PRIVATE METHODS
 *
 * Methods below may have undefined behaviour if called from outside of this 
 * file. 
 * ****************************************************************************/

function randomSpace(board) {
  var xMax = board.length;
  var yMax = board[0].length;
  while (true) {
    var x = Math.floor(Math.random() * xMax);
    var y = Math.floor(Math.random() * yMax);
    if (!board[x][y].stamp && !board[x][y].isWall) {
      return [x, y];
    }
  }
  return null;
}

function checkRandomSpace(board) {
  var pos = randomSpace(board);
  return (board[pos[0]][pos[1]]).isWall;
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
        $("#row" + i).append(classes + i + "-" + j + close);
      } else {
        $("#row" + i).append(classes + i + "-" + j + close);
      }
    }
  }
  return null;
}

function addPlayers() {
  for (var i = 0; i < players.length; i += 1) {
    players[i].updatePosition(players[i].x, players[i].y);
  }
  return null;
}

function removeStamp(board, x, y) {
  board[x][y].stamp = false;
  $("#space" + x + "-" + y).removeClass("stamp");
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

function validSpace(board, x, y) {
  if (x >= 0 && y >= 0 && x < board.length && y < board[0].length) {
    return !(board[x][y].isWall);
  }
  return false;
}

function adjacent(board, x, y) {
  legal = [];
  if (validSpace(board, x + 1, y + 1)) {
    legal.push([x + 1, y + 1]);
  }
  if (validSpace(board, x + 1, y - 1)) {
    legal.push([x + 1, y - 1]);
  }
  if (validSpace(board, x - 1, y + 1)) {
    legal.push([x - 1, y + 1]);
  } 
  if (validSpace(board, x - 1, y - 1)) {
    legal.push([x - 1, y - 1]);
  }
  return legal;
}

function bfs(board, x, y, moves) {
  var valid = [];
  var visited = [[x, y]];
  var queue = [[[x, y], 0]];
  while (queue.length > 0) {
    var p = queue.shift();
    for (var adj in adjacent(board, p[0][0], p[0][1])) {
      if (p[1] == moves) {
        valid.push(p[0]);
      } else if (!(adj in visited)) {
        visited.push(adj);
        queue.push([adj, p[1] + 1]);
      }
    }
  }
  return valid;
}

function generatePrebuiltBoard(id) {
  if (id == 0) {
    var x = 12;
    var y = 12;
    var layout = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 2, 0, 2, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [2, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 2],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];        
  } else if (id == 9999) {
    var x = 2;
    var y = 2;
    var layout = [[1, 0], [0, 1]];
  }
  return generateCustomBoard(x, y, layout);
}
