# ♠️ ♦️ Black Jack Game ♣️ ♥️

[Live Site](https://zarela.github.io/BlackJack-Game/)

[Wireframe](https://drive.google.com/open?id=0B9p6hJKmZMZENzZZeDFzemNRaGc)

## Unsolved features:

- No split hands
- No insurance
- As right now the A is worth only one point instead of 11

## Game Overview

The game starts when the player clicks `START` and is given 100 dollars.
A prompt will show up, reminding the player to make a bet. After the player makes a bet, cards will be distributed for both player and dealer. Player's cards are shown and the dealer's cards will only show one card until player stands.
The player can only make one bet until hand is over.

The player can keep getting more cards as long as he/she does not go over 21, by pushing the `HIT` button.
In this game version, `A` is worth 1 point. (Soon to be fixed to be either 1 or 11).

If player does not get busted, then can choose to stop receiving cards by clicking the `STAND` button. After player clicks the stand button, the dealer will start playing.
Dealer cannot get more cards if he passes 17 and then his game stops. If he didn't go over 21 after passing the 17 points, the we will move to verify the winner.

After both player and dealer stop playing, points on both sets will be compared and the one closer to 21 will win.
If both dealer and player are tie, then player will receives back the money on the initial bet.

Paying the winner: If player looses, money in pot gets deducted from player bankroll.
If player wins then will receive doubled the amount of the bet (bet plus the same amount paid by dealer).

A new hand can be initiated as long as player still has money on bankroll.

## Game Rules

#### CHIPS:

Player starts with \$100.00\
Minimum bet is \$10.00, which is the same value required to start playing

#### CARDS:

Player receives 2 cards facing up\
Dealer receives 2 cards (one face up and other face down)\
Cards 2 - 9 hold their same value as points\
Cards 10, J, Q and K are worth 10 points each\
Ace card can be counted as 1 or 11 depending of how the player desires to use it\
Ace and Jack are absolute Black Jack and player automatically wins

#### GAME SITUATIONS

If cards add up to over 21, the money on bet goes to the dealer\
When player has a pair, has the option to split the game by paying the initial bet amount\
If dealers first card is an Ace, player can either pass or pay half price of the bet to play. This situation is called INSURANCE.

#### LOOSING

A player goes BUSTED if has over 21 points in cards\
Dealer can get cards until is 17 or higher and cannot take any more cards after that\
When dealer and player are tie, both leave with the same amount of money they started

## User Stories

As a user I would like to:

- Push a button to start the game
- Differentiate my cards from dealers cards
- Know how much I have before I start to play the game
- Manage how much I bet for every hand
- Have the option to continue getting cards by pushing a HIT button
- Have the option to announce when I am done getting cards with a STAND button
- See how much I been winning so far (bankroll)
- Have an information button to see game rules
- Reset the game if wish to start a new game
- Quit the game completely

## Global Variables

- `Card ()` Makes a single card which contains name, suit and points as properties

- `Deck()` Uses a constructor to make all cards in the deck grabbing an array of cards (deck) and resets so this function can only be created once preventing making multiple decks.

- `Deck.prototype.draw()` Takes as a parameter of number, where number is the name of cards to be drawn from the deck. Also, these drawn cards will be removed from the deck.

- `Deck.prototype.reset()` Makes unique Cards for a deck containing card name, suit and points. Taking in consideration that J, Q and K are worth 10 points.

- `Deck.prototype.shuffle()` Takes the Deck of cards and shuffles them to be displayed randomly

## Game Object

- `playerCards: []` Contains cards from the show for the player to use

- `dealerCards:[]` Contains cards from the show for the dealer to use

- `pot: 0` Holds the money amount on bet

- `initCredit: 100` Initial credit for the player when the game starts

- `playerStand: false` Initially set to false, so can be used as a check point to initiate the playerHit function

- `dealerStand: false` Initially set to false, so can be used as a check point to initiate the dealerHit function

- `bet()` Calls the UI.amountBet and deducts the value of the bet input from the initCredit of 100. This function also pushes the amount to the pot to keep track of the amount of money in the player's bankroll.

- `bankroll()` Checks if the player can continue playing as long as he has money.

- `startGame()` Creates a new deck and shuffles it. Initiates the bankroll so we can start keeping track of the players money. Also, gives cards to the player and dealer. They both receive two. Cards are being pushed into each ones array playerCards[] and dealerCards[].

- `playerHit()` Checks first if playerStand is false, if so, then checks the cards on the playerCards[] array. If he is less than 21, he can draw more cards, If he passes 21 he looses and is the end of the hand.

- `playersCanPlay()` Takes a hand as a parameter, which can be either the player or dealer's hand. The purpose of this function is to keep track of the points inside of an array, in this case the player cards and dealer cards.

- `dealerHit()` Checks first if dealers cards are less than 17.If so, he will get another card. If he passes 17 points, no more cards will be given to him and both players get compared to see which one has points closer to 21 without busting.

- `decidingWinner()` Decides who will win according to the rules of the game. If the player wins, then the money and the pot will get multiplied by two and goes to the player bankroll, which basically gives him his money from the bet and the match the dealer pays him.

## DOM Interactions

`printDealerCards()`\
`clearScreen()`\
`printPlayerCards()`\
`onClickStart()`\
`onClickHit()`\
`onClickStand()`\
`onClickNewHand()`\
`amountBet()`\
`onClickQuit()`\
`onClickReset()`

## EventHandlers

Handles events when buttons are being clicked.

- Resets the game `$('#start').on('click', UI.onClickStart)`

- Quits the game `$('#reset').on('click', UI.onClickReset)`

- Gets another card `$('#quit').on('click', UI.onClickQuit)`

- Stops receiving cards `$('#hit').on('click', UI.onClickHit)`

- Restarts the game `$('#stand').on('click', UI.onClickStand)`

- Starts a new hand `$('#new-hand').on('click', UI.onClickNewHand)`

## References

https://devdojo.com/blog/tutorials/create-a-deck-of-cards-in-javascript

👩🏻‍💻 Made by ZG Stardust
