let state = 0;
function preload() {
  cursorImg1 = loadImage(
    "/lessons/games/protect_the_castle/castle_assets/openCursor.png"
  );
  cursorImg2 = loadImage(
    "/lessons/games/protect_the_castle/castle_assets/closedCursor.png"
  );
  enemyImg = loadImage(
    "/lessons/games/protect_the_castle/castle_assets/enemyImg.png"
  );
  castleImg = loadImage(
    "/lessons/games/protect_the_castle/castle_assets/castle.png"
  );
}

function setup() {
  createCanvas();
  castle = new Sprite();
  castle.w = 100;
  castle.h = 100;
  castle.img = castleImg;
  castle.physics = STATIC;
  castle.health = 100;
  castle.scale = 2;

  enemies = new Group();
  enemies.physics = DYNAMIC;
  enemies.img = enemyImg;
  enemies.scsale = 2;

  cursor = new Sprite();
  cursor.physics = NONE;
  cursor.img = cursorImg1;
  cursor.scale = 5;
  cursor.w = 50;
  cursor.h = 50;

  setInterval(spawnEnemies, 500);

  cursor.overlapping(enemies, mouseAttack);
  enemies.overlapping(castle, enemyAttack);
}

function update() {
  switch (state) {
    case 0:
      mouseMovement();
      enemyMovement(); // playing
      break;
    case 1: //Paused
      break;
  }

  mouseAttack();

  enemyAttack();
}

function draw() {
  switch (state) {
    case 0: // playing
      background(0);
      break;
    case 1: // paused
      //TODO draw paused menu
      break;
  }
}

function mouseMovement() {
  cursor.x = mouse.x;
  cursor.y = mouse.y;
}
function mouseAttack(c, e) {
  if (mouse.released()) {
    e.remove();
  }
}
function enemyMovement() {
  for (e of enemies) {
    e.rotation = e.angleTo(castle);
    e.direction = e.rotation;
    e.speed = 1;
  }
}
function enemyAttack(e, c) {
  c.health -= 0.1;
}

function spawnEnemies() {
  let margin = 64;
  let x, y;
  if (state == 0) {
    console.log("WIrk");
    //spawn logic
    let side = floor(random(0, 4));

    if (side === 0) {
      x = random(0, width);
      y = -margin;
    } else if (side === 1) {
      x = random(0, width);
      y = height + margin;
    } else if (side === 2) {
      x = -margin;
      y = random(0, height);
    } else {
      x = width + margin;
      y = random(0, height);
    }

    new enemies.Sprite(x, y);
  }
}
