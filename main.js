let gameloop;
let walls = [
  [[0,0],570,10],
  [[560,0],10,570],
  [[0,560],570,10],
  [[0,0],10,570],
];

window.onload = function(){
  console.log("HOLA QUE TAL");
  _canvas = document.getElementById("my_canvas");
  _ctx = _canvas.getContext("2d");

  gameloop =  setInterval(pacmanGame, 1000/16.67);

}

function pacmanGame(){
  _ctx.fillStyle = "Black";
  _ctx.fillRect(0, 0, _canvas.width, _canvas.height);


  createWalls();
}

function createWalls(){
  for (var i = 0; i < walls.length; i++){
      x = walls[i][0][0];
      y = walls[i][0][1];
      width = walls[i][1];
      height = walls[i][2];

      _ctx.fillStyle = "Blue";
      _ctx.fillRect(x, y, width, height);
  }
}
