var allowed = 5;
var peopleInside = 0
var iniated = true;
var text = {
   'step1'  : '<p>Druk op de knoppen aan de zijkant van het apparaat om de toegestaane hoeveelheid omhoog te doen of omlaag.</p>',
   'step2'  : '<p>Druk op de + of - om de aantal mensen te verhogen of verlagen in een ruimte</p><p>Wanneer de waarde van mensen die binnen zijn en de toegestaande gelijk staan wordt de alarm rood</p><p>Wanneer de waarde van de mensen die binnen zijn hoger is dan de toegestaande. Gaat het alarm knipperen</p>',
};
var currentStep = 1;

// basic off

document.getElementById("previous-step").style.display = 'none';

   setInterval(function(){
      if (iniated==true) {
         // red light on
         if (peopleInside == allowed) {
            document.getElementById("rect1858").style.fill = 'red';
         }
         // red light alarming
         else if (peopleInside >= allowed) {
            blink();
         } else {
            document.getElementById("rect1858").style.fill = 'white';
         }
         document.getElementById("digit-display").innerHTML = peopleInside;
      } 
   }, 
   500);

// blinking function
function blink() {
   setTimeout(function () {
      document.getElementById("rect1858").style.fill = 'red';
   }, 1000);
   setTimeout(function () {
      document.getElementById("rect1858").style.fill = 'white';
   }, 1500);
}
//increase button
document.getElementById("g159").onclick = function(){
   allowed++;
   iniated = false;
   document.getElementById("digit-display").innerHTML = allowed;
   document.getElementById("g159").style.display = 'none';
   setTimeout(() => { iniated = true; document.getElementById("g159").style.display = 'block'; }, 500);
}

//decrease button
document.getElementById("g159-7").onclick = function(){
   if (allowed != 0) {
      allowed--;
      iniated = false;
      document.getElementById("digit-display").innerHTML = allowed;
   }
   document.getElementById("g159-7").style.display = 'none';
   setTimeout(() => { iniated = true; document.getElementById("g159-7").style.display = 'block'; }, 500);
}

// increase the people inside
function increaseInside() {
   peopleInside++;
}

// decrease the people inside
function decreaseInside() {
   if (peopleInside != 0) {
      peopleInside--;
   }
}

// next step
function nextStep() {
   console.log('ailmao');
   console.log(currentStep);
   currentStep++;
   goToStep();
   if (currentStep >= 1 && currentStep != 2) {
      document.getElementById("previous-step").style.display = 'inline';
   }
}

// previous step
function previousStep() {
   if (currentStep != 1) {
      currentStep--;
      document.getElementById("previous-step").style.display = 'inline';
      goToStep();
   }
}

// tutorial

function goToStep() {
   console.log(currentStep);
   document.getElementById("tutorial-text").innerHTML = `<p>${text['step'+currentStep]}</p>`;
   switch(currentStep) {
      case 1:
        console.log('1');
        document.getElementById("previous-step").style.display = 'none';
        document.getElementById("people-button").style.display = 'none';
        document.getElementById("next-step").style.display = 'inline';
        break;
      case 2:
         console.log('2');
         document.getElementById("previous-step").style.display = 'inline';
         document.getElementById("next-step").style.display = 'none';
         document.getElementById("people-button").style.display = 'block';
        break;
      default:
        // code block
    }
}

goToStep();

 
// Call function using Window object
// var assignedFunction = 'step'+currentStep;
// // find object
// fn = window[assignedFunction];
// // is object a function?
// if (typeof fn === "function") fn();