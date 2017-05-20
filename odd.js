function isOdd(num) {
  return num % 2 === 1;
}

var person_num = window.prompt("Enter your number!", "10");

if (person_num == null || person_num == "")
{
  txt = "User cancelled the prompt."
} else {
  txt = "Your number, " + person_num + ", is odd: " + isOdd(person_num);
}