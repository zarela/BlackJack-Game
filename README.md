# Pseudo-code and Game Overview

## Syntax:
Capital letters = big objects

[] = arrays

() = functions

{} = little objects

### Global Variables

Players{
  bankroll: money,
  playerCards: []
  finalPoints: number that adds points on cardsArray
}

card ()
//Makes cards where value is the card number and points represents card points for the game

deck()
//Uses a constructor to make all cards in the deck

###App Object

Holds game logic and game-related data

allCards[]
//every card in the shuffled deck; cards are dealt from allCards

dealer{}
//Player object that represents the dealer

maxBet


player{}
//Player object that represents the player

dealerPlay()
//dealer hits until his hand is 17 or more
//call App.determineWinner

determineWinner()
//both array values get compared and see which one is closer to 21 without passing 21

hitPlayer()
//gives a player another card from App.allCards[]
//updates the value of the hand

setup()
//sets dealer and player to new Player objects
//does other stuff
//does more stuff

shuffle()

standPlayer()
//player doesn't get another card; it's dealer's turn now so we call App.dealerPlay

###UI
Ui interacts with the DOM

###EventHandlers
Handle events when buttons are being clicked.
