ReactDOM.render(
  <div>
    <div className="logo">
      <p>♠️ ♦️ Black Jack ♣️ ♥️</p>
    </div>
    <div className="board">
      <p>Dealer's cards:</p>
      <div id="dealer-cards"></div>
      <p>Player's cards:</p>
      <div id="player-cards"></div>
    </div>
    <form className="controls" action="index.html" method="post">
      <div className="money-section">
        <div id="credit">
          <p>You have: $100.00</p>
        </div>
        <div id="bet-section">
          <input id="bet" name="name" value="" />
          <input id="bet-button" type="button" name="name" value="BET" />
        </div>
      </div>
      <div className="game-buttons">
        <input id="hit" type="button" name="hit" value="HIT" />
        <input id="stand" type="button" name="stand" value="STAND" />
        <input id="new-hand" type="button" name="new-hand" value="NEW HAND" />
      </div>
      <div className="start-section">
        <input id="start" type="button" name="start" value="START" />
      </div>
      <div className="init-end-controls">
        <input id="reset" type="button" name="name" value="RESET/NEW GAME" />
        <br />
        <input id="quit" type="button" name="name" value="QUIT GAME" />
      </div>
    </form>
  </div>,
  document.getElementById("root")
);
