console.log("JAVASCRIPT Loaded!")


// List of prompts for the user
var prompts = [
	'Type 1st name',
	'Type an adjective',
	'Type the word adventure',
  'Type 1st name',
	'Type 2nd name',
  'Type Place',
 	"Type Restaurant's name",
 	'Type favorite food',
 	'Type an adjective',
 	'Type Famous Celebrity',
 	'Type Famous Celebrity',
 	"Type Restaurant's name",
 	'Type adjective',
 	'Type adjective',
 	'Type adjective',
 	'Type 1st Name',
 	'Type 1st Name',
 	'Type adjective',
 	'Type adjective',
 	'Type adjective',
 	'Type adjective',
 	'Type 1st Name',
 	'Type Random female person in room',
 	'Type same female person in room',
 	'Type Place',
 	'Type plural noun',
 	'Type 1st name',
 	'Type verb ending with ing',
 	'Type adjective',
 	'Type',
 	'Type',
 	'Type',
  'Type',
  'Type',
  'Type',
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
  +'</span> . <span class="fill">'
  +answers[2]
  +'</span> met his friend <span class="fill">'
  +answers[3]
  +'</span> . <span class="fill">'
  +answers[4]
  +'</span>  , they walked to the<span class="fill">'
  +answers[5]
  +'</span> . They felt Hungry and went to the local restaurant<span class="fill">'
  +answers[6]
  +'</span> . They ordered a large plate of <span class="fill">'
  +answers[7]
  +'</span> . At the restaurant, the famous <span class="fill">'
  +answers[8]
  +'</span>was sitting next to them.<span class="fill">'
  +answers[9]
  +'</span> got up, asked for the manager, then left. <span class="fill">'
  +answers[10]
  +'</span> Later, after finishing their <span class="fill">'
  +answers[11]
  +'</span> meal, they left to go to the Spy museum. The Museum was the only <span class="fill">'
  +answers[12]
  +'</span> museum to hold the <span class="fill">'
  +answers[13]
  +'</span> gadgets of the spy world. They left the museum after a couple of hours. Next morning, <span class="fill">'
  +answers[14]
  +'</span> had to go to work. <span class="fill">'
  +answers[15]
  +'</span> worked for a company in a big building where he was Employee 427.None of this mattered because the narrator was off on a tangent. Now, this<span class="fill">'
  +answers[16]
  +'</span>story is everywhere because the <span class="fill">'
  +answers[17]
  +'</span>narrator is crazy. <span class="fill">'
  +answers[18]
  +'</span> was too drunk to realize she in in this story.<span class="fill">'
  +answers[19]
  +'</span> wanted to go to<span class="fill">'
  +answers[20]
  +'</span>with her friends the <span class="fill">'
  +answers[21]
  +'</span>. The students in WDI DTLA 6 were all having a good time because it was Friday and everyone finished their projects on time. Soon however, <span class="fill">'
  +answers[22]
  +'</span> must leave and go back to his hum drum life of coding. The games were<span class="fill">'
  +answers[23]
  +'</span> and the beer was gone.<span class="fill">'
  +answers[24]
  +'</span> ,<span class="fill">'
  +answers[25]
  +'</span> ,<span class="fill">'
  +answers[26]
  +'</span> , and<span class="fill">'
  +answers[27]
  +'</span> were all too<span class="fill">'
  +answers[28]
  +'</span> to care about the<span class="fill">'
  +answers[29]
  +'</span> games that were going on. Soon the <span class="fill">'
  +answers[30]
  +'</span> day would be over. Soon the<span class="fill">'
  +answers[31]
  +'</span>  would be gone and the <span class="fill">'
  +answers[32]
  +'</span>  building would be empty. THE END.This story was though up by James Michael Myers, and finished by all of you.<span class="fill">'

  );
  
  $('#next').hide();
  
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

setTimeout(function() {
  $('.welcome').fadeOut()
  $('.hidden').fadeIn()
}, 1000)
