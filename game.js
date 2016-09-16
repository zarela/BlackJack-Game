// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.


//Player constructor to display dealer and player's status

function Players (backroll, playerCards, finalPoints){
	this.bankroll = bankroll;
	this.playerCards = playerCards;
	this.finalPoints = finalPoints;
}

//Function card where value is the card number and points represents card points for the game
function card(value, name, suit, points){
	this.value = value;
	this.name = name;
	this.suit = suit;
	this.points = points;
}

//Counter is position at zero becasue is the position of the card in the shuffle deck.
var counter = 0;
//Function to make all cards in a deck
function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s], this.points[n] ) );
        }
    }
    return cards;
}


var App = {
	playerCards: [],
	player: null,
	dealer: null,
  minBet: 10,
  maxBet:90,
  initCredit: 100,
  initBet: 10,

	//returns all cards shuffled
  shuffle: function(deck){
    var shuffledDeck = [];
    // loop over cards, remove a random card from deck, add it to shuffleddeck array
      for( var b = 0; b < deck.length; b++ ) {
        // get a random number from 0 to deck.length
        var randomNumber =  Math.floor(Math.random() * (deck.length ) );
        shuffledDeck.push((deck[randomNumber]));
      }
			// console.log(shuffledDeck);
      return shuffledDeck;

  },
	//Updates cards, bankroll and points for dealer and players
	//**Be back**
	setup: function (){
		App.player = new Players();
		App.dealer = new Players();
	},

	deal:function(){
		var shuffled = this.shuffle(deck());
		counter +=1;
		this.playerCards.push(shuffled[counter]);
		console.log(this.playerCards[0]);
		counter +=1;
		this.playerCards.push(shuffled[counter]);
		console.log(this.playerCards[1]);
	},

  nextCard:function(){
		var shuffled = this.shuffle(deck());
	 	counter +=1;
		  // console.log(shuffled[counter]);
		 //  counter +=1;
		  // console.log(shuffled[counter]);
		// for (var i = 0; i<shuffled.length; i++){
		// 	counter +=i;
		// }
		this.playerCards.push(shuffled[counter]);
		console.log(this.playerCards[0]);


		// return new Object[]{array1, array2};

		// counter +=1;
		// this.playerCards.push(shuffled[counter]);
		// console.log(this.playerCards[1]);
  },

  gameHand: function(){
    // player has the option  to add more cards o stop
    // dealer has the option to play
  },
  displayingCards: function(){
    // once dealer has stoped playing, cards should go to array of points
    // player cards should go to its own
  },
  decidingWinner: function(){
    // winner with the accurate points will be declared a winner
  },
  finishingGame: function(){
    // game will finish
    // if user has 0 coins
    // else if clicks restart
    // else if quits game
  }


};


var UI = {
	onClickStart: function(){
		console.log(App.deal());
	},

	onClickHit: function(){
		console.log(App.nextCard());
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
