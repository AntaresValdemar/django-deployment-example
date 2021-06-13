console.log("connected");

var restart = document.querySelector("#b");

var squares = document.querySelectorAll("td");

var slideTrig = document.querySelector("#slideTrigger");

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
  $("table").fadeOut();

  console.log("Cleared the board");
    $("table").fadeIn();
}

restart.addEventListener('click', clearBoard);

restart.addEventListener('mouseover', function()
{

    this.style.transition = "all 0.5s";
  this.style.color = 'yellow';

  this.style.letterSpacing = "40px";
  this.style.width = "auto";
  this.style.paddingLeft = "50px";
});

restart.addEventListener('mouseout', function()
{
  this.style.transition = "all 0.5s";
  this.style.color = 'white';

  this.style.letterSpacing = "normal"
  this.style.width = "auto";
  this.style.paddingLeft = "10px";

});

slideTrig.addEventListener('click', function(){
  $("#slidingdiv").slideToggle()
  }
);


function cyclexo(){
  if (this.textContent=='') {
    this.textContent='X';
  }
  else if (this.textContent == 'X') {
    this.textContent = 'O';
  }

  else if (this.textContent == 'O') {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', cyclexo);
  squares[i].addEventListener('mouseover', function(){

    this.style.color = 'red';
    this.style.fontSize = "70px";
    this.style.transition = "all 0.2s";
  })

  squares[i].addEventListener("mouseout", function(){

    this.style.color = 'black';
    this.style.fontSize = "60px";
    this.style.transition = "all 0.2s";
  })
}
