function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
    response = "This one is on me!";
  } else if (distance > 2500) {
    response = "No can do.";
  } else if (distance < 2000) {
    response = "That will be twenty bucks.";
  } else {
    response = "I will gladly take your thirty bucks.";
  }
  return response;
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
