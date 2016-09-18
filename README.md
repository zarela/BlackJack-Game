# Pseudo-code and Game Overview

##  Game Story

GameSetUp:
Player starts with 100 dollars (displays money credit), which is initCredit.
game starts after player makes a bet, which needs to be more than current
bankroll. Player can only make one bet until hand is over.

After submit bet, money goes into a potMoney array and game can start. All these should happen on start click, before player receives his cards.

starting the game:
game starts by giving two cards to both player and dealer.
if players initial cards are A+10, A+J, A+Q or A+K, then will be dealer turn to play and he will receive automatically 21 points as a total for his cards.

playerHit, calls dealer can playersCanPlay and can keep getting cards as long as he does not passes over 21.
If one of cards is a A and points are less or equals to ten, replace the value of card for 11 points instead of 1.
If after replacing the value of Ace for 11 points the player goes over 21, then value of Ace can be 1 again and continue playing until passes 21 (when he looses) or decides to stop.

DealerHit: Shows his next card and plays only after player decided to STAND.
Same conditions description above, except dealer cannot get more cards if he passes 17 and then his game stops. Also, if dealers initial cards are:
A+10, A+J, A+Q or A+K, then his points will be 21 and we can move to deciding the winner.

decidingWinner: after both player and dealer stop playing, points on both cards array needs to be compared and the one closer to 21 will win.
if both dealer and player are tie, then player only receives back the money he initially added on his bet.

Paying the winner:
if player looses, money in bet gets deducted from his account
if player wins he receives double the amount he bet (his bet plus the same amount paid by dealer)

new hand: if player still has money after loosing a hand, he can play again and everything gets called completely again.
He can play as many times until he has no money.
New hand, needs to clear the array of cards for both player and dealer with a fresh shuffled deck.



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
UI interacts with the DOM

###EventHandlers
Handle events when buttons are being clicked.
