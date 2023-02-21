function scuberGreetingForFeet(f){
  switch (true)
  {
    case f < 400: return 'This one is on me!';
    case f <= 2000: return 'That will be twenty bucks.';
    case f < 2500: return 'I will gladly take your thirty bucks.';
    case f > 2500: return 'No can do.';
  }
}

function ternaryCheckCity(c){
  switch (c)
  {
    case "NYC": return 'Ok, sounds good.'
    default: return 'No go.';
  }
}

function switchOnCharmFromTip(t){
  switch (t)
  {
  case 'generous': return 'Thank you so much.';
  case 'not as generous': return 'Thank you.';
  case 'thanks for everything': return 'Bye.';
  }
}