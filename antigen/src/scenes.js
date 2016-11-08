//This file will hold all of the scenes we'll build for Antigen
var overage;

Crafty.scene("main_menu", function(){

    console.log("menu");
    var buttonColor = "Gold";
    var selectedColor = "LightCoral";

    var buttonStyle = {'border-radius': '25px', 
            'border': '3px solid maroon', 
            'box-shadow': '5px 10px 14px 2px #000000'};
    var selectedStyle = {'border-radius': '25px',
            'border': '3px solid maroon',
            'box-shadow': '5px 10px 18px 4px #000000'};

    var selected = 0;
    var buttonArray = new Array(5);

    //Title Card
    Crafty.e("2D, DOM, Image")
        .image(imgPath + "title_card.png")
        .attr({x:235, y: 58});
    
    //Text for buttons
    Crafty.e("2D, DOM, Text")
        .text("New Game")
        .attr({x:377 , y:220, w:200, z:10})
        .textFont({size: '30px'});
    Crafty.e("2D, DOM, Text")
        .text("Continue")
        .attr({x:390 , y:290, w:200, z:10})
        .textFont({size: '30px'});
    Crafty.e("2D, DOM, Text")
        .text("How To Play")
        .attr({x:370 , y:360, w:200, z:10})
        .textFont({size: '30px'});    
    Crafty.e("2D, DOM, Text")
        .text("Options")    
        .attr({x:400 , y:430, w:200, z:10})
        .textFont({size: '30px'});
    Crafty.e("2D, DOM, Text")
        .text("Credits")    
        .attr({x:405 , y:500, w:200, z:10})
        .textFont({size: '30px'});

    //The actual buttons
    buttonArray[0] = Crafty.e("2D, DOM, Color")
        .attr({x: 335, y:210, w:240, h:50, z:9})
        .css(selectedStyle) 
        .color(selectedColor);
    buttonArray[1] = Crafty.e("2D, DOM, Color")
        .attr({x: 335, y:280, w:240, h:50, z:9})
        .css(buttonStyle) 
        .color(buttonColor);
    buttonArray[2] = Crafty.e("2D, DOM, Color")
        .attr({x: 335, y:350, w:240, h:50, z:9})
        .css(buttonStyle) 
        .color(buttonColor);
    buttonArray[3] = Crafty.e("2D, DOM, Color")
        .attr({x: 335, y:420, w:240, h:50, z:9})
        .css(buttonStyle) 
        .color(buttonColor);
    buttonArray[4] = Crafty.e("2D, DOM, Color")
        .attr({x: 335, y:490, w:240, h:50, z:9})
        .css(buttonStyle) 
        .color(buttonColor);


    var manager = Crafty.e("2D, manager");

    manager.bind('KeyDown', function(e){
        if(e.key == Crafty.keys["DOWN_ARROW"] || e.key == Crafty.keys["S"]){
            buttonArray[selected].css(buttonStyle).color(buttonColor);
            selected++;
            if(selected > 4) selected = 0;
            buttonArray[selected].css(selectedStyle).color(selectedColor);
            if(SFX_VOL != 0) Crafty.audio.play("menuFX",1,SFX_VOL);
        }
        else if(e.key == Crafty.keys["UP_ARROW"] || e.key == Crafty.keys["W"]){
            buttonArray[selected].css(buttonStyle).color(buttonColor);
            selected--;
            if(selected < 0) selected = 4;
            buttonArray[selected].css(selectedStyle).color(selectedColor);
            if(SFX_VOL != 0) Crafty.audio.play("menuFX",1,SFX_VOL);
        }
        else if(e.key == Crafty.keys["SPACE"] || e.key == Crafty.keys["ENTER"]){
            switch(selected){
                case 0:
                    NEW_GAME = true;
                    Crafty.scene("overworld_map");
                    GAME_FINISHED=false;
                    break;
                case 1:
                    if(GAME_FINISHED==false) Crafty.scene("load_game");
                    break;
                case 2:
                    Crafty.scene("how_to_play");
                    break;
                case 3:
                    Crafty.scene("options");
                    break;
                case 4:
                    Crafty.scene("credits");
                    break;
            }
        }
        else if(e.key == Crafty.keys["P"]){
            Crafty.scene("game_win");
        }
        else if(e.key == Crafty.keys["L"]){
            Crafty.scene("game_lose");
        }
    });

});

Crafty.scene("credits", function(){
    var wait = 300;
    //Title Card
    Crafty.e("2D, DOM, Image")
        .image(imgPath + "title_card.png")
        .attr({x:235, y:58, z:12});
    //Empty Blue Color Entity
    Crafty.e("2D, DOM, Color")
        .attr({x:235, y:0, w:800, h:165, z:11})
        .color("#196EFC");
    //Credit Texts
    Crafty.e("2D, DOM, Text, Delay")
        .text("Brought to you by:")
        .attr({x:233, y:210, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'})
        .delay(function(){
            if (wait > 0) wait--;
            else Crafty("Text").each(function(){this.y -= 1;}); },10,-1);
    Crafty.e("2D, DOM, Text, Delay")
        .text("People Who Hand Out Fliers Outside of Raves")
        .attr({x:233, y:240, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '29px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Weston Mossman:")
        .attr({x:233, y:315, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '27px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Strategy Lead")
        .attr({x:233, y:350, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Photoshop Extraordinaire")
        .attr({x:233, y:380, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Audio")
        .attr({x:233, y:410, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Design")
        .attr({x:233, y:440, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Benjamin Gordon:")
        .attr({x:233, y:475, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '27px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Puzzle Lead")
        .attr({x:233, y:510, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Audio")
        .attr({x:233, y:540, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Design")
        .attr({x:233, y:570, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Gavin Mack:")
        .attr({x:233, y:605, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '27px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("CSS layout")
        .attr({x:233, y:640, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Credits")
        .attr({x:233, y:670, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Design")
        .attr({x:233, y:700, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Special thanks to Josh Nussbaum!")
        .attr({x:233, y:740, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Developed in JavaScript with CraftyJS")
        .attr({x:233, y:780, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Visual editing done in Adobe Photoshop")
        .attr({x:233, y:820, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    Crafty.e("2D, DOM, Text, Delay")
        .text("Audio created in Ableton")
        .attr({x:233, y:860, w:500, z:10})
        .css({'text-align': 'center'})
        .textFont({size: '25px'});
    
    //Backspace or Escape to go back to main menu
    var manager = Crafty.e("2D, manager");
    
    manager.bind('KeyDown', function(e){
        if(e.key == Crafty.keys["BACKSPACE"] || e.key == Crafty.keys["ESC"] || 
           e.key == Crafty.keys["SPACE"] || e.key == Crafty.keys["ENTER"]){
            Crafty.scene("main_menu");
        }
    });
    
});

Crafty.scene("load_game", function(){
    JUST_LOADED = true;
    NEW_GAME = false;

    for(var i = 0; i < AREAS.length; i++){
        var curr = AREAS[i];
        curr[0] = Crafty.storage(curr.name);
    }
    HARD_SOLVED = Crafty.storage('HARD_SOLVED');
    MED_SOLVED = Crafty.storage('MED_SOLVED');
    EASY_SOLVED = Crafty.storage('EASY_SOLVED');
    MATCHED = Crafty.storage('MATCHED');

    Crafty.scene("overworld_map");

});

Crafty.scene("overworld_map", function(){
    
    if(OST_VOL != 0) Crafty.audio.play("mapTune", -1, OST_VOL*0.3);

    var oldAreas = [0];

    function init(){
        NEW_GAME=false;
        for(var i=0; i<AREAS.length; i++){
           
            var tmp = AREAS[i];
            tmp[0]=0;
            tmp.justInfected=false;
            //initialize all areas to uninfected and justInfected to false
        }
        //refer to a random AREA element and set it to contagious
        var tmp = Crafty.math.randomElementOfArray(AREAS);
        
        
        tmp[0] = 2;
        if(tmp.length==6){
            //create random to choose if you want three greens or two yellows, randomNum 1 means two yellows
                var i=1;
                while(i<6){
                        var tmpConnection = tmp[i];
                        tmpConnection[0]=1;
                        i++;
                }
        }
        else if(tmp.length==5){
            //Create random to choose if you want two yellows or one green and one red, 1 is two yellows
               var done = false;
                for(var i=1; i<5;i++){
                    var tmpConnection = tmp[i];
                    tmpConnection[0]=1;
                }
                while(!done){
                    var randomNum = Crafty.math.randomInt(1,4);
                    var tmpConnection = tmp[randomNum];
                    var randomNum2 = Crafty.math.randomInt(1,tmpConnection.length-1);
                    var tmpConnection2 = tmpConnection[randomNum2];
                    if(tmpConnection2[0]==0){
                        tmpConnection2[0]=1;
                        done=true;
                    }
                }
                
            
        }
        else if(tmp.length==4){
            //Create random to choose if you want two yellows or one green and one red, 1 is two yellows
                for(var i=1; i<4;i++){
                    var tmpConnection = tmp[i];
                    tmpConnection[0]=1;
                }
                var i = 0;
                while(i<2){
                    var randomNum = Crafty.math.randomInt(1,3);
                    var tmpConnection = tmp[randomNum];
                    var randomNum2 = Crafty.math.randomInt(1,tmpConnection.length-1);
                    var tmpConnection2 = tmpConnection[randomNum2];
                    if(tmpConnection2[0]==0){
                        tmpConnection2[0]=1;
                        i++;
                    }
                }
                
            
        }
        else if(tmp.length==3){
            //Create random to choose if you want two yellows or one green and one red, 1 is two yellows
                for(var i=1; i<3;i++){
                    var tmpConnection = tmp[i];
                    tmpConnection[0]=1;
                }
                var i = 0;
                while(i<3){
                    var randomNum = Crafty.math.randomInt(1,2);
                    var tmpConnection = tmp[randomNum];
                    var randomNum2 = Crafty.math.randomInt(1,tmpConnection.length-1);
                    var tmpConnection2 = tmpConnection[randomNum2];
                    if(tmpConnection2[0]==0){
                        tmpConnection2[0]=1;
                        i++;
                    }
                }
                
            
        }
        else{
            //Create random to choose if you want two yellows or one green and one red, 1 is two yellows
                EAST[0]=1;
                SOUTH_EAST[0]=1;
                CENTRAL[0]=1;
                var randomNum = Crafty.math.randomInt(1,2);
                if(randomNum==1) SOUTH_CENTRAL[0]=1;
                else NORTH_CENTRAL[0]=1;
                
        }
        
        
        /*
        tmp[0] = 3;
        if(tmp.length>=4){
            //create random to choose if you want three greens or two yellows, randomNum 1 means two yellows
            var randomNum = Crafty.math.randomInt(1,2);
            if(randomNum==1){
                var i=0;
                while(i!=2){
                    var randomConnection = Crafty.math.randomInt(1,tmp.length-1);
                    var tmpConnection = tmp[randomConnection];
                    if(tmpConnection[0]==0){
                        tmpConnection[0]=2;
                        i++;
                    }
                }
                
            }
            else{//randomNum is 2
                var i=0;
                while(i!=3){
                    var randomConnection = Crafty.math.randomInt(1,tmp.length-1);
                    var tmpConnection = tmp[randomConnection];
                    if(tmpConnection[0]!=0) continue;
                    tmpConnection[0]=1;
                    i++;
                } 
            }
        }
        else if(tmp.length==3){
            //Create random to choose if you want two yellows or one green and one red, 1 is two yellows
            var randomNum = Crafty.math.randomInt(1,2);
            if(randomNum==1){
               
                for(var i=1; i<3;i++){
                    var tmpConnection = tmp[i];
                    tmpConnection[0]=2;
                }
                
            }
            else{//randomNum is 2
                var i=0;
                var randomConnection = Crafty.math.randomInt(1,2);
               
               if(randomConnection==1){//make first connection infectious
                    var tmpConnection = tmp[1];
                    var tmpConnection2 = tmp[2];
                    tmpConnection[0]=3;
                    tmpConnection2[0]=1;
                }
                else{//randomConnection is 2, make second connection infectious
                    var tmpConnection = tmp[2];
                    var tmpConnection2 = tmp[1];
                    tmpConnection[0]=3;
                    tmpConnection2[0]=1;
                }
            }
        }
        else{//North east
            var randomNum = Crafty.math.randomInt(1,2);
            var randomSituation = Crafty.math.randomInt(1,2);
            if(randomNum==1){//three greens
                
                if(randomSituation==1){//East, Central and South East are infected dawg
                    EAST[0]=1;
                    SOUTH_EAST[0]=1;
                    CENTRAL[0]=1;
                }
                else{//randomSit is 2, East, Central, and North Central are infected yo
                    EAST[0]=1;
                    NORTH_CENTRAL[0]=1;
                    CENTRAL[0]=1;
                }
            }
            else{//random is 2, two yellows
                var randomSituation = Crafty.math.randomInt(1,2);
                if(randomSituation==1){//East and Central infected dawg
                    EAST[0]=2;
                    CENTRAL[0]=2;
                }
                else{//randomSit is 2, East, Central, and North Central are infected yo
                  EAST[0]=1;
                  SOUTH_EAST[0]=1;
                }
            }
        }
        */
        updateMap();
    }
    
    
    
    
    
    
    function progress(){//CURRENT_AREA is the area you were just playing in, JUST_WON is if you won the level or not
        
        for(var i=0; i<AREAS.length; i++){
            var tmp = AREAS[i];
            tmp.justInfected=false;
            console.log("doing set all areas to not just infected loop");
            //initialize all areas to uninfected and justInfected to false
        }
        for(var i = 0;i<AREAS.length;i++){
               var tmp = AREAS[i];
               if(tmp[0]==1){
                   console.log("the area %s is just infected right after set all to not infected?", tmp.name);
                   console.log(tmp.justInfected);
               }
        
        }
        
        
        
        /*for(var i = 0; i <= 9; i++){
            var tmp = AREAS[i];
            oldAreas[i]=tmp[0];
            console.log("%o at index %o", oldAreas[j], i);
        }
        */
        
        
        var infectedStates = 0;
        var contagiousStates = 0;
        for(var i = 0;i<AREAS.length;i++){
               var tmp = AREAS[i];
               if(tmp[0]==3) contagiousStates++;
               if(tmp[0]!=0) infectedStates++;
        
        }
        for(var j=0;j<AREAS.length;j++){//loops through all sickly areas and either progresses them or has them infect others
            if(AREAS[j]!=CURRENT_AREA){
                var tmp = AREAS[j];
                if(tmp[0]==3) infect(tmp, 8);//80 percent chance of infecting
                else if(tmp[0]==1){
                    if(infectedStates>7){
                        var randomSituation = Crafty.math.randomInt(1,10);//100 percent chance of progressing
                        if(randomSituation<=7 && !(tmp.justInfected)) tmp[0]++;
                    }
                    else{
                        var randomSituation = Crafty.math.randomInt(1,10);//80 percent chance of progressing
                        if(randomSituation<=8 && !(tmp.justInfected)) tmp[0]++;
                    }
                }
                else if(tmp[0]==2){
                    if(contagiousStates>4){
                        var randomSituation = Crafty.math.randomInt(1,10);//40 percent chance of progressing
                        if(randomSituation<=4) tmp[0]++;
                    }
                    else{
                        var randomSituation = Crafty.math.randomInt(1,10);//50 percent chance of progressing
                        if(randomSituation<=5) tmp[0]++;
                    }
                }
            }
        }
        //Checking if you won after so that if you did, the area just healed wont by chance become green from the random choice
        if(JUST_WON) CURRENT_AREA[0]=0;
        else{
            if(CURRENT_AREA[0]==3)infect2(CURRENT_AREA);
            else CURRENT_AREA[0]++;
        }
        //showProgress();
        updateMap();
        checkEndGame();
        
        for(var i = 0;i<AREAS.length;i++){
               var tmp = AREAS[i];
               if(tmp[0]==1){
                   console.log("the area %s is just infected?", tmp.name);
                   console.log(tmp.justInfected);
               }
        
        }
    }
    
    //these are both called by the progress function
    
    function infect(area, likelihood){//area is infectious area that is infecting, likelihood is 1-10 that defines likelihood of infecting
        for(var i=1;i<area.length;i++){
            var randomSituation = Crafty.math.randomInt(1,10);
            if(randomSituation<=likelihood){
                var tmpConnection = area[i];
                if(tmpConnection[0]==0) {
                    tmpConnection[0]=1;
                    tmpConnection.justInfected=true;
                }
            }
        }
    }

    //Changed - this function doesn't need a likelihood. It's always gonna be 100%
    function infect2(area){//function to infect 1 area around the level you just went to and failed cause you suck at this game
        for(var i = 1; i < area.length; i++){
            var tmpConnection = area[i];
            if(tmpConnection[0]==0) {
                tmpConnection[0]=1;
                tmpConnection.justInfected=true;
                return;
            }
        }
    }
      
    function traverse(direction){ //bigass switch function that is big. Uses info from keydown to traverse map.
        switch(CURRENT_AREA){
            
            case CALIFORNIA:
                switch(direction){
                    case "East":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_WEST;
                        break;
                    case "West":
                        break;
                    case "South":
                        break;
                }
                break;
            case NORTH_WEST:
                switch(direction){
                    case "East":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "North":
                        break;
                    case "West":
                        break;
                    case "South":
                        CURRENT_AREA = CALIFORNIA;
                        break;
                }
                break;
            case NORTH_ROCKIES:
                switch(direction){
                    case "East":
                        CURRENT_AREA = NORTH_CENTRAL;
                        break;
                    case "North":
                        break;
                    case "West":
                        CURRENT_AREA = NORTH_WEST;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                }
                break;
            case SOUTH_WEST:
                switch(direction){
                    case "East":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "West":
                        CURRENT_AREA = CALIFORNIA;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                }
                break;
            case NORTH_CENTRAL:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        break;
                    case "West":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "South":
                        CURRENT_AREA = CENTRAL;
                        break;
                }
                break;
            case CENTRAL:
                switch(direction){
                    case "East":
                        CURRENT_AREA = EAST;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_CENTRAL;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                }
                break;
            case SOUTH_CENTRAL:
                switch(direction){
                    case "East":
                        CURRENT_AREA = SOUTH_EAST;
                        break;
                    case "North":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "South":
                        break;
                }
                break;
            case NORTH_EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        break;
                    case "West":
                        break;
                    case "South":
                        CURRENT_AREA = EAST;
                        break;
                }
                break;
            case EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_EAST;
                        break;
                    case "West":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_EAST;
                        break;
                }
                break;
            case SOUTH_EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        CURRENT_AREA = EAST;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                    case "South":
                        break;
                }
                break;
        }
    }
    
    function checkEndGame(){
        var infectedStates = 0;
        var contagiousStates = 0;
        for(var i = 0;i<AREAS.length;i++){
               var tmp = AREAS[i];
               if(tmp[0]==3) contagiousStates++;
               if(tmp[0]!=0) infectedStates++;
        
        }
        if(infectedStates==0) {
            Crafty("overlay").each(function(){this.attr({ alpha: 0.0 }); });
            Crafty.scene("game_win");/*call win scene*/ ;
            }
        else if(contagiousStates==AREAS.length){ 
            Crafty("overlay").each(function(){this.attr({ alpha: 0.0 }); });
            Crafty.scene("game_lose");/*call lose scene*/;
            }
        else {
            saveGame();
        }
    }
    
    function printMap(){//prints the infection state of each area
        for(var i=0; i<AREAS.length;i++){
            var tmp = AREAS[i];
            
            if(tmp[0]==0) console.log(tmp.name + " is uninfected");
            if(tmp[0]==1) console.log(tmp.name + " is slightly infected");
            if(tmp[0]==2) console.log(tmp.name + " is very infected");
            if(tmp[0]==3) console.log(tmp.name + " is contagiously infected");
        }
    }

    function loadSelectedImages(){
        for(var a = 0; a < AREAS.length; a++){
            var curr = AREAS[a];
            
            if(curr[0] == 0) {
            Crafty.e("2D, DOM, Image, overlay, " + curr.name)
            .attr({z: 5})
            .image(imgPath + curr.name + "/blue_sel.png");
            }
            else if(curr[0] == 1) {
                Crafty.e("2D, DOM, Image, overlay, " + curr.name)
                .attr({z: 5})
                .image(imgPath + curr.name + "/green_sel.png");
            }
            else if(curr[0] == 2) {
                Crafty.e("2D, DOM, Image, overlay, " + curr.name)
                .attr({z: 5})
                .image(imgPath + curr.name + "/yellow_sel.png");
            }
            else if(curr[0] == 3) {
                Crafty.e("2D, DOM, Image, overlay, " + curr.name)
                .attr({z: 5})
                .image(imgPath + curr.name + "/red_sel.png");
            }
            
        }
        Crafty("overlay").each(function(){ this.attr({alpha: 0}); });    
    }

    function loadStatusImages(){
        for(var a = 0; a < AREAS.length; a++){
            var curr = AREAS[a];

            if (curr[0] === 1) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/green.png");
            }
            else if (curr[0] === 2) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/yellow.png");
            }
            else if (curr[0] === 3) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/red.png");
            }
        }  
    }
    
    /*
    function loadOldImages(){
        for(var a = 0; a < AREAS.length; a++){
            var curr = oldAreas[a];

            if (curr === 1) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/green.png");
            }
            else if (curr === 2) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/yellow.png");
            }
            else if (curr === 3) {
                Crafty.e("2D, DOM, Image, areas")
                 .attr({z: 2})
                 .image(imgPath + curr.name + "/red.png");
            }
        }  
    }
    */
    

    //Call to update the overworld map graphics to reflect the state of the game
    function updateMap(){
        Crafty("overlay").each(function(){ this.attr({alpha: 0.0}); });
        Crafty(CURRENT_AREA.name).each(function(){ this.attr({alpha: 1.0}); });

    }
    /*
    function showProgress(){
        for(var i=0;i<6;i++){
            setTimeout(loadOldImages(),500);
            setTimeout(loadStatusImages(),500);
            
        }
        loadOldImages();
        
        
    }
    */

    Crafty.e("2D, DOM, Image, map")
        .attr({z: 1})
        .image(imgPath + "Background.png");
    Crafty.e("2D, DOM, Image, map")
        .attr({z: 3})
        .image(imgPath + "all-borders.png");
    Crafty.e("2D, DOM, Image, map")
        .attr({z: 4})
        .image(imgPath + "area-borders.png");
         
    if(NEW_GAME) init();
    else if(!JUST_LOADED) progress();
    else JUST_LOADED = false;

    loadStatusImages();
    loadSelectedImages();
    updateMap();
   
    var manager = Crafty.e("manager, 2D");
    manager.bind('KeyDown', function(e) {
        if(!Crafty.isPaused()){
            if (e.key == Crafty.keys['D']||e.key == Crafty.keys['RIGHT_ARROW']) {
                traverse("East");
                if(SFX_VOL != 0) Crafty.audio.play("mapShift",1,SFX_VOL);
                updateMap();
            } 
            else if (e.key == Crafty.keys['W']||e.key == Crafty.keys['UP_ARROW']) {
                traverse("North");
                if(SFX_VOL != 0) Crafty.audio.play("mapShift",1,SFX_VOL);
                updateMap();
            }
            else if (e.key == Crafty.keys['A']||e.key == Crafty.keys['LEFT_ARROW']) {
                traverse("West");
                if(SFX_VOL != 0) Crafty.audio.play("mapShift",1,SFX_VOL);
                updateMap();
            }
            else if (e.key == Crafty.keys['S']||e.key == Crafty.keys['DOWN_ARROW']){
                traverse("South");
                if(SFX_VOL != 0) Crafty.audio.play("mapShift",1,SFX_VOL);
                updateMap();
            }
            else if (e.key == Crafty.keys['ESC']){
                Crafty.scene("main_menu");
            }
            else if (e.key == Crafty.keys['P']){
                printMap();
            }
            else if (e.key == Crafty.keys['L']){
                JUST_WON=false;
                Crafty.scene("end_puzzle");
            }
            else if (e.key == Crafty.keys['O']){
                JUST_WON=true;
                Crafty.scene("end_puzzle");
            }
            else if (e.key == Crafty.keys['SPACE']){
                if(CURRENT_AREA[0] == 0){
                    if(SFX_VOL != 0) Crafty.audio.play("cannotEnter",1,SFX_VOL*0.5);
                }
                else{
                    Crafty("overlay").each(function(){this.attr({ alpha: 0.0 }); });
                    Crafty.scene("puzzle");
                }
                
            }
            //setTimeout(function(){console.log("Your current area is %s %o", CURRENT_AREA.name, CURRENT_AREA);}, 50);
        }
    });  
    
},  function(){
    Crafty("map").each(function(){this.destroy();});
    Crafty("manager").each(function(){this.destroy();});
    Crafty.audio.stop("mapTune");
});

Crafty.scene("puzzle", function() { 
    
    //Pause manager
    Crafty.e("2D, DOM")
        .bind('KeyDown', function(e){
        if(e.key == Crafty.keys["ESC"] && !Crafty.isPaused()){
            pauseMenu();
        }
    });

    var diff = CURRENT_AREA[0];
    if(OST_VOL != 0) Crafty.audio.play("puzzleTune", -1, OST_VOL);

    var SIZE = 10;

    var grid = new Array(SIZE);
    for(var i = 0; i<SIZE; i++){
            grid[i] = new Array(SIZE);
    }

    var colors = {red: 0, green: 0, blue: 0, yellow: 0, purple: 0};

    var playerTurn = 1;

    var goal;
    if(diff == 1) { goal = 4; goal_2 = 7; }
    else if(diff == 2) { goal = 5; goal_2 = 8; }
    else { goal = 7; goal_2 = 9; }

    var clock;
    
    var score = 0;

    var scoreboard;

    var tileTypes = ["red", "green", "blue", "yellow", "purple"]; 

    var time = 61;

    var count = 3;

    var dim = Crafty.e("2D, DOM, Color")
                .color('#000000')
                .attr({w: 952, h: 600, z: 14, alpha: 0.7});

    var countdown = Crafty.e("2D, DOM, Text, Delay")
                .attr({x: 425, y: 170, z: 15})
                .text(function(){ return count; })
                .textColor("#FFFFFF")
                .textFont({'size': '200px'})
                .delay(function(){
                    count--;
                    if(count == 0){
                        addToInitialTime();
                        dim.destroy();
                        this.destroy();
                    }
                    else this.text(function(){ return count; });
                }, 1000, -1);

    initGUI();
    makeGrid();

    var pattern = getRandomPattern(grid, SIZE, colors);
    displayCurrentPattern();

    var player1 = Crafty.e("2D, DOM, Color, player1")
        .attr({x: 47, y: 47, h: 46, w:(50*SIZE)-4, z:12})
        .css({'box-shadow': '0px 0px 10px #FFFFFF', "border": "5px solid gold", 'border-radius': '5px'});

    player1.row = 1;

    //if > 0, has been shifted right
    // if < 0, has been shifted left
    var p1shifted = 0;

    player1.bind('KeyDown', function(e) {
        if(!Crafty.isPaused() && count <= 0){
            if (e.key == Crafty.keys['UP_ARROW'] && playerTurn == 1) {
                if(p1shifted > 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowLeft(player1.row, distance);
                    p1shifted = 0;
                }
                else if(p1shifted < 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowRight(player1.row, distance);
                    p1shifted = 0;
                }

                player1.row--;
                player1.shift(0,-50,0,0);
                if(player1.y < 47) { 
                    player1.y = (50*SIZE) - 3;
                    player1.row = 10; 
                }
            } 
            else if (e.key == Crafty.keys['DOWN_ARROW'] && playerTurn == 1) {
                if(p1shifted > 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowLeft(player1.row, distance);
                    p1shifted = 0;
                }
                else if(p1shifted < 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowRight(player1.row, distance);
                    p1shifted = 0;
                }

                player1.row++;
                player1.shift(0,50,0,0);
                if(player1.y > (50*SIZE)-3) { 
                    player1.y = 47; 
                    player1.row = 1;
                }
            }
            else if (e.key == Crafty.keys['LEFT_ARROW'] && playerTurn == 1){
                p1shifted--;
                if(p1shifted <= -SIZE) p1shifted = 0;
                shiftRowLeft(player1.row, 1);
            }
            else if (e.key == Crafty.keys['RIGHT_ARROW'] && playerTurn == 1){
                p1shifted++;
                if(p1shifted >= SIZE) p1shifted = 0;
                shiftRowRight(player1.row, 1);
            }
            else if (e.key == Crafty.keys['SPACE'] && playerTurn == 1){
                shiftArrayRow(player1.row-1, p1shifted); //player1.row is player 1 grid coordinate +1
                p1shifted = 0;
                var check = checkGrid(grid, pattern, SIZE);
                if(check[0] != -1 && check[1] != -1) patternMatched(check);
                setTimeout(function(){ playerTurn = 2; }, 20);
                player2.attr({z: 12}).css({'box-shadow': "0px 0px 10px #FFFFFF", 'border': '5px solid gold'});
                player1.attr({z: 11}).css({'box-shadow': "0px 0px 0px #FFFFFF", 'border': '5px solid black'});
            }
        }
    });

    var player2 = Crafty.e("2D, DOM, Color, player2")
     .attr({x: 47, y: 47, h: (50*SIZE)-4, w:46, z:11})
     .css({'border': '5px solid black', 'border-radius': '5px'});

    player2.col = 1; 

    //if p2shifted < 0, col has been shifted up
    // if p2shifted > 0, col has been shifted down
    var p2shifted = 0;

    player2.bind('KeyDown', function(e) {
        if(!Crafty.isPaused() && count <= 0){
            if (e.key == Crafty.keys['D'] && playerTurn == 2) {
                if(p2shifted > 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColUp(player2.col, distance);
                    p2shifted = 0;
                }
                else if(p2shifted < 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColDown(player2.col, distance);
                    p2shifted = 0;
                }

                player2.col++;
                player2.shift(50,0,0,0);
                if(player2.x > (50*SIZE)-3) { 
                    player2.x = 47;
                    player2.col = 1;
                }
            } 
            else if (e.key == Crafty.keys['A'] && playerTurn == 2) {
                if(p2shifted > 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColUp(player2.col, distance);
                    p2shifted = 0;
                }
                else if(p2shifted < 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColDown(player2.col, distance);
                    p2shifted = 0;
                }

                player2.col--;
                player2.shift(-50,0,0,0);
                if(player2.x < 47) { 
                    player2.x = (50*SIZE)-3; 
                    player2.col = 10;
                }
            }
            else if (e.key == Crafty.keys['W'] && playerTurn == 2) {
                p2shifted--;
                if(p2shifted <= -SIZE) p2shifted = 0;
                shiftColUp(player2.col, 1);
            }
            else if (e.key == Crafty.keys['S'] && playerTurn == 2){
                p2shifted++;
                if(p2shifted >= SIZE) p2shifted = 0;
                shiftColDown(player2.col, 1);
            }
            else if (e.key == Crafty.keys['SPACE'] && playerTurn == 2){
                shiftArrayCol(player2.col-1, p2shifted); //player2.col is grid coordinate of player2+1
                setTimeout(function(){p2shifted = 0;});
                var check = checkGrid(grid, pattern, SIZE);
                if(check[0] != -1 && check[1] != -1) patternMatched(check);
                setTimeout(function(){ playerTurn = 1; }, 20);
                player1.attr({z: 12}).css({'box-shadow': "0px 0px 10px #FFFFFF", 'border': '5px solid gold'});
                player2.attr({z: 11}).css({'box-shadow': "0px 0px 0px #FFFFFF", 'border': '5px solid black'});
            }
            else if (e.key == Crafty.keys['P']){
                printGrid();
            }
        }
    });
     
    function addToInitialTime(){
        

        for(var i = 0;i<AREAS.length;i++){
               var tmp = AREAS[i];
               if(tmp[0] == 1) time++;
               else if(tmp[0] == 2) time += 2;
               else if(tmp[0] == 3) time += 5;
        } 

        var i = 0;

        var interval = setInterval(function(){
            var tmp = AREAS[i];
            if(tmp[0] == 1) addTimeAnimation(1);
            else if(tmp[0] == 2) addTimeAnimation(2);
            else if(tmp[0] == 3) addTimeAnimation(5);
            i++;
            if(i >= 10) clearInterval(interval);
        }, 250);
    }

    //Initializes the 10x10 grid and fills grid[][] with pointers to elements 
    function makeGrid(){
        for(var a = 0; a < SIZE; a++){
            for(var b = 0; b < SIZE; b++){    
               //Done this way, instead of with Crafty.math.randomElementOfArray(), 
               //  to enable tracking colors.
                var randNum = Crafty.math.randomInt(0,4); 
                var tileType = tileTypes[randNum]; 
                
                grid[a][b] = Crafty.e("2D, DOM, Image, gameTile, Tween")
                 .attr({x: (b+1)*50, y: (a+1)*50, h: 50, w: 50, z: 10, alpha: 1.0})
                 .image(imgPath+"Tiles/"+tileType+".png");
                grid[a][b].tileColor = tileType;
                colors[tileType]++;
            }
        }
    }

    //Initializes the GUI elements for the puzzle scene
    function initGUI(){
        clock = Crafty.e("2D, DOM, Text, Delay")
         .attr({x:10, y:10, w:40, h:40})
         .text('60')
         .textFont({size: '20px'})
         .delay(function(){
            if(count <= 0){    
                time--;
                clock.text(function(){ return time; });
                if(time <= 0) endPuzzle(); 
            }
         }, 1000, -1);

        Crafty.e("2D, DOM, Text")//Prompts the player with the next shape to match
         .attr({x:650, y: 220, w:70, h:50})
         .text("Match This:");

        Crafty.e("2D, DOM, Text")
         .attr({x:634, y:20, w:100, h:50})
         .text("You must match:");

        Crafty.e("2D, DOM, Text")
         .attr({x:660, y:40, w:50, h:50})
         .textFont({size: '40px'})
         .text(function(){ return goal; });

        Crafty.e("2D, DOM, Text")
         .attr({x:650, y:100, w:100, h:50})
         .text("Matched:");

        scoreboard = Crafty.e("2D, DOM, Text")
         .attr({x:660, y:130, w:50, h:50})
         .textFont({size: '40px'})
         .text(function(){ return score; });
    }

    //Creates small divs to display the current pattern to be matched
    function displayCurrentPattern(){
        Crafty("pattern").each(function(){this.destroy();});

        for(var a = 0; a < pattern.length; a++){
            for(var b = 0; b < pattern[0].length; b++){
                if(pattern[a][b] != 0){
                    Crafty.e("2D, DOM, Image, pattern")
                     .attr({x: 630+b*50, y: 250+a*50, w:50, h:50})
                     .image(imgPath+"Tiles/"+pattern[a][b]+".png");
                }
            }
        }
    }

    //Input: row: which row to shift
    //       distance: number of tiles to shift by (always positive please)
    //Result: pretty obvious, derp
    function shiftRowRight(row, distance){      
        var rowCoordinate = row*50; //row*50 is the actual pixel coordinate of objects
        var tiles = Crafty("gameTile"); //Get an array of every tile 
        //for each tile in tiles[], check its coordinate and shift if it is 
        // the same as rowCoordinate.
        var curr;
        for(var a = 0; a<SIZE*SIZE; a++){
            curr = Crafty(tiles[a]);
            if(curr._y == rowCoordinate) { curr.shift(50*distance, 0, 0, 0); }
            if(curr._x >= 50*(SIZE+1)) { curr.x -= 50*SIZE; }
        }
        if(SFX_VOL != 0) Crafty.audio.play("shiftForward",1,SFX_VOL);

    }

    //You get the gist
    function shiftRowLeft(row, distance){       
        var rowCoordinate = row*50; 
        var tiles = Crafty("gameTile");
        var curr;   
        for(var a = 0; a<SIZE*SIZE; a++){
            curr = Crafty(tiles[a]);
            if(curr.y == rowCoordinate) { curr.shift(-50*distance, 0, 0, 0); }
            if(curr.x < 50) { curr.x += 50*SIZE; }
        }
        if(SFX_VOL != 0) Crafty.audio.play("shiftBack",1,SFX_VOL);
    }

    //No point continuing to comment these
    function shiftColUp(col, distance){
        var colCoordinate = col*50;
        var tiles = Crafty("gameTile");
        var curr;
        for(var a = 0; a < SIZE*SIZE; a++){
            curr = Crafty(tiles[a]);
            if(curr.x == colCoordinate) { curr.shift(0,-50*distance, 0, 0); }
            if(curr.y < 50) { curr.y += 50*SIZE; }
        }
        if(SFX_VOL != 0) Crafty.audio.play("shiftBack",1,SFX_VOL);
    }

    //But I did anyway
    function shiftColDown(col, distance){
        var colCoordinate = col*50;
        var tiles = Crafty("gameTile");
        var curr;
        for(var a = 0; a < SIZE*SIZE; a++){
            curr = Crafty(tiles[a]);
            if(curr.x == colCoordinate) { curr.shift(0, 50*distance, 0, 0); }
            if(curr.y >= 50*(SIZE+1)) { curr.y -= 50*SIZE; }
        }
        if(SFX_VOL != 0) Crafty.audio.play("shiftForward",1,SFX_VOL);
    }


    //Adjust grid[][] to keep it in sync with what's onscreen
    //col is which column to shift
    //distance is distance to shift.
    //    negative values shift up, positive values shift down
    function shiftArrayCol(col, distance){
        //grid[curr+distance][col] = grid[curr][col]

        //don't do any computation if nothing to compute
        if(distance == 0) return;
        console.log("distance: " + distance);

        var dist = Crafty.math.abs(distance);
        var temp = new Array(dist);
        if(distance<0){
            //save the elements at the edge so we can put them on the other edge
            for(var a = 0; a < dist; a++)
                    temp[a] = grid[a][col];
           
            //shift everything over
            for(var a = 0; a < (SIZE-dist); a++)
                    grid[a][col] = grid[a+dist][col];
           
            //tack the temp back onto the end
            var init = SIZE-dist;
            for(var a = init; a < SIZE; a++)
                    grid[a][col] = temp[a-init];
        }
        else{
            //save the edge elements
            for(var a = 0; a < dist; a++)
                    temp[dist-a-1] = grid[SIZE-1-a][col];
           
            //shift over
            for(var a = 0; a < (SIZE-dist); a++)
                    grid[SIZE-1-a][col] = grid[SIZE-1-a-dist][col];

            //tack the temp back on
            for(var a = 0; a < dist; a++)
                    grid[a][col] = temp[a];
        }
    }

    //Adjust grid[][] to keep it in sync with what's onscreen
    //row is which row to shift
    //distance is distance to shift.
    //    negative values shift left, positive values shift right.,
    function shiftArrayRow(row, distance){
        // don't do any computation if nothing to compute
        if(distance == 0) return;
        console.log("distance: " + distance);

        var dist = Crafty.math.abs(distance);
        var temp = new Array(dist);
        if(distance<0){
            //save the elements at the edge so we can put them on the other edge
            for(var a = 0; a < dist; a++)
                    temp[a] = grid[row][a];
           
            //shift everything over
            for(var a = 0; a < (SIZE-dist); a++)
                    grid[row][a] = grid[row][a+dist];
           
            //tack the temp back onto the end
            var init = SIZE-dist;
            for(var a = init; a < SIZE; a++)
                    grid[row][a] = temp[a-init];
        }
        else{
            //save the edge elements
            for(var a = 0; a < dist; a++)
                    temp[(dist-a)-1] = grid[row][SIZE-1-a];
           
            //shift over
            for(var a = 0; a < (10-dist); a++)
                    grid[row][SIZE-1-a] = grid[row][SIZE-1-a-dist];

            //tack the temp back on
            for(var a = 0; a < dist; a++)
                    grid[row][a] = temp[a];
        }
    }

    //Adds time and plays a fun little animation.
    function addTime(moreTime){
        var xVal = Crafty.math.randomInt(40, 150);
        Crafty.e("2D, DOM, Text, Delay, Tween")
            .attr({x: xVal, y: 5, w:40, h:40, alpha: 1.0})
            .textFont({'size': '30px'})
            .text(function(){ return "+" + moreTime; })
            .tween({x: xVal - 20, alpha: 0.0}, 500)
            .delay(function(){ this.destroy(); }, 500, 0);
        time += moreTime;
    }

    //Just plays the animation without actually adding time.
    function addTimeAnimation(moreTime){
        var xVal = Crafty.math.randomInt(40, 150);
        Crafty.e("2D, DOM, Text, Delay, Tween")
            .attr({x: xVal, y: 5, w:40, h:40, alpha: 1.0})
            .textFont({'size': '30px'})
            .text(function(){ return "+" + moreTime; })
            .tween({x: xVal - 20, alpha: 0.0}, 500)
            .delay(function(){ this.destroy(); }, 500, 0);
    }

    //Input: coordinates of the bounding box of the pattern
    //Result: Deletes the pattern in the grid and replaces with random elements.
    //        Increments player score, updates the scoreboard, and gets a new pattern.
    function patternMatched(coordinates){
        //Delete the pattern and replace with randoms
        console.log("pattern matched");
        MATCHED++;
        for(var a = coordinates[0]; a < pattern.length + coordinates[0]; a++){
            for(var b = coordinates[1]; b < pattern[0].length + coordinates[1]; b++){
                var curr = grid[a][b];
                var pX = a-coordinates[0];
                var pY = b-coordinates[1];

                if(pattern[pX][pY] != 0) deleteTile(curr);
            }
        }
        score++;
        scoreboard.text(function(){ return score; });
        pattern = getRandomPattern(grid, SIZE, colors);
        displayCurrentPattern();
        if(SFX_VOL != 0) Crafty.audio.play("patternMatched",1,SFX_VOL);
    }

    function deleteTile(tile){
        console.log(tile);
        var newColor = getRandomTileColor();
        console.log(newColor);
        colors[tile.tileColor]--;
        tile.tileColor = newColor;
        colors[newColor]++;
        tile.tween({alpha: 0.0}, 100);
        setTimeout(function(){
            tile.image( imgPath + "Tiles/" + newColor + ".png" );
            tile.tween({alpha: 1.0}, 100);
        }, 100);

    }

    //Returns a weighted random color
    //Done by rejection sampling
    // build a table 1-100 where the ones we want to have a higher chance of being picked
    // are overrepresented
    // perfect distribution would be 20-20-20-20-20. This is the initial distribution, to which weights are added
    // each color's added weight is (20 - numOfThisColor)*2.
    // So 18-22-15-17-28, , would generate a table of
    //    24-16-30-26-4
    function getRandomTileColor(){
        var distTable = new Array(100);

        var chances = [20,20,20,20,20];
        chances[0] += (20 - colors["red"])*2;
        chances[1] += (20 - colors["green"])*2; 
        chances[2] += (20 - colors["blue"])*2;
        chances[3] += (20 - colors["yellow"])*2;
        chances[4] += (20 - colors["purple"])*2;

        var index = 0;

        for (var i = 0; i < 100; i++){
            if(chances[index] == 0) index++;
            distTable[i] = tileTypes[index];
            chances[index]--;
        }
        console.log(distTable);
        return Crafty.math.randomElementOfArray(distTable);
    }

    //Status: Empty
    //Calls whichever scene gets called when the puzzle is over
    function endPuzzle(){
        Crafty.audio.stop("puzzleTune");
        if(score < goal){
            JUST_WON = false;
            Crafty.scene("end_puzzle");
        }
        else if(score >= goal){
            overage = score - goal;
            if(diff == 1) EASY_SOLVED++;
            else if(diff == 2) MED_SOLVED++;
            else if(diff == 3) HARD_SOLVED++;
            JUST_WON = true;
            Crafty.scene("end_puzzle");
        } 
    }
}); 


Crafty.scene("puzzle_tutorial", function(){

});

Crafty.scene("end_puzzle", function(){
    var winOrLose = Crafty.e("2D, DOM, Text")
                    .attr({x: 400, y: 60, h: 40, w: 400})
                    .textFont({'size': '30px'});
    if(JUST_WON){
        winOrLose.text("You Won!");
        if(SFX_VOL != 0) Crafty.audio.play("puzzleWin",1,SFX_VOL);
    }
    else{ 
        winOrLose.text("You Failed.");
        if(SFX_VOL != 0) Crafty.audio.play("puzzleFail",1,SFX_VOL);
    }
    Crafty.e("2D, DOM, Text")
        .attr({x: 250, y:150, h: 40, w: 300})
        .textFont({'size': '25px'})
        .text("Your stats so far:");    
    Crafty.e("2D, DOM, Text")
        .attr({x: 275, y: 200, w: 400})
        .textFont({'size': '20px'})
        .text("Units of Antigen created: " + MATCHED);
    Crafty.e("2D, DOM, Text")
        .attr({x: 275, y: 230, w: 400})
        .textFont({'size': "20px"})
        .text("Early infected regions cured: " + EASY_SOLVED);
    Crafty.e("2D, DOM, Text")
        .attr({x: 275, y: 260, w: 400})
        .textFont({'size': "20px"})
        .text("Advanced infected regions cured: " + MED_SOLVED);
    Crafty.e("2D, DOM, Text")
        .attr({x: 275, y: 290, w: 400})
        .textFont({'size': "20px"})
        .text("Contagious regions cured: " + HARD_SOLVED);

    Crafty.e("2D, DOM, Text, manager")
        .attr({x: 275, y: 390, w: 400})
        .textFont({'size': "15px"})
        .text("Press any key to continue")
        .bind('KeyDown', function(e){
            Crafty.scene("overworld_map");
        });



});

Crafty.scene("how_to_play", function(){
   var tileTypes =  ["red", "green", "blue", "yellow", "purple"]; 

    //Initialize 3 areas to infected
    CALIFORNIA[0] = 3;
    CENTRAL[0] = 2;
    NORTH_CENTRAL[0] = 1;
    NORTH_EAST[0] = 0;
    EAST[0] = 0;
    updateMap();

    var messageArray = new Array();
    var p = 0;  //keep track of what message
    messageArray[0] = "Greetings, Agent.  The U.S. has been infected with a deadly virus that you must cure.  Press Enter to continue";
    messageArray[1] = "Blue areas are uninfected, Yellow areas are infected, and Red areas are contagiously infected. Press Enter to continue";
    messageArray[2] = "Use the Arrow Keys to navigate to an area and use the Space key to enter an area. Do this now.";
    messageArray[3] = "Solve puzzles by moving columns up or down, or rows left to right.  Let's start with rows.  Press Enter to continue";
    messageArray[4] = "Use the arrow keys to move the row selector up and down, and blocks left to right. Press Space to confirm your move. Solve the puzzle.";
    messageArray[5] = "Good.  Use A and D to move the column selector up and down, and W and S to move blocks left to right.  Solve the puzzle.";
    messageArray[6] = "Great. You're now ready for the real thing. Press Enter to go to the Main Menu. ";

    var manager = Crafty.e("manager, 2D");
    manager.bind('KeyDown', function(e) {
        if (e.key == Crafty.keys['D']||e.key == Crafty.keys['RIGHT_ARROW']) {
            traverse("East");
            updateMap();
        }

        else if (e.key == Crafty.keys['W']||e.key == Crafty.keys['UP_ARROW']) {
            traverse("North");
            updateMap();
        }

        else if (e.key == Crafty.keys['A']||e.key == Crafty.keys['LEFT_ARROW']) {
            traverse("West");
            updateMap();
        }

        else if (e.key == Crafty.keys['S']||e.key == Crafty.keys['DOWN_ARROW']){
            traverse("South");
            updateMap();
        }

        else if (e.key == Crafty.keys['SPACE']){
            if (p == 2) {
                p++;
                puzzle_tutorial();
            }
        }

        else if (e.key == Crafty.keys['ENTER']){
            p++;
            //Call puzzle tutorial function
            if (p == 3) p--;
            displayMessage(messageArray[p]);
        }

    });


    function displayMessage(message) {
        Crafty("message").each(function(){this.destroy();});
        var cycles = message.length;
        var x = 0;
        var q = 0;
        var time = 40;
        var chardelay = false;
        var currText = message.charAt(0);
        var i = 1;

        mes = Crafty.e("2D, DOM, Text, Delay, message")
        .attr({x:5, y:5, z:1, w: 800, h: 30})
        .textFont({size: '12.5px'})
        .text(currText)
        .delay(function() {
            currText += message.charAt(i);
            this.text(currText);
            i++;
        }, time, cycles);

    }
    displayMessage(messageArray[p]); 

    function puzzle_tutorial(){

        Crafty("map").each(function(){this.destroy();});
        Crafty("overlay").each(function(){this.destroy();});
        Crafty("manager").each(function(){this.destroy();});

        var SIZE = 10;

        var grid = new Array(SIZE);
        for(var i = 0; i<SIZE; i++) {
            grid[i] = new Array(SIZE);
        }

        var playerTurn = 1;
        var goal = 1;

        for(var a = 0; a < 8; a++){
            for(var b = 0; b < SIZE; b++){       
                var randNum = Crafty.math.randomInt(0,4); 
                var tileType = tileTypes[randNum]; 
                
                grid[a][b] = Crafty.e("2D, DOM, Image, gameTile, Tween")
                 .attr({x: (b+1)*50, y: (a+1)*50, h: 50, w: 50, z: 10, alpha: 1.0})
                 .image(imgPath+"Tiles/"+tileType+".png");
                grid[a][b].tileColor = tileType;
                colors[tileType]++;
            }
        } 

        //set the grid to an easy puzzle to solve for ROWS
        grid[8][0] = Crafty.e("2D, DOM, Color, gameTile, Tween")
           .attr({x: 50, y: 450, h: 49, w: 49, z: 10, alpha: 1.0})
           .css("border", "1px solid black") 
           .color("red");  
        grid[8][1] = Crafty.e("2D, DOM, Color, gameTile, Tween")
           .attr({x: 100, y: 450, h:49, w:49, z:10, alpha: 1.0 })
           .css("border", "1px solid black")
           .color("blue"); 
        grid[8][2] = Crafty.e("2D, DOM, Color, gameTile, Tween")
           .attr({x: 150, y: 450, h:49, w:49, z:10, alpha: 1.0 })
           .css("border", "1px solid black")
           .color("blue"); 

        for (var c = 8; c < 9; c++) {
            for (var d = 3; d < SIZE; d++) {
                grid[c][d] = Crafty.e("2D, DOM, Color, gameTile, Tween")
                .attr({x: (d+1)*50, y: (c+1)*50, h: 49, w: 49, z: 10, alpha: 1.0})
                .css("border", "1px solid black") 
                .color("red");           
            }
        } 
        grid[9][0] = Crafty.e("2D, DOM, Color, gameTile, Tween")
           .attr({x: 50, y: 500, h:49, w:49, z:10, alpha: 1.0 })
           .css("border", "1px solid black")
           .color("blue");       
        grid[9][1] = Crafty.e("2D, DOM, Color, gameTile, Tween")
           .attr({x: 100, y: 500, h:49, w:49, z:10, alpha: 1.0 })
           .css("border", "1px solid black")
           .color("blue");

        for (var c = 9; c < SIZE; c++) {
            for (var d = 2; d < SIZE; d++) {
                grid[d][c] = Crafty.e("2D, DOM, Color, gameTile, Tween")
                .attr({x: (d+1)*50, y: (c+1)*50, h: 49, w: 49, z: 10, alpha: 1.0})
                .css("border", "1px solid black") 
                .color("red");           
            }
        }

        var pattern = [["blue", "blue"],  // * *
                   ["blue", "blue"]];   // * * 
        pattern.first = 0;
        pattern.t_type = "blue"; 

        for(var a = 0; a < pattern.length; a++){
            for(var b = 0; b < pattern[0].length; b++){
                if(pattern[a][b] != 0){
                    Crafty.e("2D, DOM, Color, pattern")
                        .attr({x: 630+b*33, y: 250+a*33, w:32, h:32})
                        .css("border", "1px solid black")
                        .color(pattern[a][b]);
                }
            }
        }

        displayMessage(messageArray[p]);


        Crafty.e("2D, DOM, Text")
         .attr({x:634, y:50, w:100, h:50})
         .text("You must match:");

        Crafty.e("2D, DOM, Text")
         .attr({x:660, y:70, w:50, h:50})
         .textFont({size: '40px'})
         .text(function(){ return goal; });

        Crafty.e("2D, DOM, Text")
         .attr({x:650, y:120, w:100, h:50})
         .text("Matched:");

        Crafty.e("2D, DOM, Text")//Prompts the player with the next shape to match
         .attr({x:650, y: 220, w:70, h:50})
         .text("Match This:");

        var player1 = Crafty.e("2D, DOM, Color, player1")
         .attr({x: 46, y: 50, h: 45, w:(50*SIZE)-2, z:11})
         .css("border", "5px solid black");

        player1.row = 1;

        //if > 0, has been shifted right
        // if < 0, has been shifted left
        var p1shifted = 0;

        player1.bind('KeyDown', function(e) {
            if (e.key == Crafty.keys['UP_ARROW'] && playerTurn == 1) {
                if(p1shifted > 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowLeft(player1.row, distance);
                    p1shifted = 0;
                }
                else if(p1shifted < 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowRight(player1.row, distance);
                    p1shifted = 0;
                }

                player1.row--;
                player1.shift(0,-50,0,0);
                if(player1.y < 50) { 
                    player1.y = 50*SIZE;
                    player1.row = 10; 
                }
            } 
            else if (e.key == Crafty.keys['DOWN_ARROW'] && playerTurn == 1) {
                if(p1shifted > 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowLeft(player1.row, distance);
                    p1shifted = 0;
                }
                else if(p1shifted < 0){
                    var distance = Crafty.math.abs(p1shifted);
                    shiftRowRight(player1.row, distance);
                    p1shifted = 0;
                }

                player1.row++;
                player1.shift(0,50,0,0);
                if(player1.y > 50*SIZE) { 
                    player1.y = 50; 
                    player1.row = 1;
                }
            }
            else if (e.key == Crafty.keys['LEFT_ARROW'] && playerTurn == 1){
                p1shifted--;
                if(p1shifted <= -SIZE) p1shifted = 0;
                shiftRowLeft(player1.row, 1);
            }
            else if (e.key == Crafty.keys['RIGHT_ARROW'] && playerTurn == 1){
                p1shifted++;
                if(p1shifted >= SIZE) p1shifted = 0;
                shiftRowRight(player1.row, 1);
            }
            else if (e.key == Crafty.keys['SPACE'] && playerTurn == 1){
              if (p > 3) {
                shiftArrayRow(player1.row-1, p1shifted); //player1.row is player 1 grid coordinate +1
                p1shifted = 0;
                var check = checkGrid(grid, pattern, SIZE);
                if(check[0] != -1 && check[1] != -1){
                 p++; //go to next message and now it's P2 turn
                 displayMessage(messageArray[p]);
                 patternMatched(check);
                }
                setTimeout(function(){
                   if(p % 2 == 1){ 
                      playerTurn = 2;
                   }
                   else if (p % 2 == 0) {
                      playerTurn = 1;
                   } }, 20); 
              }else if(p <3){}
            }
            else if (e.key == Crafty.keys['ENTER'] && playerTurn == 1) {
               if (p < 4) {
                  p++;
                  displayMessage(messageArray[p]);
               }
            }
        });

        var player2 = Crafty.e("2D, DOM, Color, player2")
         .attr({x: 50, y: 46, h: (50*SIZE)-2, w:45, z:11})
         .css("border", "5px solid black");

        player2.col = 1; 

        //if p2shifted < 0, col has been shifted up
        // if p2shifted > 0, col has been shifted down
        var p2shifted = 0;

        player2.bind('KeyDown', function(e) {
            if (e.key == Crafty.keys['D'] && playerTurn == 2) {
                if(p2shifted > 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColUp(player2.col, distance);
                    p2shifted = 0;
                }
                else if(p2shifted < 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColDown(player2.col, distance);
                    p2shifted = 0;
                }

                player2.col++;
                player2.shift(50,0,0,0);
                if(player2.x > 50*SIZE) { 
                    player2.x = 50;
                    player2.col = 1;
                }
            } 
            else if (e.key == Crafty.keys['A'] && playerTurn == 2) {
                if(p2shifted > 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColUp(player2.col, distance);
                    p2shifted = 0;
                }
                else if(p2shifted < 0){
                    var distance = Crafty.math.abs(p2shifted);
                    shiftColDown(player2.col, distance);
                    p2shifted = 0;
                }

                player2.col--;
                player2.shift(-50,0,0,0);
                if(player2.x < 50) { 
                    player2.x = 50*SIZE; 
                    player2.col = 10;
                }
            }
            else if (e.key == Crafty.keys['W'] && playerTurn == 2) {
                p2shifted--;
                if(p2shifted <= -SIZE) p2shifted = 0;
                shiftColUp(player2.col, 1);
            }
            else if (e.key == Crafty.keys['S'] && playerTurn == 2){
                p2shifted++;
                if(p2shifted >= SIZE) p2shifted = 0;
                shiftColDown(player2.col, 1);
            }
            else if (e.key == Crafty.keys['SPACE'] && playerTurn == 2){
                shiftArrayCol(player2.col-1, p2shifted); //player2.col is grid coordinate of player2+1
                setTimeout(function(){p2shifted = 0;});
                var check = checkGrid(grid, pattern, SIZE);
                if(check[0] != -1 && check[1] != -1){
                 p++;
                 patternMatched(check);
                }
                setTimeout(function(){
                 if (p % 2 == 1) displayMessage(messageArray[p]);
                 else if (p % 2 == 0) playerTurn = 2;
                  }, 20);

            }
            else if (e.key == Crafty.keys['ENTER'] && playerTurn == 2) {
                if (p > 5) {
                    Crafty.scene("main_menu"); 
                }
            }
        });

        function shiftRowRight(row, distance){      
            var rowCoordinate = row*50; //row*50 is the actual pixel coordinate of objects
            var tiles = Crafty("gameTile"); //Get an array of every tile 
            //for each tile in tiles[], check its coordinate and shift if it is 
            // the same as rowCoordinate.
            var curr;
            for(var a = 0; a<SIZE*SIZE; a++){
                curr = Crafty(tiles[a]);
                if(curr._y == rowCoordinate) { curr.shift(50*distance, 0, 0, 0); }
                if(curr._x >= 50*(SIZE+1)) { curr.x -= 50*SIZE; }
            }
        }

        function shiftRowLeft(row, distance){       
            var rowCoordinate = row*50; 
            var tiles = Crafty("gameTile");
            var curr;   
            for(var a = 0; a<SIZE*SIZE; a++){
                curr = Crafty(tiles[a]);
                if(curr.y == rowCoordinate) { curr.shift(-50*distance, 0, 0, 0); }
                if(curr.x < 50) { curr.x += 50*SIZE; }
            }
        }

        function shiftColUp(col, distance){
            var colCoordinate = col*50;
            var tiles = Crafty("gameTile");
            var curr;
            for(var a = 0; a < SIZE*SIZE; a++){
                curr = Crafty(tiles[a]);
                if(curr.x == colCoordinate) { curr.shift(0,-50*distance, 0, 0); }
                if(curr.y < 50) { curr.y += 50*SIZE; }
            }
        }

        function shiftColDown(col, distance){
            var colCoordinate = col*50;
            var tiles = Crafty("gameTile");
            var curr;
            for(var a = 0; a < SIZE*SIZE; a++){
                curr = Crafty(tiles[a]);
                if(curr.x == colCoordinate) { curr.shift(0, 50*distance, 0, 0); }
                if(curr.y >= 50*(SIZE+1)) { curr.y -= 50*SIZE; }
            }
        }


        //Adjust grid[][] to keep it in sync with what's onscreen
        //col is which column to shift
        //distance is distance to shift.
        //    negative values shift up, positive values shift down
        function shiftArrayCol(col, distance){
            //grid[curr+distance][col] = grid[curr][col]

            //don't do any computation if nothing to compute
            if(distance == 0) return;
            console.log("distance: " + distance);

            var dist = Crafty.math.abs(distance);
            var temp = new Array(dist);
            if(distance<0){
                    //save the elements at the edge so we can put them on the other edge
                    for(var a = 0; a < dist; a++)
                            temp[a] = grid[a][col];
                   
                    //shift everything over
                    for(var a = 0; a < (SIZE-dist); a++)
                            grid[a][col] = grid[a+dist][col];
                   
                    //tack the temp back onto the end
                    var init = SIZE-dist;
                    for(var a = init; a < SIZE; a++)
                            grid[a][col] = temp[a-init];
            }
            else{
                    //save the edge elements
                    for(var a = 0; a < dist; a++)
                            temp[dist-a-1] = grid[SIZE-1-a][col];
                   
                    //shift over
                    for(var a = 0; a < (SIZE-dist); a++)
                            grid[SIZE-1-a][col] = grid[SIZE-1-a-dist][col];

                    //tack the temp back on
                    for(var a = 0; a < dist; a++)
                            grid[a][col] = temp[a];
            }
        }

        //Adjust grid[][] to keep it in sync with what's onscreen
        //row is which row to shift
        //distance is distance to shift.
        //    negative values shift left, positive values shift right.,
        function shiftArrayRow(row, distance){
            // don't do any computation if nothing to compute
            if(distance == 0) return;
            console.log("distance: " + distance);

            var dist = Crafty.math.abs(distance);
            var temp = new Array(dist);
            if(distance<0){
                    //save the elements at the edge so we can put them on the other edge
                    for(var a = 0; a < dist; a++)
                            temp[a] = grid[row][a];
                   
                    //shift everything over
                    for(var a = 0; a < (SIZE-dist); a++)
                            grid[row][a] = grid[row][a+dist];
                   
                    //tack the temp back onto the end
                    var init = SIZE-dist;
                    for(var a = init; a < SIZE; a++)
                            grid[row][a] = temp[a-init];
            }
            else{

                    //save the edge elements
                    for(var a = 0; a < dist; a++)
                            temp[(dist-a)-1] = grid[row][SIZE-1-a];
                   
                    //shift over
                    for(var a = 0; a < (10-dist); a++)
                            grid[row][SIZE-1-a] = grid[row][SIZE-1-a-dist];

                    //tack the temp back on
                    for(var a = 0; a < dist; a++)
                            grid[row][a] = temp[a];
            }
        }

        //Input: coordinates of the bounding box of the pattern
        //Result: Deletes the pattern in the grid and replaces with random elements.
        //        Increments player score, updates the scoreboard, and gets a new pattern.
        function patternMatched(coordinates){
            
            for(var a = coordinates[0]; a < pattern.length + coordinates[0]; a++){
                for(var b = coordinates[1]; b < pattern[0].length + coordinates[1]; b++){
                    console.log("deleting: " + a + ", " + b);
                    //grid[a][b].tween({alpha: 0.0}, 100);
                    grid[a][b].color("red");
                    //grid[a][b].tween({alpha: 1.0}, 100);
                }
            }
            if (p == 5) {
                grid[8][1].color("blue");
                grid[9][1].color("blue");
                grid[7][0].color("blue");
                grid[8][0].color("blue");
            }
        } 
         
    }   

    function updateMap(){
        Crafty("overlay").each(function(){ this.attr({alpha: 0.0}); });
        Crafty(CURRENT_AREA.name).each(function(){ this.attr({alpha: 1.0}); });
    }


    function traverse(direction){ //bigass switch function that is big. Uses info from keydown to traverse map.
        console.log(CURRENT_AREA.name);
        console.log(direction);
        switch(CURRENT_AREA){  
            case CALIFORNIA:
                switch(direction){
                    case "East":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_WEST;
                        break;
                    case "West":
                        break;
                    case "South":
                        break;
                }
                break;
            case NORTH_WEST:
                switch(direction){
                    case "East":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "North":
                        break;
                    case "West":
                        break;
                    case "South":
                        CURRENT_AREA = CALIFORNIA;
                        break;
                }
                break;
            case NORTH_ROCKIES:
                switch(direction){
                    case "East":
                        CURRENT_AREA = NORTH_CENTRAL;
                        break;
                    case "North":
                        break;
                    case "West":
                        CURRENT_AREA = NORTH_WEST;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                }
                break;
            case SOUTH_WEST:
                switch(direction){
                    case "East":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "West":
                        CURRENT_AREA = CALIFORNIA;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                }
                break;
            case NORTH_CENTRAL:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        break;
                    case "West":
                        CURRENT_AREA = NORTH_ROCKIES;
                        break;
                    case "South":
                        CURRENT_AREA = CENTRAL;
                        break;
                }
                break;
            case CENTRAL:
                switch(direction){
                    case "East":
                        CURRENT_AREA = EAST;
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_CENTRAL;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                }
                break;
            case SOUTH_CENTRAL:
                switch(direction){
                    case "East":
                        CURRENT_AREA = SOUTH_EAST;
                        break;
                    case "North":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_WEST;
                        break;
                    case "South":
                        break;
                }
                break;
            case NORTH_EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        break;
                    case "West":
                        break;
                    case "South":
                        CURRENT_AREA = EAST;
                        break;
                }
                break;
            case EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        CURRENT_AREA = NORTH_EAST;
                        break;
                    case "West":
                        CURRENT_AREA = CENTRAL;
                        break;
                    case "South":
                        CURRENT_AREA = SOUTH_EAST;
                        break;
                }
                break;
            case SOUTH_EAST:
                switch(direction){
                    case "East":
                        break;
                    case "North":
                        CURRENT_AREA = EAST;
                        break;
                    case "West":
                        CURRENT_AREA = SOUTH_CENTRAL;
                        break;
                    case "South":
                        break;
                }
                break;
            }
        }
});

Crafty.scene("game_win", function(){
    GAME_FINISHED=true;
    var text = Crafty.e("2D, DOM, Text, Tween")
                .bind('KeyDown', function(){
                    Crafty.audio.stop('gameWinSfx');
                    Crafty.scene("main_menu");
                })
                .text("You Won!")
                .textFont({size: '100px', type: 'italic', family: 'Arial'})
                .attr({x: 600, y: 170, z:3, w:600});
    text.tween({x:350}, 200);
    setTimeout(function(){text.tween({x:200}, 1000);}, 200);
    setTimeout(function(){text.tween({x:-600}, 300);}, 1200);


});

Crafty.scene("game_lose", function(){
    GAME_FINISHED=true;
    if(SFX_VOL != 0) Crafty.audio.play("gameLossSfx", 1, SFX_VOL);
    var text = Crafty.e("2D, DOM, Text, Tween")
                .text("You Failed...")
                .textColor("#FF0000")
                .textFont({size: '100px', type: 'italic', family: 'Arial'})
                .attr({x: 600, y: 170, z:3, w:600});
    text.tween({x:350}, 200);
    setTimeout(function(){text.tween({x:200}, 1000);}, 200);
    setTimeout(function(){text.tween({x:-600}, 300);}, 1200);

    Crafty.e("2D, DOM, Color")
        .color("Black")
        .bind('KeyDown', function(){
            Crafty.scene("main_menu");
        })
        .attr({w: 952, h: 600});

});

Crafty.scene("options", function(){
    var selected = 1;

    Crafty.e("2D, DOM, Text")
        .text("Press Escape to return to the menu")
        .textFont("size", "20px")
        .attr({x: 275, y: 100, w: 500, h: 40});

    var selBox = Crafty.e("2D, DOM, Tween")
                    .attr({x: 170, y: 180, w: 565, h: 60})
                    .css({'border-radius': '3px', 'border': '5px solid white'})
                    .bind('KeyDown', function(e){
                        if(e.key == Crafty.keys["ESC"]){
                            saveAudioPrefs();
                            Crafty.scene("main_menu");
                        }
                    });

    //SFX Volume
    Crafty.e("2D, DOM, Text")
        .text("SFX Volume:")
        .textFont({size: '20px'})
        .attr({x: 220, y:205, w:200});
    var SFXreadout = Crafty.e("2D, DOM, Text")
        .text(function(){ return SFX_VOL*10; })
        .textFont({size: '20px'})
        .attr({x: 460, y:205, w:200});
    Crafty.e("2D, DOM, Color")
        .css({'border-radius': '3px', 'border': '5px solid black'})
        .attr({x: 495, y:195, w: 205, h:31});
    Crafty.e("2D, DOM, Color, Tween")
        .attr({x: 500 +(SFX_VOL*10*16), y: 200, w: 40, h: 25})
        .css({'border': '3px solid orange'})
        .color("Gold")
        .bind('KeyDown', function(e){
            if(e.key == Crafty.keys["DOWN_ARROW"]){
                selected = 2;
                selBox.tween({y:280}, 50);
            }
            else if(e.key == Crafty.keys["RIGHT_ARROW"] && selected == 1){
                if(SFX_VOL < 1.0){    
                    SFX_VOL += 0.1;
                    SFX_VOL = parseFloat(SFX_VOL.toFixed(1));
                    this.tween({x: 500+(SFX_VOL*160)}, 50);
                    SFXreadout.text(function(){ return SFX_VOL*10; });
                }
                if(SFX_VOL != 0) Crafty.audio.play("shiftForward", 1, SFX_VOL);

            }
            else if(e.key == Crafty.keys["LEFT_ARROW"] && selected == 1){
                if(SFX_VOL > 0.0){    
                    SFX_VOL -= 0.1;
                    SFX_VOL = parseFloat(SFX_VOL.toFixed(1));
                    this.tween({x: 500+(SFX_VOL*160)}, 50);
                    SFXreadout.text(function(){ return SFX_VOL*10; });
                }
                if(SFX_VOL != 0) Crafty.audio.play("shiftBack", 1, SFX_VOL);
            }
        });

    //OST Volume
    Crafty.e("2D, DOM, Text")
        .text("Music Volume:")
        .textFont({size: '20px'})
        .attr({x: 200, y:305, w:200});
    var OSTreadout = Crafty.e("2D, DOM, Text")
        .text(function(){ return OST_VOL*10; })
        .textFont({size: '20px'})
        .attr({x: 460, y:305, w:200});
    Crafty.e("2D, DOM, Color")
        .css({'border-radius': '3px', 'border': '5px solid black'})
        .attr({x: 495, y:295, w: 205, h:31});    
    Crafty.e("2D, DOM, Color, Tween")
        .attr({x: 500+(OST_VOL*160), y: 300, w: 40, h: 25})
        .css({'border': '3px solid orange'})
        .color("Gold")
        .bind('KeyDown', function(e){
            if(e.key == Crafty.keys["UP_ARROW"]){
                selected = 1;
                selBox.tween({y:180}, 50);
            }
            else if(e.key == Crafty.keys["RIGHT_ARROW"] && selected == 2){
                if(OST_VOL < 1.0){    
                    OST_VOL += 0.1;
                    OST_VOL = parseFloat(OST_VOL.toFixed(1));
                    this.tween({x: 500+(OST_VOL*160)}, 50);
                    OSTreadout.text(function(){ return OST_VOL*10; });
                    Crafty.audio.stop("BGM");
                    if(OST_VOL != 0) Crafty.audio.play("BGM", -1, OST_VOL*bgmScalar);
                }
                if(SFX_VOL != 0) Crafty.audio.play("shiftForward", 1, SFX_VOL);
            }
            else if(e.key == Crafty.keys["LEFT_ARROW"] && selected == 2){
                if(OST_VOL > 0.0){    
                    OST_VOL -= 0.1;
                    OST_VOL = parseFloat(OST_VOL.toFixed(1));
                    this.tween({x: 500+(OST_VOL*160)}, 50);
                    OSTreadout.text(function(){ return OST_VOL*10; });
                    Crafty.audio.stop("BGM");
                    if(OST_VOL != 0) Crafty.audio.play("BGM", -1, OST_VOL*bgmScalar);
                }
                if(SFX_VOL != 0) Crafty.audio.play("shiftBack", 1, SFX_VOL);
            }
        });
});