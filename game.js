// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.

function Card(value, name, suit, points) {
  this.name = name;
  this.suit = suit;
  this.points = points;
}

function Deck() {
  this.cards = [];
  this.reset();
}

Deck.prototype.reset = function() {
  this.cards = [];
  var names = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var suits = ["♥️", "♦️", "♠️", "♣️"];

  for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < names.length; n++) {
      this.cards.push(new Card(n + 1, names[n], suits[s], points[n]));
    }
  }
};

Deck.prototype.draw = function(number) {
  var drawnCards = [];
  for (var i = 0; i < number; i++) {
    drawnCards.push(this.cards.pop());
  }
  return drawnCards;
};

Deck.prototype.shuffle = function() {
  var deck = this;
  var shuffledCards = [];

  for (var b = 0; b < deck.cards.length; b++) {
    var randomNumber = Math.floor(Math.random() * deck.cards.length);
    shuffledCards.push(deck.cards[randomNumber]);
  }
  this.cards = shuffledCards;
};

var App = {
  playerCards: [],
  dealerCards: [],
  pot: 0,
  initCredit: 100,
  playerStand: false,
  dealerStand: false,

  bet: function() {
    var betAmount = UI.amountBet();
    console.log(betAmount);
    App.initCredit -= betAmount;
    App.pot = betAmount;
    $("#credit").html(`You have: ${App.initCredit}`);
    console.log(App.pot);
    // console.log(App.initCredit);
  },

  bankroll: function() {
    if (App.initCredit > 0) {
      //App.initCredit = App.initCredit-bet
      //  App.initCredit -=10;
      App.bet();
      console.log(App.initCredit);
    } else {
      console.log("Get more money");
    }
  },

  startGame: function() {
    deck = new Deck();
    console.log(deck);
    deck.shuffle();
    App.bankroll();

    var tempPlayer = deck.draw(2);
    for (var i = 0; i < tempPlayer.length; i++) {
      App.playerCards.push(tempPlayer[i]);
    }
    // App.playerCards.push(deck.draw(2));
    console.log("player cards ");
    console.log(App.playerCards);

    var tempDealer = deck.draw(2);
    for (var i = 0; i < tempDealer.length; i++) {
      App.dealerCards.push(tempDealer[i]);
    }
    // App.dealerCards.push(deck.draw(2));
    console.log("dealer cards ");
    console.log(App.dealerCards);
  },

  playerHit: function() {
    // if(App.playersCanPlay(App.playerCards)<21){
    //App.initCredit = App.initCredit-bet

    // 	App.startGame();
    if (App.playerStand === false) {
      if (App.playersCanPlay(App.playerCards) < 21) {
        var tempPlayer = deck.draw(1);
        for (var i = 0; i < tempPlayer.length; i++) {
          App.playerCards.push(tempPlayer[i]);
          UI.printPlayerCards();
          if (App.playersCanPlay(App.playerCards) > 20) {
            console.log("You are REALLY busted!");
            alert("You are busted!!!");
          } //prints cards array
          console.log(App.playersCanPlay(App.playerCards));
        }
      }
      // console.log(App.playersCanPlay(App.playerCards));
      // console.log(App.initCredit);
      // else {
      // 	// console.log(App.playersCanPlay(App.playerCards));
      // 	console.log("You are REALLY busted!");
      // 	alert("You are busted!!!");
      //
      // }
      return App.playersCanPlay(App.playerCards);
    }
  },

  playersCanPlay: function(hand) {
    var total = 0;
    for (var i = 0; i < hand.length; i++) {
      total += hand[i]["points"];
    }
    return total;
  },

  dealerHit: function() {
    while (App.dealerStand === false) {
      console.log(App.dealerStand);
      if (App.playersCanPlay(App.dealerCards) < 17) {
        var tempDealer = deck.draw(1);

        for (var i = 0; i < tempDealer.length; i++) {
          App.dealerCards.push(tempDealer[i]);
          UI.printDealerCards();
          console.log("Dealer has this points");
          console.log(App.playersCanPlay(App.dealerCards));
        }
      } else {
        App.dealerStand === true;
        console.log("dealer stands");
        console.log("Dealer has this points");
        console.log(App.playersCanPlay(App.dealerCards));
        if (App.playersCanPlay(App.dealerCards) > 21) {
          console.log("Dealer is busted");
        }
      }
      return App.playersCanPlay(App.dealerCards);
    }
  },
  decidingWinner: function() {
    if (
      App.playersCanPlay(App.playerCards) <= 21 &&
      App.playersCanPlay(App.dealerCards) <= 21
    ) {
      if (
        App.playersCanPlay(App.playerCards) >
        App.playersCanPlay(App.dealerCards)
      ) {
        console.log("player wins");
        alert("player wins");
        App.initCredit += Number(App.pot) * 2;
        console.log(App.initCredit);
        console.log("this is winner money");
      } else {
        alert("dealer wins");
        console.log("dealer wins");
      }
    } else if (App.playersCanPlay(App.playerCards) > 21) {
      alert("Dealer wins player busted!");
      console.log("Dealer wins player busted!");
    } else {
      alert("Player wins dealer busted!");
      console.log("Player wins dealer busted!");
      App.initCredit += Number(App.pot) * 2;
      console.log(App.initCredit);
      console.log("this is winner money");
    }
  }
}; //End of App Game

//User Interface
var UI = {
  printDealerCards: function() {
    // App.dealerCards.push();
    UI.clearScreen("#dealer-cards");
    for (var i = 0; i < App.dealerCards.length; i++) {
      console.log(App.dealerCards[i]);
      var showDealerCards = $("<div></div>").appendTo("#dealer-cards");
      // var showDealerCards = $("#dealer-cards").get(0);
      showDealerCards.addClass("newCardsD" + i);
      showDealerCards.addClass("newCardsD");
      $(".newCardsD" + i).html(
        `${App.dealerCards[i].name + " " + App.dealerCards[i].suit}`
      );
    }
    // if(App.dealerCards[0].name =="hearts"){
    // 	$(".newCardsD").html("<p>&#9829<p>");
    // }
  },

  clearScreen: function(board) {
    $(board).empty();
  },
  printPlayerCards: function() {
    UI.clearScreen("#player-cards");
    for (var i = 0; i < App.playerCards.length; i++) {
      console.log(App.playerCards[i]);
      var showPlayerCards = $("<div></div>").appendTo("#player-cards");
      showPlayerCards.addClass("newCardsP" + i);
      showPlayerCards.addClass("newCardsP");
      $(".newCardsP" + i).html(
        `${App.playerCards[i].name + " " + App.playerCards[i].suit}`
      );
    }
  },

  onClickStart: function() {
    // console.log("These are the player cards");
    // console.log(App.playerCards);
    App.startGame();
    UI.printDealerCards();
    UI.printPlayerCards();
    $(".newCardsD1").hide();
    $("#start").attr("disabled", true);
    return true;
  },

  onClickHit: function() {
    if (App.playersCanPlay(App.playerCards) < 21) {
      var cardTotal = App.playerHit();
      // console.log(cardTotal);
      if (cardTotal > 21) {
        console.log(App.playerCards);
        // alert("You are busted!!!");
      }
    }
    // console.log(App.playersCanPlay(App.playerCards));
  },

  onClickStand: function() {
    App.playerStand = true;
    console.log("Hello from Stand button");
    $(".newCardsD1").show();
    App.dealerHit();
    App.decidingWinner();
    //need to clear the board and make sure all the other buttons are activated
  },

  onClickNewHand: function() {
    $("#credit").html(`You have: ${App.initCredit}`);
    $("#bet-section").html("Amount Bet: ");
    UI.clearScreen("#dealer-cards");
    UI.clearScreen("#player-cards");
    App.playerCards = [];
    App.dealerCards = [];
    App.playerStand = false;
    App.dealerStand = false;
    $("#start").attr("disabled", false);
    return false;

    App.startGame();

    console.log("Hello from New Hand button");
  },

  amountBet: function() {
    // var betValue = $( "#bet").val();
    // return betValue;

    var dollars = prompt("Please enter your BET");
    if (dollars != null) {
      // document.getElementById("bet-section").innerHTML =
      // "Amount Bet: " + dollars;
      $("#bet-section").html(`Amount Bet: ${dollars}`);
    }
    return dollars;
  },

  onClickQuit: function() {
    alert("Thank you for playing");
  },

  onClickReset: function() {
    console.log("Hello from Reset button");
    location.reload();
  }
};

//Event listeners for game buttons
window.onload = function() {
  //Event handler for starting the game
  $("#start").on("click", UI.onClickStart);
  //Event handler for reseting the game
  $("#reset").on("click", UI.onClickReset);
  //Event handler for quitting the game
  $("#quit").on("click", UI.onClickQuit);
  //Event handler for getting another card
  $("#hit").on("click", UI.onClickHit);
  //Event handler for stop receiving cards
  $("#stand").on("click", UI.onClickStand);
  //Event handler for re-starting the game
  $("#new-hand").on("click", UI.onClickNewHand);
  //Event handler for making bets
  // $('#bet-button').on('click', UI.onClickBet);
};
