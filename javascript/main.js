/**
 *  Pong  entry script
 *
 */

var utils = require('./utils');
var singletonContext = require('./patterns/singleton/singletonContext');

//Once the page has been completely loaded. Including images. We start the game
window.onload = function() {
    // Cookie for the name
    function checkCookie() {
        var username=utils.getCookie("username");
        if (username!="") {
            // alert("Welcome again " + username);
            showUsername(username);
        } else {
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                utils.setCookie("username", username, 365);
            }
        }
    }
    function showUsername (username) {
        var welcomeMessage = "Welcome again " + username + "!";
        document.getElementById("username").innerHTML = welcomeMessage;
    }
    checkCookie();

    var context_ = singletonContext.getInstance();

    var startGame = function(event) {
        event.preventDefault();
        utils.clearSelection();
        if (context_.state.match("run")) {
            context_.stop();
        } else {
            context_.start();
        }
    };

    window.addEventListener("keypress", startGame, false);
};
