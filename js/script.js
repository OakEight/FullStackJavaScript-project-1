
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//array filled with objects to be used in the random quote generator
var quotes = [
    //generic objects, I added the category and DoILikeIt keys with values to all objects.
    {quote : "I am become death, the destroyer of worlds.", source : "J. Robert Oppenheimer", citation : "Speech", date: "1945", category : "Science-like-things", DoILikeIt : "Maybe"},
    
    {quote : "Strive not to be a success, but rather to be of value.", source : "Albert Einstein", citation : "Speech", category : "Insperational-things", DoILikeIt : "Yes"},
    
    {quote : "Whatever the mind of man can conceive and believe, it can achieve.", source : "Napoleon Hill", citation : "Speech", category : "Insperational-things", DoILikeIt : "Yes"},
    
    {quote : "Logic will get you from A to B. Imagination will take you everywhere.", source : "Albert Einstein", category : "Insperational-things", DoILikeIt : "Yes"},
    
    {quote : "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be.", source : "Napoleon Hill", citation : "Think, and Grow Rich", date: "1960", category : "Insperational-things", DoILikeIt : "Yes"}
];
//array to hold all used quotes so they are not repeated
var usedQuotes = [];
//store quotes.length in a variable to use in the next comparison
var quotesLength = quotes.length;

//the getRandomQuote function, gets a new random quote untill all five are repeated
function getRandomQuote() {
    //if all quotes have been shown => set usedQuotes to 0
    if (usedQuotes.length === quotesLength) {
        usedQuotes = [];
        //i added a console.log so it would be easier to see when the usedQuotes is cleared
        console.log("usedQuotes cleared");
    }
    //gets a random number of 0-4 to be used in getting a quote to show 
    var random = Math.floor((Math.random() * quotes.length));
    
    //a loop to check if random number have been used earlier, if so => random gets a new number and we start at i = 0 again
    for (var i = 0; i < usedQuotes.length; i++) {
        if (usedQuotes[i] == random) {
            random = Math.floor((Math.random() * quotes.length));
            i = -1;
        }
    }
    //i added a console.log so it would be easier to see which quote was chosen, there are five btw
    console.log("Quote Nm: " + (random + 1) + " is shown.");
    //add quote to be used in the usedQuotes array
    usedQuotes.push(random);
    //return chosen object
    return quotes[random];
}
    //the printQuote function
function printQuote() {
    //stores the chosen object aswell as calling on the getRandomQuote function
    var cObj = getRandomQuote();
    
    //creates the html variable to be used as innerHTML of the div with the "quote-box" id, checks if the object have a "citation" and "date"
    //before adding them
    var html = '<p class="quote"> ' + cObj.quote + '</p>';
        html += '<p class="source"> ' + cObj.source;
        if (cObj.hasOwnProperty("citation")) {
        html += '<span class="citation"> ' + cObj.citation + ' </span>';
            }
        if (cObj.hasOwnProperty("date")) {
            html += '<span class="year"> ' + cObj.date + ' </span>';
        }
        html += '</p>';
    //changes quotes shown to user
     document.getElementById('quote-box').innerHTML = html;
    //calls upon the changeBackgroundColor function which does what one can imagine
    changeBackgroundColor();
}

function changeBackgroundColor () {
    //a simple random color generator which creates a rgb color to be used in the documents backgroundcolor
    var redAspect = Math.floor(Math.random() * 255 + 1);
    var blueAspect = Math.floor(Math.random() * 255 + 1);
    var greenAspect = Math.floor(Math.random() * 255 + 1);
    var colorSelected = "rgb("+redAspect+","+greenAspect+","+blueAspect+")";
    document.body.style.backgroundColor = colorSelected;
}
//when the button with the id of loadQuote is pressed this calls on the function printQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//this automaticly calls on printQuote after 20 seconds 
window.setInterval(printQuote, 20000);