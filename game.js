// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Zarela Graves under the GNU General Public License.

//Draft start

function card(value, name, suit, points){
	this.value = value;
	this.name = name;
	this.suit = suit;
	this.points = points;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s], this.points[n] ) );
        }
    }
    return cards;
}

// allcards = deck();
function shuffle(deck){
  var shuffledDeck = []
  // loop over cards, remove a random card from deck, add it to shuffleddeck array
    for( var b = 0; b < deck.length; b++ ) {
      // get a random number from 0 to deck.length
      var randomNumber = Math.random()
      console.log(randomNumber)
      // console.log(deck[randomNumber])
      // shuffledDeck.push(deck.pop(deck[randomNumber]));
      // console.log(shuffledDeck)
    }

}


var App = {
  maxSplits: 3,
  minBet: 10,
  maxBet:90,
  initCredit: 100,
  initBet: 10,

  allCards: deck(),
  shuffle: function(deck){
    var shuffledDeck = []
    // loop over cards, remove a random card from deck, add it to shuffleddeck array
      for( var b = 0; b < deck.length; b++ ) {
        // get a random number from 0 to deck.length
        var randomNumber =  Math.floor(Math.random() * (deck.length ) );
        shuffledDeck.push((deck[randomNumber]));
      }
  console.log(shuffledDeck)

  }

}

App.shuffle(App.allCards);

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

// }
// User interface
// var UI = {
//
// }


//End of draft

/*

//Blog Sameple
/// Application Logic ///
var App = {
  // posts: [],
  // newPostId: 1,
  // createPost: function(post){
  //   post.createdAt = new Date();
  //   post.postId = this.newPostId;
  //   this.posts.push(post);
  //   this.newPostId += 1;
  //   return post;
  // },
  // getPostById: function(postId){
  //   return this.posts.find(function(post){
  //     return post.postId === postId;
  //   });
  // },
  // getAllPosts: function(){
  //   return this.posts;
  // }
};

/// User Interface ///
var UI = {
  // Build HTML
  // buildPostSnippetHTML: function(post){
  //   var htmlString = '';
  //   htmlString += "<li data-post-id='" + post.postId + "'>";
  //   htmlString +=   "<strong> " + post.title + " </strong>";
  //   htmlString +=   "<small class='date'> " + post.createdAt.toDateString() + " </small>";
  //   htmlString += "</li>";
  //   return htmlString;
  //   //// Or, using template strings,
  //   // return `
  //   // <li data-post-id=${post.postId}>
  //   //   <strong> ${post.title} </strong>
  //   //   <small class='data'> ${post.createdAt.toDateString()} </small>
  //   // </li>
  //   // `
  //
  // },
  // buildFullPostHTML: function(post){
  //   var htmlString = '';
  //   htmlString += "<header>";
  //   htmlString +=   "<h2 class='title'> " + post.title + " </h2>";
  //   htmlString +=   "<h5 class='date'> " + post.createdAt.toDateString() + " </h2>";
  //   htmlString += "</header>";
  //   htmlString += "<section class='post-body'>";
  //   var paragraphs = post.body.split('\n\n');
  //   paragraphs.forEach(function(paragraph){
  //     htmlString += "<p>";
  //     htmlString +=   paragraph;
  //     htmlString += "</p>";
  //   });
  //   return htmlString;
  // },

  // Read from the DOM
  // getFormData: function(){
  //   var data = {};
  //   data.title = $('#new-post-view input').eq(0).val();
  //   // or `$('#new-post-view [name="title"]').val();`
  //   data.body = $('#new-post-view textarea').val();
  //   // or `$('#new-post-view [name="post-body"]').val();`
  //   return data;
  // },
  // // Write to the DOM
  // clearForm: function(){
  //   $('#new-post-view input').val(null);
  //   $('#new-post-view textarea').val(null);
  //   // Or `$('#new-post-view *').val(null);`,
  //   // since we want to wipe out all form fields, and only form fields respond
  //   // to `.val()`.
  // },
  // setMainPostTo: function(postId){
  //   var postToShow = App.getPostById(postId);
  //   $('#show-post-view').html(
  //     this.buildFullPostHTML(postToShow)
  //   );
  // },
  // updatePostsList: function(){
  //   var $list = $('#posts-list');
  //   $list.empty();
  //   App.getAllPosts().forEach(function(post){
  //     $list.prepend(UI.buildPostSnippetHTML(post));
  //   });
  //   $('#posts-list li').on("dblclick", UI.onClickPostSnippet);
  // },
  // showView: function(viewName, postId){
  //   $('main article').hide();
  //   if (viewName === 'new-post') {
  //     $('#new-post-view').show();
  //   } else if (viewName === 'show-post'){
  //     this.setMainPostTo(postId);
  //     $('#show-post-view').show();
  //   }
  // },
  // Handle Events

  onClickNewPost: function(event){
    event.preventDefault();
  },


//   onClickNewPost: function(){
//     UI.showView('new-post');
//   },
//   onClickCreatePost: function(event) {
//     event.preventDefault();
//     var postData = UI.getFormData();
//     var newPost = App.createPost(postData);
//     UI.updatePostsList();
//     UI.clearForm();
//     UI.showView('show-post', newPost.postId);
//   },
//   onClickPostSnippet: function(){
//     var postId = $(this).data('postId');
//     UI.showView('show-post', postId);
//   }

}; //end of UI
//Initial Event Handlers to Page
window.onload = function() {
  // $('#new-post-view').hide();
  $('#start').hide();
  // $('#new-post').on('click', UI.onClickNewPost);
  // $('#new-post-view form').on('submit', UI.onClickCreatePost);
};
*/
//My event listeners
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
