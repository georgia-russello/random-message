var happy = ["When otters sleep, they hold hands", "Elephants find humans cute in the way we find dogs or cats", "A group of hedgehogs is called a prickle"];
var button1 = $('.firstButton');
var place = $('.firstSaying');

button1.on("click", firstClick);

function firstClick () {
  event.preventDefault();
  var rand = Math.floor(Math.random() * happy.length);
  var output = happy[rand];
  place.text(output);
}
//
var inspire = ["Let your smile change the world, but don't let the world change your smile", "Everyday may not be a good day, but there is good in every day", "Success is a journey not a destination"];
var button2= $('.secondButton');

button2.on ("click", secondClick);

function secondClick () {
  console.log("second clicked");
  var rand= inspire[Math.floor (Math.random () * inspire.length)];
  place.text(rand);
}

var laugh = ["Don't trust atoms, they make up everything!","Did you hear about the guy who invented the knock-knock joke? He won the no-bell prize", "I'd like to give a shoutout to all the sidewalks, for keeping me off the streets"];
var button3= $('.thirdButton');

button3.on ("click", thirdClick);

function thirdClick () {
  var rand = laugh[Math.floor (Math.random () * laugh.length)];
  console.log("Clicked!!!")
  place.text(rand);
}
