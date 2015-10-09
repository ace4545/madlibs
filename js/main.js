console.log("JAVASCRIPT Loaded!")

// List of prompts for the user
var prompts = [
	'Type 1st name',
	'Type an adjective',
	'Type a noun',
  	'Type an adjective',
  	'Type 1st name',
  	'Type 2nd name',
  	'Type Place',
 	'Type Restaurants name',
 	'Type favorite food',
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
  + '</span>and the <span class="fill">'
  + answers[1] 
  + '</span> <span class="fill">'
  +answers[2]
  +'</span> . <span class="fill">'
  +answers[3]
  + '</span> met his friend <span class="fill">'
  +answers[4]
  +'</span> . <span class="fill">'
  +answers[5]+
  '</span> ,they walked to the<span class="fill">'
  +answers[6]
  +'</span> . They felt Hungry and went to the locan restaurant<span class="fill">'
  +answers[7]
  +'</span>.They ordered a large plate of <span class="fill">'
  +answers[8]
  +'</span>.<span class="fill">'
  +answers[9]+'</span> <span class="fill">'
  +answers[10]
  +'</span> <span class="fill">'
  +answers[11]
  +'</span> <span class="fill">'
  +answers[12]+'</span> <span class="fill">'
  +answers[13]+'</span> <span class="fill">'
  +answers[14]+'</span> <span class="fill">'
  +answers[15]+'</span> <span class="fill">'
  +answers[16]+'</span>'
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

