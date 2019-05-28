/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: BOHAN ZHANG
******************************************/


var quotes = [
  {
    quote: 'Your most unhappy customers are your greatest source of learning.',
    source: 'Bill Gates'
  },
  {
    quote: 'Commenting your code is like cleaning your bathroom — you never want to do it, but it really does create a more pleasant experience for you and your guests.',
    source: 'Ryan Campbell'
  },
  {
    quote: 'Before man reaches the moon, mail will be delivered within hours from New York to California, to Britain, to India or Australia.',
    source: 'Arthur Summerfield',
    citation: 'United States Post',
    year: 1959
  },
  {
    quote: 'The best way to predict the future is to implement it.',
    source: 'David Heinemeier Hansson'
  },
  {
    quote: 'In a room full of top software designers, if two agree on the same thing, that’s a majority.',
    source: 'Bill Curtis'
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: 'Dr. Seuss',
    tags: "#cry, crying, experience, happiness, joy, life, misattributed-dr-seuss, optimism, sadness, smile, smiling"
  }
]; //hard-code 5 quotes with their properties and assign it to quotes varible


function getRandomQuote(quotes) {
  var min = 0;
  var max = Math.floor(quotes.length); //set the max random number which are not going to exceed quotes length
  randomNumber = Math.floor(Math.random() * (max - min)) + min; //code snippet from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return quotes[randomNumber]; //return the random generated code based on the random number
}



function printQuote(){
  var randomQuote = getRandomQuote(quotes); //call the getRandomQuote function to get the randomQuote
  var html = ''; 
  html = '<p class="quote">' + randomQuote.quote + '</p>'; //by default, the quote property always assigning to the string 
  if(randomQuote.citation && !randomQuote.year){
    html += '<p class="source">' + randomQuote.source + "<span class='citation'>" + randomQuote.citation + '</span>' + '</p>';
    //if citation property exist, add it to the string with source
  }
  else if(randomQuote.citation && randomQuote.year){
    html += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>' + '<span class="year">' + randomQuote.year + '</span>' + '</p>'; 
    //if both citation and year exist, add them to the string with the source
  }
  else if(randomQuote.year && !randomQuote.citation){
    html += '<p class="source">' + randomQuote.source + "<span class='year'>" + randomQuote.year + '</span>'+ '</p>';
    //if year exist but citation does not exist, only adding year and source to the string
  } 
  else if(randomQuote.tags){
    html += '<p class="source">' + randomQuote.source + "<span class='tags'>" + randomQuote.tags + '</span>'+'</p>';
  }
  else {
    html += '<p class="source">' + randomQuote.source + '</p>'; //anything else, only add source to the string
  }
  var getId = document.getElementById('quote-box'); //find the html location which its id is quote-box
  getId.innerHTML = html; //assign the html to the innerHtml
}

setInterval(function(){printQuote()},2000); //print out a random quote every 1 second
//code adapte from https://www.w3schools.com/jsref/met_win_setinterval.asp


setInterval(
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);//get a random color and convert it into hex
    document.body.style.backgroundColor = "#"+randomColor;//use the obtained hex and set the css based on that random hex color
  },2000); 
  //code adapte from https://www.codespeedy.com/how-to-change-background-color-every-seconds-in-javascript/
  //credits to Saruque Ahamed Mollick


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//whenever the button is clicked, generate another random quote

