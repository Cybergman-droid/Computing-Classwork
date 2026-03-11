let walkable, ground, mario;
let tilesize = 16;

function setup() {
  createCanvas();
  world.gravity.y = 10;

  walkable = new Group();

  ground = new walkable.Group();
  ground.physics = STATIC;
  ground.img = groundImg;
  ground.tile = "=";
  ground.w = tilesize;
  ground.h = tilesize;

  //mario
  mario = new Sprite();
  mario.img = marioImg;
  mario.tile = "m";
  mario.w = tilesize;
  mario.h = tilesize;

  goombas = new Group();
  goombas.physics = DYNAMIC;
  goombas.img = goombaImg;
  goombas.tile = "g";
  goombas.w = tilesize;
  goombas.h = tilesize;

  // pipe Left
  pipeLeft = new walkable.Group();
  pipeLeft.physics = STATIC;
  pipeLeft.img = pipeLeftImg;
  pipeLeft.tile = "L";
  pipeLeft.w = tilesize;
  pipeLeft.h = tilesize;

  // pipe right
  pipeRight = new walkable.Group();
  pipeRight.physics = STATIC;
  pipeRight.img = pipeRightImg;
  pipeRight.tile = "R";
  pipeRight.w = tilesize;
  pipeRight.h = tilesize;

  // pipe Top Left
  pipeTopLeft = new walkable.Group();
  pipeTopLeft.physics = STATIC;
  pipeTopLeft.img = pipeTopLeftImg;
  pipeTopLeft.tile = "l";
  pipeTopLeft.w = tilesize;
  pipeTopLeft.h = tilesize;

  // pipe Top Right
  pipeTopRight = new walkable.Group();
  pipeTopRight.physics = STATIC;
  pipeTopRight.img = pipeTopRightImg;
  pipeTopRight.tile = "r";
  pipeTopRight.w = tilesize;
  pipeTopRight.h = tilesize;

  //Brick
  smashable = new walkable.Group();
  bricks = new smashable.Group();
  bricks.physics = STATIC;
  bricks.img = brickImg;
  bricks.tile = "b";
  bricks.w = tilesize;
  bricks.h = tilesize;

  // Question Box
  questionBox = new smashable.Group();
  questionBox.physics = STATIC;
  questionBox.img = questionBoxImg;
  questionBox.tile = "?";
  questionBox.w = tilesize;
  questionBox.h = tilesize;

  new Tiles(
    [
      "........................................................................................................................................................................................................................................................................................",
      "........................................................................................................................................................................................................................................................................................",
      "...................................................................................g.g..................................................................................................................................................................................................",
      "...................................................................................bbbbbbbb...bbb?.......................?.............bbb.....b??b.....................................................................................................................................",
      ".......................?.............................................................................................................................................................................................bb.................................................................",
      "....................................................................................................................................................................................................................bbb.................................................................",
      "...................................................................................................................................................................................................................bbbb.................................................................",
      "................?....b?b?b...................................................b?b.................?.....b?.....bb......?..?..?......b............bb................................................................bbbbb.................bb..............................................",
      "...............................................lr.........lr.............................................................................................b..b............bb..b...................................bbbbbb................bbbb.............................................",
      ".......................................lr......LR.........LR............................................................................................bb..bb..........bbb..bb..............bb?b...............bbbbbbb...............bbbbbb............................................",
      "............................lr.........LR......LR.........LR...........................................................................................bbb..bbb........bbbb..bbb.......lr...................lr.bbbbbbbb...............bbbbbb............................................",
      ".......................g....LR.........LR..g...LR....g.g..LR...........................................g.g............................................bbbb..bbbb......bbbbb..bbbb......LR............g.g....LRbbbbbbbbb.........b.....bbbbbb............................................",
      "======================================================================..===============...=================================================================================..===========================================================================================================",
      "======================================================================..===============...=================================================================================..===========================================================================================================",
    ],

    0,
    16,
    tilesize,
    tilesize - 1
  );

  walkable.scale = 2;
  allSprites.w = tilesize / 2;
  allSprites.h = tilesize / 2;
  mario.w = tilesize;
  mario.h = tilesize;
  goombas.scale = 2;
}

function preload() {
  marioImg = loadImage("/lessons/games/mario/mario_assets/Mario.png");
  groundImg = loadImage("/lessons/games/mario/mario_assets/ground.png");
  goombaImg = loadImage("/lessons/games/mario/mario_assets/goomba.png");
  pipeLeftImg = loadImage("/lessons/games/mario/mario_assets/pipeleft.png");
  pipeRightImg = loadImage("/lessons/games/mario/mario_assets/pipeRight.png");
  pipeTopLeftImg = loadImage(
    "/lessons/games/mario/mario_assets/pipeTopLeft.png"
  );
  pipeTopRightImg = loadImage(
    "/lessons/games/mario/mario_assets/pipeTopRight.png"
  );
  brickImg = loadImage("/lessons/games/mario/mario_assets/brick.png");
  questionBoxImg = loadImage("/lessons/games/mario/mario_assets/question.png");
}

function draw() {}

function update() {}
