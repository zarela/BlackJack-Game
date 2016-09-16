// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.

//Function card where value is the card number and points represents card points for the game

//Player constructor to display dealer and player's status
function Players (backroll, playerCards, finalPoints){
	this.bankroll = backroll;
	this.playerCards = playerCards;
	this.finalPoints = finalPoints;
}
//Constructor to make a card
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

	player: null,
	dealer: null,
  minBet: 10,
  maxBet:90,
  initCredit: 100,
  initBet: 10,
	//retuns all cards in a deck
  //*be back** allCards: deck(),
	//returns all cards shuffled
  shuffle: function(deck){
    var shuffledDeck = [];
    // loop over cards, remove a random card from deck, add it to shuffleddeck array
      for( var b = 0; b < deck.length; b++ ) {
        // get a random number from 0 to deck.length
        var randomNumber =  Math.floor(Math.random() * (deck.length ) );
        shuffledDeck.push((deck[randomNumber]));
      }
			console.log(shuffledDeck);
      return shuffledDeck;

  },
	//Updates cards, bankroll and points for dealer and players
	setup: function (){
		App.player = new Players();
		App.dealer = new Players();
	},

  dealingNextCard:function(){
		var shuffled = this.shuffle(deck());

 	 //var next = shuffled[counter]; **DNU**
 	 counter +=1;
 	 console.log(shuffled[counter]);
 	 counter +=1;
 	 console.log(shuffled[counter]);

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
// App.shuffle(App.allCards);

var UI = {
	onClickStart: function(){
		//Returns an array of shuffled cards;

		// var shuffled = App.shuffle(deck());
		//
		// //var next = shuffled[counter]; **DNU**
		// counter +=1;
		// console.log(shuffled[counter]);
		// counter +=1;
		// console.log(shuffled[counter]);


		console.log(App.dealingNextCard());

	}
}


//My event listeners for game buttons
window.onload = function(){
  //Event handler for starting the game
  $('#start').on('click', UI.onClickStart);
  //Event handler for reseting the game or ask for a new game
  $('#reset').on('click', function(){
    console.log("Hello from Reset button");
  });
  //Event handler for quitting the game
  $('#quit').on('click', function(){
    console.log("Hello from Quit button");
  });

  $('#hit').on('click', function(){
    console.log("Hello from Hit button");
  });

  $('#stand').on('click', function(){
    console.log("Hello from Stand button");
  });

  $('#new-hand').on('click', function(){
    console.log("Hello from New Hand button");
  });

  $('#bet-button').on('click', function(){
    console.log("Hello from Bet button");
  });

}
