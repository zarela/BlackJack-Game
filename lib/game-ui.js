"use strict";

ReactDOM.render(React.createElement("div", null, React.createElement("div", {
  className: "logo"
}, React.createElement("p", null, "\u2660\uFE0F \u2666\uFE0F Black Jack \u2663\uFE0F \u2665\uFE0F")), React.createElement("div", {
  className: "board"
}, React.createElement("p", null, "Dealer's cards:"), React.createElement("div", {
  id: "dealer-cards"
}), React.createElement("p", null, "Player's cards:"), React.createElement("div", {
  id: "player-cards"
})), React.createElement("form", {
  className: "controls",
  action: "index.html",
  method: "post"
}, React.createElement("div", {
  className: "money-section"
}, React.createElement("div", {
  id: "credit"
}, React.createElement("p", null, "You have: $100.00")), React.createElement("div", {
  id: "bet-section"
}, React.createElement("input", {
  id: "bet",
  name: "name",
  value: ""
}), React.createElement("input", {
  id: "bet-button",
  type: "button",
  name: "name",
  value: "BET"
}))), React.createElement("div", {
  className: "game-buttons"
}, React.createElement("input", {
  id: "hit",
  type: "button",
  name: "hit",
  value: "HIT"
}), React.createElement("input", {
  id: "stand",
  type: "button",
  name: "stand",
  value: "STAND"
}), React.createElement("input", {
  id: "new-hand",
  type: "button",
  name: "new-hand",
  value: "NEW HAND"
})), React.createElement("div", {
  className: "start-section"
}, React.createElement("input", {
  id: "start",
  type: "button",
  name: "start",
  value: "START"
})), React.createElement("div", {
  className: "init-end-controls"
}, React.createElement("input", {
  id: "reset",
  type: "button",
  name: "name",
  value: "RESET/NEW GAME"
}), React.createElement("br", null), React.createElement("input", {
  id: "quit",
  type: "button",
  name: "name",
  value: "QUIT GAME"
})))), document.getElementById("root"));