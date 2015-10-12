console.log("JAVASCRIPT Loaded!")

// List of prompts for the user
var prompts = [
	'Type 1st name',
	'Type an adjective',
	'Type a noun',
  	'Type 1st name',
  	'Type 2nd name',
  	'Type Place',
 	'Type Restaurants name',
 	'Type favorite food',
 	'Type an adjective',
 	'Famous Celebrity',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
 	'',
   ];

var answers=[];
// Keep track of current prompt we're on
var currentPrompt = 0;

// A function that will call the next prompt
var nextPrompt = function() {
  //if there's no answer in the form
  if (currentPrompt != 0){
    answers.push($('input').val());
  }
	// if there is a next prompt
	if (currentPrompt < prompts.length) {
		// put first prompt in all html elements with class 
		$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
		// move the next prompt into variable currentPrompt 
		currentPrompt = currentPrompt + 1;
	}
	//or else if we're at the end of the array
	else {
		// put a new message into the html.
		showFinal();
	}
}

//puts user answers into HTML
var showFinal = function() {
  $('.prompt').html(
  'This is the story of<span class="fill">'
  + answers[0]
  +'</span>and the <span class="fill">'
  +answers[1] 
  +'</span> <span class="fill">'
  +answers[2]
  +'</span> . <span class="fill">'
  +answers[3]
  + '</span> met his friend <span class="fill">'
  +answers[4]
  +'</span> . <span class="fill">'
  +answers[5]+
  '</span> , they walked to the<span class="fill">'
  +answers[6]
  +'</span> . They felt Hungry and went to the local restaurant<span class="fill">'
  +answers[7]
  +'</span>. They ordered a large plate of <span class="fill">'
  +answers[8]
  +'</span>. At the restaurant, the famous <span class="fill">'
  +answers[9]
  +'</span> <span class="fill">'
  +answers[10]
  +'</span> was sitting next to them.<span class="fill">'
  +answers[11]
  +'</span> <span class="fill">'
  +answers[12]
  +'</span> <span class="fill">'
  +answers[13]
  +'</span> <span class="fill">'
  +answers[14]
  +'</span> <span class="fill">'
  +answers[15]
  +'</span> <span class="fill">'
  +answers[16]
  +'</span> <span class="fill">'
  +answers[17]
  +'</span> <span class="fill">'
  +answers[18]
  +'</span> <span class="fill">'
  +answers[19]
  +'</span> <span class="fill">'
  +answers[20]
  +'</span> <span class="fill">'
  +answers[21]
  +'</span> <span class="fill">'
  +answers[22]
  +'</span> <span class="fill">'
  +answers[23]
  +'</span> <span class="fill">'
  +answers[24]
  +'</span> <span class="fill">'
  +answers[25]
  +'</span> <span class="fill">'
  +answers[26]
  +'</span> <span class="fill">'
  +answers[27]
  +'</span> <span class="fill">'
  +answers[28]
  +'</span> <span class="fill">'
  +answers[29]
  +'</span> <span class="fill">'
  +answers[30]
  +'</span> <span class="fill">'
  +answers[31]
  +'</span> <span class="fill">'
  +answers[32]
  +'</span> <span class="fill">'
  +answers[33]
  +'</span> <span class="fill">'
  +answers[34]
  +'</span> <span class="fill">'
  +answers[35]

  );
  
  $('button').hide();
  
}
// run nextPrompt function when button is clicked
$('button').click(function() {
	nextPrompt();
});

$('#reload').on('click', function() {
	// window.location.href=window.location.href;
	document.location.reload(true);
})

// Show the first prompt as soon as js loads
nextPrompt();

