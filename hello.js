
function jsUcFirst(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function sayHello(name)
{
  console.log("Hello, " + jsUcFirst(name) + "!");
}



sayHello("clarice");