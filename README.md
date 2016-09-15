# Deeper pseudo-code (in between actual code and orig pseudo code)

Syntax:
Capital letters = big objects
[] = arrays
() = functions
{} = little objects

Player{
  bankroll: money,
  cardsArray: []
  finalPoints: number that adds points on cardsArray
}  //Contain bankroll and card points

App
  //App holds game logic and game-related data
  allCards[] //every card in the shuffled deck; cards are dealt from allCards
  dealer{}    //Player object that represents the dealer
  maxBet
  player{}    //Player object that represents the player
  dealerPlay()  
    //dealer hits until his hand is 17 or more
    //call App.determineWinner
  determineWinner() //both array values get compared and see which one is closer to 21 without passing 21
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


UI
  //Ui interacts with the DOM

EventHandlers
  //handle events
