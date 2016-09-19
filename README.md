# Black Jack Game

[Game Link] (https://zarela.github.io/BlackJack-Game/)

[Game Wireframe](https://drive.google.com/open?id=0B9p6hJKmZMZENzZZeDFzemNRaGc)

## Unsolved features:

* No split hands
* No insurance
* As right now the A is worth only one point instead of 11
* Was not able to use pictures to display cards as pictures or at least to show the symbols in the cards.

## Game Overview

The game starts when player clicks start and he will be given 100 dollars, which is displayed in the screen.
A prompt will show up, reminding the player to make a bet, so the game can start. After player makes a bet (which always needs to be more than his current bankroll), cards will be distributed for both player and dealer. Player's cards are both show and the dealer will only show one card until player stands.
Player can only make one bet until hand is over.

Player can keep getting cards as long as he does not passes over 21, by pushing the HIT button.
On this game version, A is worth 1 point. (This will be fixed soon).
When game gets completely fixed, then we can use the rule of an A being 1 or 11.
In that case, if points are less or equals to ten, replace the value of card for 11 points instead of 1.
If after replacing the value of Ace for 11 points the player goes over 21, then value of Ace can be 1 again and continue playing until passes 21 (when he looses) or decides to stop.

If player does not get busted, he can choose to stop receiving cards by clicking the STAND button. After he clicks the stand button, the dealer will start playing.
Same conditions description above, except dealer cannot get more cards if he passes 17 and then his game stops. If he didn't pass 21 after passing the 17 points, the we will move to verify the winner.

After both player and dealer stop playing, points on both cards array needs to be compared and the one closer to 21 will win.
If both dealer and player are tie, then player only receives back the money he initially added on his bet.

Paying the winner: If player looses, money in pot gets deducted from his account
if player wins he receives double the amount he bet (his bet plus the same amount paid by dealer).

New hand: if player still has money after loosing a hand, he can play again and everything gets called completely again.
He can play as many times until he has no money.


## Game Rules

### CHIPS:
Player starts with $100.00
Minimum bet is $10.00, which is the same value required to start playing
### CARDS:
Player receives 2 cards facing up
Dealer receives 2 cards (one face up and other face down)
Cards 2 - 9 hold their same value as points
Cards 10, J, Q and K are worth 10 points each
Ace card can be counted as 1 or 11 depending of how the player desires to use it
Ace and Jack are absolute Black Jack and player automatically wins
### GAME SITUATIONS
If cards add up to over 21, the money on bet goes to the dealer
When player has a pair, has the option to split the game by paying the initial bet amount
If dealers first card is an Ace, player can either pass or pay half price of the bet to play. This situation is called INSURANCE.
### LOOSING
A player goes BUSTED if has over 21 points in cards
Dealer can get cards until is 17 or higher and cannot take any more cards after that
When dealer and player are tie, both leave with the same amount of money they started


## User Stories

* As a user I would like to:
* Push a button to start the game
* Differentiate my cards from dealers cards
* Know how much I have before I start to play the game
* Manage how much I bet for every hand
* Have the option to continue getting cards by pushing a HIT button
* Have the option to announce when I am done getting cards with a STAND button
* See how much I been winning so far. How much money I have in my bankroll
* Push an information button to get a description of the game rules
* Reset the game if wish to start a new game
* Quit the game completely

## Pseudo Code (Beginning Stage)

* Starting the game
 * When START button is clicked, start button will hide and the other 3 buttons will show
 * When button is clicked Javascript generates a deck of cards randomly
 * If user clicks start:
   * 100 dollars will be added to players bankroll
   * 10 dollars will be automatically deducted from user bankroll
* Playing the game:
 * Player receives 2 cards face up
 * Dealer receives 2 cards (one face up and other face down)
 * If player gets black jack, dealer pays the player and game is over
 * If player gets any pair, it has the option to split the hand by paying 10 dollars
 * Else if player receives any other 2 cards can continue playing
  * If player clicks HIT button, another card will show
  * Player has option to click HIT or STAND
   * If player clicks HIT, another card will be shown
   * If player goes over 21 points, game is over and looses money on bet
   * Else if player clicks the STAND button, the other dealer card needs to be shown
    * If dealers cards sum less than 17 points, needs to receive another card until 17 points or more are reached
     * If dealers cards are closer to 21 than player’s, dealer wins and players looses
     * If player cards are closer to 21, then player wins and dealer looses
     * Money in bet goes to winner
* Finishing/Reseting the game
 * When RESET button is clicked, start button will show again to start process again
 * When QUIT button is clicked, all buttons will disappear except for NEW/RESET button in case user wants to play again.


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


### App Object

playerCards: [],
* Contains cards from the show for the player to use

dealerCards:[],
* Contains cards from the show for the dealer to use

pot: 0
* Hold the money amount on bet

initCredit: 100,
* Initial credit for the player when the game starts

playerStand: false
* Initially set to false, so can be used as a check point to initiate the playerHit function

dealerStand: false
* Initially set to false, so can be used as a check point to initiate the dealerHit function

bet()
* This function calls the UI.amountBet and deducts the value of the bet input from the initCredit of 100. This function also pushes the amount to the pot to keep track of the amount of money in the player's bankroll.

bankroll()
* This function checks if the player can continue playing as long as he has money.
If the credit is grater than zero, then this can call the bet function again, allowing him to play.

startGame()
* Creates a new deck and shuffles it. Initiates the bankroll so we can start keeping track of the players money. Also, gives cards to the player and dealer. They both receive two. Cards are being pushed into each ones array playerCards[] and dealerCards[].

playerHit()
* Checks first if playerStand is false, if so, then checks the cards on the playerCards[] array. If he is less than 21, he can draw more cards, If he passes 21 he looses and is the end of the hand.

playersCanPlay()
* This function takes a hand as a parameter, which can be either the player or dealer's hand. The purpose of this function is to keep track of the points inside of an array, in this case the player cards and dealer cards.

dealerHit()
* Checks first if dealers cards are less than 17.If so, he will get another card. If he passes 17 points, no more cards will be given to him and both players get compared to see which one has points closer to 21 without busting.

decidingWinner()
* Decides who will win according to the rules of the game. If the player wins, then the money and the pot will get multiplied by two and goes to the player bankroll, which basically gives him his money from the bet and the match the dealer pays him.


### UI
UI interacts with the DOM

printDealerCards()

clearScreen()

printPlayerCards()

onClickStart()

onClickHit()

onClickStand()

onClickNewHand()

amountBet()

onClickQuit()

onClickReset()

### EventHandlers
Handles events when buttons are being clicked.

$('#start').on('click', UI.onClickStart)
* Event handler for reseting the game

$('#reset').on('click', UI.onClickReset);
* Event handler for quitting the game

$('#quit').on('click', UI.onClickQuit);
* Event handler for getting another card

$('#hit').on('click', UI.onClickHit);
* Event handler for stop receiving cards

$('#stand').on('click', UI.onClickStand);
* Event handler for re-starting the game

$('#new-hand').on('click', UI.onClickNewHand);
* Starts a new hand if the player still has money to play

### Copyrights

Background taken from this site
https://mxg.cdnbf.net/mexchangeblackjack/turbo/assets/gameView/tableBackground.png

Used to create my own version of a deck of cards
https://devdojo.com/blog/tutorials/create-a-deck-of-cards-in-javascript
