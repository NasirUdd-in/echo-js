 // create a new div element
  const newDiv = document.createElement("div");
newDiv.className = "foo";
   
   const help = document.createElement("h3");
   
   help.className = "header area";
   
   newDiv.appendChild(help);
  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  help.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.querySelector(".block_benefits");
  console.log(currentDiv);
  currentDiv.insertBefore(newDiv, currentDiv.childNodes[0]);




function myFunction1() {
  document.getElementById("card1").style.backgroundColor = "green";
  var x = document.querySelector("myDIV");
  if (x.childNodes[0].style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction2() {
  document.getElementById("card2").style.backgroundColor = "green";
  var x = document.querySelector("myDIV");
  if (x.childNodes[1].style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction3() {
  document.getElementById("card3").style.backgroundColor = "green";
  var x = document.querySelector("myDIV");
  if (x.childNodes[2].style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}