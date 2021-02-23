var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [ 
                {type: 'pencil',x:1000,y:groundY},
                {type: 'pencil',x:1800,y:groundY - 115},
                {type: 'pencil',x:2400,y:groundY},
                {type: 'pencil',x:4000,y:groundY},
                {type: 'pencil',x:3000,y:groundY - 115},
                {type: 'pencil',x:5000,y:groundY},
                {type: 'pencil',x:5200,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        

    function pencil(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        
        var obstacleImage = draw.bitmap('img/pencil.png');
        myObstacle.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
    }
    
    for (var i = 0; i < levelData.gameItems.length; i++) {
        pencil(levelData.gameItems[i].x, levelData.gameItems[i].y);
    }
    
    
    
    
    function createEnemy(x, y) {
    var enemy = game.createGameItem('enemy', 40);
    var redSquare = draw.bitmap('img/hall-monitor.png');
    redSquare.x = -40;
    redSquare.y = -40;
    enemy.addChild(redSquare);
    
    enemy.x = x;
    enemy.y = y;
    
    game.addGameItem(enemy);
    
    enemy.velocityX = -1;
    
    // enemy.rotationalVelocity = -10;
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-25);
    };
    enemy.onProjectileCollision = function() {
        game.increaseScore(100);
        enemy.fadeOut();
    };
    }
    
    createEnemy(700, groundY - 75);
    createEnemy(2400, groundY - 50);
    createEnemy(3200, groundY - 75);
    createEnemy(3800, groundY - 75);
    createEnemy(4200, groundY - 50);
    createEnemy(4800, groundY - 75);
    createEnemy(5000, groundY - 75);
    createEnemy(5200, groundY - 75);
    
    
    function createBoss(x, y) {
    var enemy = game.createGameItem('enemy', 100);
    var redSquare = draw.bitmap('img/madTeacher.png');
    redSquare.x = -100;
    redSquare.y = -150;
    enemy.addChild(redSquare);
    
    enemy.x = x;
    enemy.y = y;
    
    game.addGameItem(enemy);
    
    enemy.velocityX = - 1;
    
    enemy.onPlayerCollision = function() {
        game.changeIntegrity(-100);
    }
    
    enemy.onProjectileCollision = function() {
        setTimeout(function() {
            console.log('hheyyyyyy');
        
        game.increaseScore(100);
        enemy.fadeOut();
        }, 2000)
        
        
      
       
    }
    }
    
    createBoss(5500, groundY - 90)
    
    function createReward(x, y) {
    var reward = game.createGameItem('reward', 40);
    var redSquare = draw.bitmap('img/hallpass.png');
    redSquare.x = -40;
    redSquare.y = -40;
    reward.addChild(redSquare);
    
    reward.x = x;
    reward.y = y;
    
    game.addGameItem(reward);
    
    reward.velocityX = -1;
    
    reward.onPlayerCollision = function() {
        game.changeIntegrity(15);
        game.increaseScore(100);
        reward.fadeOut();
    }
    }
    createReward(400, groundY - 150);
    createReward(1500, groundY - 150);
    createReward(2600, groundY - 150);
    createReward(3800, groundY - 150);
    createReward(4000, groundY - 150)
    createReward(4800, groundY - 150)
    createReward(5200, groundY - 150)
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}