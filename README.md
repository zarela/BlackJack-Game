# Pseudo-code and Game Overview

## Syntax:
Capital letters = big objects

[] = arrays

() = functions

{} = little objects

### Global Variables

Card ()
//Makes a single card which contains name, suit and points as properties

Deck()
//Uses a constructor to make all cards in the deck grabbing an array of cards (deck) and resets so this function can only be created once preventing making multiple decks.

Deck.prototype.draw()
//Takes as a parameter of number, where number is the name of cards to be drawn from the deck. Also, these drawn cards will be removed from the deck.

Deck.prototype.reset()
//Makes unique Cards for a deck containing card name, suit and points. Taking in consideration that J, Q and K are worth 10 points.

Deck.prototype.shuffle()
//Takes the Deck of cards and shuffles them to be displayed randomly


###App Object

Holds game logic and game-related data

calculateHandValue()
//calculates points from playerCards array

cleanUp: function()
// game will finish
// if user has 0 coins
// else if clicks restart
// else if quits game

deal()
//gives two cards to both player and dealer

dealer{}
//Player object that represents the dealer

dealerCards:[],
//Contains cards from the show for the dealer to use

maxBet

player{}
//Player object that represents the player

dealerPlay()
//dealer hits until his hand is 17 or more
//call App.determineWinner

decidingWinner()
//both array values get compared and see which one is closer to 21 without passing 21

hit()
//gives a player another card from App.allCards[]
//updates the value of the hand

stand()
//stops player from receiving cards
//updates the value of the hand

nextCard()
//remove the given card from the shuffledDeck
//give a card to a player from shuffledDeck

playerCards: [],
//Contains cards from the show for the player to use

setup()
//sets dealer and player to new Player objects
//shuffles the cards and gets the deck ready to deal
//call App.deal

shuffle()

standPlayer()
//player doesn't get another card; it's dealer's turn now so we call App.dealerPlay





###UI
Ui interacts with the DOM

###EventHandlers
Handle events when buttons are being clicked.
