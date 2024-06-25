function scuberGreetingForFeet(feet) {
  if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  } else {
    return "This one is on me!";
  } 
}
 



function ternaryCheckCity(destinationCity) {
  return destinationCity === "NYC" ? "Ok, sounds good." : "No go."; 
}

function switchOnCharmFromTip(tip= [`generous`, `not as generous`]){
  switch (tip) {
case `generous`:
  return `Thank you so much.`;
  case `not as generous`:
  return `Thank you.`;
    default:
    return `Bye.`
break;
  }
}