// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.

//Function card where value is the card number and points represents card points for the game
function card(value, name, suit, points){
	this.value = value;
	this.name = name;
	this.suit = suit;
	this.points = points;
}
//Function deck loops over array elements to create unique cards
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

//Game App
var App = {
  maxSplits: 3,
  minBet: 10,
  maxBet:90,
  initCredit: 100,
  initBet: 10,
  allCards: deck(),

  shuffle: function(deck){
    var shuffledDeck = [];
    // loop over cards, remove a random card from deck, add it to shuffleddeck array
      for( var b = 0; b < deck.length; b++ ) {
        // get a random number from 0 to deck.length
        var randomNumber =  Math.floor(Math.random() * (deck.length ) );
        shuffledDeck.push((deck[randomNumber]));
      }
  console.log(shuffledDeck);

},

// gameStarts: function (){
//
// },
// dealingCards: function(){
//   all cards should be shuffle
//   player received 2 cards
//   dealer received one card
// },
// gameHand: function(){
//   player has the option  to add more cards o stop
//   dealer has the option to play
// },
// displayingCards: function(){
//   once dealer has stoped playing, cards should go to array of points
//   player cards should go to its own
// },
// decidingWinner: function(){
//   winner with the accurate points will be declared a winner
// },
// finishingGame: function(){
//   game will finish
//   if user has 0 coins
//   else if clicks restart
//   else if quits game
// }

};

App.shuffle(App.allCards);



//My event listeners for game buttons
window.onload = function(){
  //Event handler for starting the game
  $('#start').on('click', function(){
    console.log("Hello from Start button");
  });
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
