var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundFill;
        var classmates;
        var lockers = [];
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundColor = draw.rect(canvasWidth,canvasHeight,'#996600');
            background.addChild(backgroundColor);
            
            var backgroundFill = draw.bitmap('img/hallway.png');
            background.addChild(backgroundFill);
            backgroundFill.x = ground;
            backgroundFill.y = groundY-100;
        
            
            // TODO: 3 - Add a moon and starfield
            
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            var locker;
            for (var i = 0; i < 5; ++i) {
                
                locker = draw.bitmap('img/locker.png');
                locker.x = 425 * i;
                locker.y = groundY - 220;
                background.addChild(locker);
                lockers.push(locker);
            }
            
            // TODO 4: Part 1 - Add a tree
            classmates = draw.bitmap('img/teacher.png');
            classmates.x = 900;
            classmates.y = groundY - 220;
            background.addChild(classmates)
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            classmates.x -= 1;
            if (classmates.x < -200) {
                classmates.x = canvasWidth;
            }
        
         
            
            // TODO 5: Part 2 - Parallax
            
            for (var i = 0; i < lockers.length; i++) {
                lockers[i].x -= 1;
                if (lockers[i].x < -200) {
                    lockers[i].x = canvasWidth;
                }
            }
            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
