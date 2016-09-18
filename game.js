// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.

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
  // minBet: 10, Might use it later
  // maxBet:90, Might use it later
  initCredit: 100,
	bet: 10,
	// gameSetup: function(){
	//
	// },

	bankroll: function(){
		if(App.initCredit>0){
			//App.initCredit = App.initCredit-bet
			 App.initCredit -=10;
			console.log(App.initCredit);
			 }
		else{
				 console.log("Get more money");
			}
	},

	startGame: function(){
		deck = new Deck();
		console.log(deck);
		deck.shuffle();
		App.bankroll();

		var tempPlayer = deck.draw(2);
			for (var i=0; i<tempPlayer.length; i++){
				App.playerCards.push(tempPlayer[i]);
			}
		// App.playerCards.push(deck.draw(2));
		console.log(App.playerCards);
		var showPlayerCards = $("dealer-cards").append()
		showPlayerCards.html = App.playerCards.name;

		var tempDealer = deck.draw(2);
			for (var i=0; i<tempDealer.length; i++){
				App.dealerCards.push(tempDealer[i]);
			}
		// App.dealerCards.push(deck.draw(2));
		console.log(App.dealerCards);
	},

	playerHit: function(){
		// if(App.playersCanPlay(App.playerCards)<21){
		 //App.initCredit = App.initCredit-bet

				// 	App.startGame();
        if(App.playersCanPlay(App.playerCards)<21){
			    var tempPlayer = deck.draw(1);
				  for (var i=0; i<tempPlayer.length; i++){
					  App.playerCards.push(tempPlayer[i]);
						console.log(App.playersCanPlay(App.playerCards));
					}
				}
				// console.log(App.playersCanPlay(App.playerCards));
				// console.log(App.initCredit);
				else {
			  	// console.log(App.playersCanPlay(App.playerCards));
					console.log("You are REALLY busted!");
				}
				return (App.playersCanPlay(App.playerCards));
	},

	playersCanPlay: function(hand){
		var total = 0;
		for ( var i = 0; i < hand.length; i++ ) {
				// total += hand[i]["value"];
				total += hand[i]["points"];
		}
		return total;
	},

	Otherbet: function(){
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
};

//User Interface
var UI = {

	onClickStart: function(){
		// console.log("These are the player cards");
		// console.log(App.playerCards);
		App.startGame();
		$("#start").attr("disabled", true);
		return true;
	},

	onClickHit: function(){
		if(App.playersCanPlay(App.playerCards)<21){
			var cardTotal = App.playerHit();
			// console.log(cardTotal);
			if (cardTotal>21){
				console.log(App.playerCards);
				alert("You are busted!!!");
			}
		}
		// console.log(App.playersCanPlay(App.playerCards));
	},

	onClickStand: function(){
		console.log("Hello from Stand button");
	},

	onClickNewHand: function(){

		// $('form').trigger("reset");
		// App.startGame();
		console.log("Hello from New Hand button");
	},

	onClickBet: function(){
		var betValue = $( "#bet").val();
		console.log(betValue);
	},

	onClickQuit: function(){
		console.log("Game Summary");
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
