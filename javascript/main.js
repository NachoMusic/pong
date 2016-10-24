/**
 *  Pong  entry script
 *
 */
// "use strict";
var utils = require('./utils');
var singletonContext = require('./patterns/singleton/singletonContext');

//Once the page has been completely loaded. Including images. We start the game
window.onload = function() {
    // Cookie for the name


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

    //checkCookie
    var username;
    if (utils.getCookie("username")) {
        utils.showUsername(utils.getCookie("username"));
        window.addEventListener("keypress", startGame, false);
    } else {
        //modal
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        document.getElementById("submit").addEventListener("click", function(){
            username = document.getElementById("name").value;
            utils.setCookie("username", username, 365);
            modal.style.display = "none";
            window.addEventListener("keypress", startGame, false);
        });
    }

    //end checkCookie

    // window.addEventListener("keypress", startGame, false);
    // window.addEventListener("keypress", startGame, false);


};
