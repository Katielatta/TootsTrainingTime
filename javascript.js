var warmUp = [
	'Calf Stretch',
	'Hamstring Stretch',
	'Quad Stretch',
	'Groin Stretch',
	'Tricep Stretch',
	'Chest Stretch',
	'Back Stretch',
	'Shoulder Stretch',
	'Hands to Knees',
	'Jumping Jacks'
];

var upperWorkout = [
	'Press ups',
	'Cobras',
	'Bent Over Rows',
	'Tricep Extension',
	'Bicep Curls',
	'Kettle Bell Swings',
	'Shoulder Circles',
	'Shoulder Press',
	'Lateral Raise',
	'Swimmers Press',
	'Deadlift',
	'Figure 8s',
	'Upright Row',
	'Ybell Floor Chest Press',
	'Ybell Slingshot'
];

var lowerWorkout = [
	'Front Squats',
	'Braced Squats',
	'Jump Squats',
	'Twisting Torso Lunge',
	'Dynamic Lunge',
	'Single Leg Lunge',
	'Calf Raise',
	'Goblet Squats',
	'Glute Bridge',
	'Sumo High Pull',
	'Side Step Ybell Swing',
	'Kettle Bell Lunge Press',
	'Side Plank Raise',
	'Resistance Band Side Step'
];

var coreWorkout = [
	'Plank',
	'Weight Drag Plank',
	'Hands to Elbow',
	'Leg Raises',
	'Butterfly Kicks',
	'Lower Crunch',
	'Crunches',
	'Hollow Body Hold',
	'Reverse Body Hold',
	'Bicycles',
	'Side Plank',
	'Ybell Windmill',
	'Russian Twist',
	'Ybell Plank Row'
];

var cardioWorkout = [
	'Burpees',
	'Mountain climber',
	'Turkish getup',
	'Ybell Clean and Press'
];


function generateWarmUp() {
	var warmUpHeader = document.querySelector('#warmUpHeader');
	var warmUpText1 = document.querySelector('#warmup1');
	var warmUpText2 = document.querySelector('#warmup2');
	var warmUpText3 = document.querySelector('#warmup3');
	var b = warmUp.slice()
	var newArr = [];

	for(let i= 0; i<3; i++){
		let arr = b[Math.floor(Math.random()*b.length)];  
		let index = b.indexOf(arr);
		b.splice(index, 1 );
		newArr.push(arr)
	}

	warmUpHeader.style.display = "inline-block";
	warmUpText1.innerHTML = newArr[0];
	warmUpText2.innerHTML = newArr[1];
	warmUpText3.innerHTML = newArr[2];
	warmUpText1.style.display = "inline-block";
	warmUpText2.style.display = "inline-block";
	warmUpText3.style.display = "inline-block";
}

function generateUpper() {
	var upperHeader = document.querySelector('#upperHeader');
	var upperText1 = document.querySelector('#upper1');
	var upperText2 = document.querySelector('#upper2');
	var upperText3 = document.querySelector('#upper3');
	var b = upperWorkout.slice()
	var newArr = [];

	for(let i= 0; i<3; i++){
		let arr = b[Math.floor(Math.random()*b.length)];  
		let index = b.indexOf(arr);
		b.splice(index, 1 );
		newArr.push(arr)
	}
	
	upperHeader.style.display = "inline-block";
	upperText1.innerHTML = newArr[0];
	upperText2.innerHTML = newArr[1];
	upperText3.innerHTML = newArr[2];
	upperText1.style.display = "inline-block";
	upperText2.style.display = "inline-block";
	upperText3.style.display = "inline-block";
}

function generateLower() {
	var lowerHeader = document.querySelector('#lowerHeader');
	var lowerText1 = document.querySelector('#lower1');
	var lowerText2 = document.querySelector('#lower2');
	var lowerText3 = document.querySelector('#lower3');
	var b = lowerWorkout.slice()
	var newArr = [];

	for(let i= 0; i<3; i++){
		let arr = b[Math.floor(Math.random()*b.length)];  
		let index = b.indexOf(arr);
		b.splice(index, 1 );
		newArr.push(arr)
	}
	
	lowerHeader.style.display = "inline-block";
	lowerText1.innerHTML = newArr[0];
	lowerText2.innerHTML = newArr[1];
	lowerText3.innerHTML = newArr[2];
	lowerText1.style.display = "inline-block";
	lowerText2.style.display = "inline-block";
	lowerText3.style.display = "inline-block";
}

function generateCore() {
	var coreHeader = document.querySelector('#coreHeader');
	var coreText1 = document.querySelector('#core1');
	var coreText2 = document.querySelector('#core2');
	var coreText3 = document.querySelector('#core3');
	var b = coreWorkout.slice()
	var newArr = [];

	for(let i= 0; i<3; i++){
		let arr = b[Math.floor(Math.random()*b.length)];  
		let index = b.indexOf(arr);
		b.splice(index, 1 );
		newArr.push(arr)
	}
	
	coreHeader.style.display = "inline-block";
	coreText1.innerHTML = newArr[0];
	coreText2.innerHTML = newArr[1];
	coreText3.innerHTML = newArr[2];
	coreText1.style.display = "inline-block";
	coreText2.style.display = "inline-block";
	coreText3.style.display = "inline-block";
}

function generateCardio() {
	var randomIndex = Math.floor(Math.random() * (cardioWorkout.length));
	var cardio = document.querySelector('#cardio');
	var cardioHeader = document.querySelector('#cardioHeader');

	cardioHeader.style.display = "inline-block";	
	cardio.innerHTML = cardioWorkout[randomIndex];
	cardio.style.display = "inline-block";
}


// TIMER

var countdownVar;
var resetButton = document.getElementById("resetButton");


function countdown() {
  var sec = 30;
  var clockSound = document.getElementById("clockSound");
  
  countdownVar = setInterval(function() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    resetButton.style.display = "inline-block";
    if (sec < 0) {
      sec = 30;
      clockSound.play();
    } 
  }, 1000);
}

// RESET BUTTON

resetButton.onclick = function() {
	clearInterval(countdownVar);
	document.getElementById("timer").innerHTML = "0";
}