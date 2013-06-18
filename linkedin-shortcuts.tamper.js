// ==UserScript==
// @name       linkedin-shortcuts
// @namespace  http://danielfrancis.net/
// @version    0.1
// @description  Useful keyboard shortcuts for LinkedIn
// @match      http://www.linkedin.com/*
// @copyright  6-17-2013, Daniel Francis
// ==/UserScript==

function doc_keyUp(e) {
// this function tests for key press - list of keys can be found at www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    
    // tests for '/' key pressed
    if (e.altKey && e.keyCode == 191) {
        // set focus to "main-search-box" search box
        document.getElementById('main-search-box').focus();
    }
    
    // tests for Alt+ 'p' key pressed
    if (e.altKey && e.keyCode == 80) {
        // navigate to profile page
        window.open("http://www.linkedin.com/profile/view","_self");
    }

    // tests for Alt+ 'i' key pressed
    if (e.altKey && e.keyCode == 73) {
        // navigate to invitations page
        window.open("http://www.linkedin.com/inbox/invitations/pending","_self");
    }
    
    // tests for Alt+ 'm' key pressed
    if (e.altKey && e.keyCode == 77) {
        // navigate to messages page
        window.open("http://www.linkedin.com/inbox/messages/received","_self");
    }
    
    // tests for Alt+ 'c' key pressed
    if (e.altKey && e.keyCode == 67) {
        // navigate to contacts page
        window.open("http://www.linkedin.com/contacts/","_self");
    }
    
    // tests for Alt+ 'w' key pressed
    if (e.altKey && e.keyCode == 87) {
        // navigate to WVMP page
        window.open("http://www.linkedin.com/wvmx/profile","_self");
    }
    
    // tests for Alt+ 'k' key pressed
    if (e.altKey && e.keyCode == 75) {
        // navigate to PYMK page
        window.open("http://www.linkedin.com/people/pymk","_self");
    }
    
    // tests for Alt+ 'h' key pressed
    if (e.altKey && e.keyCode == 72) {
        // navigate to homepage
        window.open("http://www.linkedin.com/","_self");
    }
    
    // tests for Alt+ '1' key pressed
    if (e.altKey && e.keyCode == 49) {
        // navigate to 1st result page
        result =document.getElementById("results").childNodes[0].childNodes[0].href
        window.open(result,"_self");
    }
    
    // tests for Alt+ '2' key pressed
    if (e.altKey && e.keyCode == 50) {
        // navigate to 2nd result page
        result =document.getElementById("results").childNodes[1].childNodes[0].href
        window.open(result,"_self");
    }
    
    // tests for Alt+ '3' key pressed
    if (e.altKey && e.keyCode == 51) {
        // navigate to 3rd result page
        result =document.getElementById("results").childNodes[2].childNodes[0].href
        window.open(result,"_self");
    }
    
    // tests for Alt+ '4' key pressed
    if (e.altKey && e.keyCode == 52) {
        // navigate to 4th result page
        result =document.getElementById("results").childNodes[3].childNodes[0].href
        window.open(result,"_self");
    }
    
    // tests for Alt+ '5' key pressed
    if (e.altKey && e.keyCode == 53) {
        // navigate to third result page
        result =document.getElementById("results").childNodes[4].childNodes[0].href
        window.open(result,"_self");
    }
    
    // tests for '\' key pressed
    if (e.altKey && e.keyCode == 220) {
        alert("\
			Alt + / : Main Search Box \
			\n Alt + h : Navigate to Homepage \
			\n Alt + p : Navigate to Profile Page \
            \n Alt + i : Navigate to Invitations Page \
            \n Alt + m : Navigate to Messages Page \
            \n Alt + c : Navigate to Contacts Page \
            \n Alt + w : Navigate to Who's View My Profile Page \
            \n Alt + k : Navigate to People You May Know Page \
            \n Alt + [1-5] : Navigate to Search Result #");
    }
}

// register the keyup handler 
document.addEventListener('keyup', doc_keyUp, false);

