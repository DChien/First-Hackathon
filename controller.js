/*Take Special action (Choosing either to use item, or look at other parts of the map, or to roll dice)

Take a turn by rolling dice (click the dice button)

Increase money


Click the board to decide where to go on the board (board click button)

Special effects that might happen:
	If land on shop square, need a button to handle the shop (included in the board click button)

	Modify any changes that might happen with the money, stamps, or items


---------------------------------------------------------

Step 0: Options are to begin turn/can look around the map;
Step 1: Choose which option to take: Roll dice or use item;
Step 2: Rolled dice and now moving;






var step = 0;
var allowedMovements;

function nextStep(step) {
	if (step < 2) {
		step += 1;
	} else {
		step = 0;
	}
}

function diceButton() {
	first figure out which dice to select;

	if (step == 2        /////////current step is to roll the dice) {
		rollDice;
		step += 1;
	} else {
		do nothing;
	}
}

function boardButton() {
	clickedSquare = square that was clicked;

	if (step == 0 && clickedSquare == boardSquare) {
		explains about the clicked square;
	} else if (step == 2 && isLegalMove(currentPlayer, board, clickedSquare, allowedMovements)) {
		board.movePlayer(player, clickedSquare);
		nextStep(step);
	} else if (step == 1 && clickedSquare == useItemSquare) {
		go to useItem menu;
	} else if (step == 1 && clickedSquare == rollDice) //&& current step is to decide what action to take i.e to move, use item, to quit) {
		go to rollDice menu;
		nextStep(step);
	} 
}
	
function useItemButton() {
	clickedOption = option that was clicked;       /////figure out which item was selected or if selectd option was to go back;
	if (clickedOption == go back) {
		go back to the previous menu;
	} else {
		currentPlayer.usePowerup(clickedOption);
		go to map to choose which player to use it on;
	}
}



	 Button for when starting to shop 
function shopButton() {
	clickedOption = option that was clicked;        ///////figure out which option is selected i.e. to shop or to leave;
	if (clickedOption == go back) {
		go back to game board;
	} else if (clickedOption == to shop) {
		open up the available items menu;
	}
}










	Button for when actually starting to shop for items 
	function makeShopItemsButton(item) {
		return function shopItemsButton() {
			clickedOption = option or item that is selected          /////////figure out which option is selected i.e. to purchase a particular item or to go back;
			if (option selected was to go back) {
				go back to the shop menu;
			} else if (clickedOption == item) {
				if (player.money >= clickedOption.price) {
					currentPlayer.buyPowerup(selectedPowerup, currentPlayer.money, clickedOption.price);
				} else {
					Display "not enough money" message
				}
			}
		}
	}





	 Button for when clicking on other characters 
	function characterButton() {
		first figure out which character to select;

		if (step == 0) {
			give information on the character selected;
		} else if (step == 1 && currentPlayer.itemToUse != null) ///////current step is to select which character to use an item on) {
			currentPlayer.itemToUse();
		} 
	}*/


	







var players;
var baseValue = 7;
var currentPlayer = new Player("Derric", 2, 2);
//function moveButton() {
	//goes to choosing move menu;
//}

function chooseMoveButton() {
	chosenMove = $('#move-amount').val();
	currentPlayer.money += (baseValue - chosenMove);
	nextStep(step);
}

/*

function useItemButton() {
	go to select item menu;
}

function chooseItemButton() {
	selectedItem = dfdjfkdf
	go to fundersSelection menu;
}

function selectFundersButton() {
	create list of funders that are clicked
	if (all the funding is enough) {
		currentPlayer.usePowerup(selectedPowerup)
	}
}

*/
function fundButton() {
	var totalFunds = $('player0fund').val() + $('player1fund').val() + $('player2fund').val() + $('player3fund').val();
	if (totalFunds == 10) {
		alert("funds is 10");
	}
	//if (totalFunds < item.price) {
		//alert("Not enough funds!");
	//} else {
		//currentPlayer.itemToUse = item;
	//}
}


/*
function nextStep(step) {
	if (step < 2) {
		step += 1;
	} else {
		step = 0;
		c
	}
}


function boardButton() {
	if (step == 0) {
		explains about board square that was clicked;
	} else if (step == 2 && isLegalMove(currentPlayer, board, clickedSquare.xvalue, clickedsquare.yvalue, allowedMovements)) {
		board.movePlayer(player, clickedSquare.xvalue, clickedsquare.yvalue);
		nextStep(step);
}


function characterButton() {
	if (step == 0) {
		explains about the character that was clicked;
	} else if (step == 1 && currentPlayer.itemToUse != null) {
		currentPlayer.itemToUse();
		return to ChooseAction menu
	}
}*/





