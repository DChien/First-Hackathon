var itemsDictionary = {"steal" : {"cost" : example1cost, "effect" : stealEffect}, 
						"paralyze" : {"cost" : example2cost, "effect" : paralyzeEffect},
						"halfRoll" : {"cost" : example3cost, "effect" : halfEffect}, 
						"doubleRoll" : {"cost" : example4cost, "effect" : doubleEffect},
						"transportCharacter" : {"cost" : example5cost, "effect" : transportCharacterEffect},
						"skipTurn" : {"cost" : example6cost, "effect" : skipTurnEffect},
						"randomStampDecrease" : {"cost" : example7cost, "effect" : randomStampDecreaseEffect}};




function stealEffect(funders, targets) {
	stolenStampsNum = target[0].stampsAmount;
	target[0].stampsAmount = 0;
	figure out who gets how many stamps// Still need to do
	for (funder : funders) {
		funder.stampsAmount += amount to increase // still need to do
	}
}

function paralyzeEffect(funders, targets) {
	figure out who gets paralyzed by how many
	for (target : targets) {
		target is paralyzed for x many turns // still need to do 
	}
}

function halfEffect(funders, target) {
	target can only choose from half as many move choices
}

function doubleEffect(funders, target) {
	target can choose from twice as many move choices
}

function transportCharacterEffect(funders, target) {
	target is transported to some place
}
