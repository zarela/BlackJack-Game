// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.


//**might be back
// function Player (bankroll, playerCards, finalPoints){
// 	this.bankroll = bankroll;
// 	this.playerCards = playerCards;
// 	this.finalPoints = finalPoints;
// }
//
// //Function card where value is the card number and points represents card points for the game
// function Card(value, name, suit, points){
// 	this.value = value;
// 	this.name = name;
// 	this.suit = suit;
// 	this.points = points;
// }
//
// //Counter is position at zero becasue is the position of the card in the shuffle deck.
// var counter = 0;
// //Function to make all cards in a deck
// function Deck(){
// 	this.cards = [];
// }
//
// Deck.prototype.reset = function(){
// 	var names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// 	var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// 	var suits = ['Hearts','Diamonds','Spades','Clubs'];
//
// 	for( var s = 0; s < suits.length; s++ ) {
// 			for( var n = 0; n < names.length; n++ ) {
// 					this.cards.push( new Card( n+1, names[n], suits[s], points[n] ) );
// 			}
// 	}
// }
// //** end of be back

function Card(value, name, suit, points){
	// this.value = value;
	this.name = name;
	this.suit = suit;
	this.points = points;
}

function Deck(){
	this.cards = [];
	this.reset();
}

Deck.prototype.reset = function(){
	this.cards = [];
	var names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	var suits = ['Hearts','Diamonds','Spades','Clubs'];

	for( var s = 0; s < suits.length; s++ ) {
			for( var n = 0; n < names.length; n++ ) {
					this.cards.push( new Card( n+1, names[n], suits[s], points[n] ) );
			}
	}
}

Deck.prototype.draw = function(number){
	var drawnCards = [];
	for (var i=0; i<number  ;i++){
		drawnCards.push(this.cards.pop());
	}
	// console.log(drawnCards);
	return drawnCards;
}

Deck.prototype.shuffle = function(){
	var deck = this;
    var shuffledCards = [];

    for( var b = 0; b < deck.cards.length; b++ ) {
        var randomNumber =  Math.floor(Math.random() * (deck.cards.length ) );
        shuffledCards.push((deck.cards[randomNumber]));
    }
	this.cards = shuffledCards;
}

var App = {
	playerCards: [],
	dealerCards:[],
	player: null,
	dealer: null,
  minBet: 10,
  maxBet:90,
  initCredit: 100,
  initBet: 10,

	// gameSetup: function(){
	//
	// },

	startGame: function(){
		deck = new Deck();
		console.log(deck);
		deck.shuffle();
		var tempPlayer = deck.draw(2);
			for (var i=0; i<tempPlayer.length; i++){
				App.playerCards.push(tempPlayer[i]);
			}
		// App.playerCards.push(deck.draw(2));
		console.log(App.playerCards);
		var tempDealer = deck.draw(2);
			for (var i=0; i<tempDealer.length; i++){
				App.dealerCards.push(tempDealer[i]);
			}
		// App.dealerCards.push(deck.draw(2));
		console.log(App.dealerCards);
	},

	playerHit: function(){
		// if(App.playersCanPlay(App.playerCards)<21){
		if(App.initCredit>0){
			 App.initCredit -=10; //App.initCredit = App.initCredit-bet
        if(App.playersCanPlay(App.playerCards)<21){
			    var tempPlayer = deck.draw(1);
				  for (var i=0; i<tempPlayer.length; i++){
					  App.playerCards.push(tempPlayer[i]);
				}

				console.log(App.playersCanPlay(App.playerCards));
				console.log(App.initCredit);
			}else {
					console.log("You are busted!");
				}

		}

		else{
			console.log("Get more money");
		}

	},

	playersCanPlay: function(hand){
		var total = 0;
		for ( var i = 0; i < hand.length; i++ ) {
				// total += hand[i]["value"];
				total += hand[i]["points"];

		}
		// console.log(total);
		return total;
	},

	bet: function(betNumber){
		//Allows player to make a bet with whatever number as long is more than 10 and less than the amount he has in his bankroll.
		//If he has no money left, then game is over and dealer should play
	},

	potMoney: function(){
		//holds the money in the bet and send the money to the winner of the game.
	},

	stand: function(){
		//player stop playing and is now the turn of the dealer to play
	},

	dealerhit: function(){
		// he wil get another card as long is not over 17, if he passes 17, then he stops and points get compared to player points
	},


	//returns all cards shuffled

	//*** might be back
  // shuffle: function(){
	// 	var deck = new Deck();
  //   var shuffledCards = [];
  //   // loop over cards, remove a random card from deck, add it to shuffleddeck array
  //     for( var b = 0; b < deck.cards.length; b++ ) {
  //       // get a random number from 0 to deck.length
  //       var randomNumber =  Math.floor(Math.random() * (deck.cards.length ) );
  //       shuffledCards.push((deck.cards[randomNumber]));
  //     }
	// 		//console.log(shuffledDeck);
  //     return shuffledCards;
  // },
	//end ***

	//Updates cards, bankroll and points for dealer and players
	//**Be back**
	// setup: function (){
	// 	App.shoe = App.shuffle();
	// 	App.player = new Player();
	// 	App.dealer = new Player();
	//
  //  console.log(App.shoe);
	//  	App.deal();
	// },

	// deal:function(){
	// 	// var shuffled = this.shuffle(deck());
	// 	// counter +=1;
	// 	// this.playerCards.push(shuffled[counter]);
	// 	// console.log(this.playerCards[0]);
	// 	// counter +=1;
	// 	// this.playerCards.push(shuffled[counter]);
	// 	// console.log(this.playerCards[1]);
	//
	// 	//Returns two random cards
	// 	App.nextCard();
	// 	App.nextCard();
	//
	// },
	//
  // nextCard:function(player){
	// 	var temp = 	App.shoe.pop();
	// 	App.playerCards.push(temp);
	// 	// console.log(App.playerCards);
	//
  // },
	//
  // hit: function(){
	// 	if((App.playerCards[0].value + App.playerCards[1].value) < 21){
	// 		App.nextCard();
	// 	}
	// 	else {
	// 		console.log("You lost");
	// 	}
  // },
	//
	// stand: function(){
	// 	//stops player from receiving cards
	// 	//updates the value of the hand
  // },
  // displayingCards: function(){
  //   // once dealer has stoped playing, cards should go to array of points
  //   // player cards should go to its own
  // },
	// calculateHandValue: function(){
	// //calculates points from playerCards array
	// },
	//
  // decidingWinner: function(){
  //   // winner with the accurate points will be declared a winner
  // },
	//
  // cleanUp: function(){
  //   // game will finish
  //   // if user has 0 coins
  //   // else if clicks restart
  //   // else if quits game
  // },

};

var UI = {
	onClickStart: function(){
		// App.setup();
		// console.log("This are the player cards");
		// console.log(App.playerCards);
		App.startGame();
	},

	onClickHit: function(){
		App.playerHit();
		console.log(App.playerCards);
	},

	onClickStand: function(){
		console.log("Hello from Stand button");
	},

	onClickNewHand: function(){
		console.log("Hello from New Hand button");
	},

	onClickBet: function(){
		console.log("Hello from Bet button");
	},

	onClickQuit: function(){
		console.log("Hello from Quit button");
	},

	onClickReset: function(){
		console.log("Hello from Reset button");
		location.reload();
	},
}


//My event listeners for game buttons
window.onload = function(){
  //Event handler for starting the game
  $('#start').on('click', UI.onClickStart);
  //Event handler for reseting the game or ask for a new game
  $('#reset').on('click', UI.onClickReset);
  //Event handler for quitting the game
  $('#quit').on('click', UI.onClickQuit);
	//Event handler for getting another card
  $('#hit').on('click', UI.onClickHit);
	//Event handler for stop receiving cards
  $('#stand').on('click', UI.onClickStand);
	//Event handler for re-starting the game
  $('#new-hand').on('click', UI.onClickNewHand);
	//Event handler for making bets
  $('#bet-button').on('click', UI.onClickBet);

}
