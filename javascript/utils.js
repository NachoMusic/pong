/**
 *  Used to avoid image double click selection default behaviour
 */
function clearSelection() {
     if(document.selection && document.selection.empty) {
         document.selection.empty();
     } else if(window.getSelection) {
         var sel = window.getSelection();
         sel.removeAllRanges();
     }
 }

function setCookie(cname, cvalue, exdays) {
    if(exdays !== undefined){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
        document.cookie = cname + "=" + cvalue + ";";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function showUsername (username) {
    var welcomeMessage = "Welcome again " + username + "!";
    document.getElementById("username").innerHTML = welcomeMessage;
}

function checkCookie () {
    
}

module.exports.clearSelection = clearSelection;
module.exports.checkCookie = checkCookie;
module.exports.getCookie = getCookie;
module.exports.setCookie = setCookie;
module.exports.showUsername = showUsername;
