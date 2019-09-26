//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
		tags: "Business"
	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969,
		tags: "Space Travel",
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013",
		tags: "Politics",
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
		tags: "Engineering",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
		tags: "Business",
	},
];




// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote(){
  //generate a random number between 0 and the last index in the array parameter
  var randomNumber = Math.floor((Math.random()*(quotes.length)));
  var item = quotes[randomNumber];
  return item;


}




//Function to genereate random rgb color value
function randomColorGenerator()
{
  red = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
}
// Function to take previously selected random object from array & print to screen
function printQuote(){
  var item = getRandomQuote();
  var s = '';
  s+= '<p class="quote">' + item.quote + '</p>';
  s+= '<p class="source">' + item.source;
  if(item.citation)
  {
    s+= '<span class="citation">' + item.citation + '</span>';
  }
  if(item.year)
  {
    s+= '<span class="year">'+ item.year +'</span>';
  }
  if ( item.tags ) {
    s += '<h3>' + item.tags + '</h3>';
  }
  s+= '</p>'
  var div = document.getElementById('quote-box');
  div.innerHTML = s;
  
  document.getElementById('quote-box').style.color = randomColorGenerator();


}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.