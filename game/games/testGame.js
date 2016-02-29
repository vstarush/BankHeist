app.factory('testGame',function($rootScope){
 
    var test_scene = {
            next_scene:function(){return test_scene_2;},
            scene_type:'simple',
            scene_text:'He killed that mutherfucker and dumped the body in a near by river'
        };
    
    var test_scene_2 = {
            next_scene:function(){return test_scene_7;},
            scene_text:'The police had no idea where to start the investigation'
        };
    
    var test_scene_7 = {
            next_scene:function(){return test_scene_8;},
            scene_text:'The police had no idea where to start the investigation_7'
        };
    
    var test_scene_8 = {
            next_scene:function(){return test_scene_9;},
            scene_text:'The police had no idea where to start the investigation_8'
        };
    
    var test_scene_9 = {
            next_scene:function(){return test_scene_3;},
            scene_text:'The police had no idea where to start the investigation_9'
        };
    
    var test_scene_3 = {
            next_scene:function(){return test_scene_gamble;},
            scene_text:'He is going at them with a gun. What should they do?'
        };
    
    var test_scene_4 = {
        next_scene:function(){return 'end';},
        scene_text:'They killed him',
    };
    
    var test_scene_5 = {
        next_scene:function(){return 'end';},
        scene_text:'He killed you'
    };
    
    var test_scene_choice = {
        next_scene:function(){return 'choice';},
        scene_text:'What should they do?',
        choice_one_text:'End Search',
        choice_two_text:'Continue Search',
        choice_one:function(){return test_scene_4;},
        choice_two:function(){return test_scene_5;},
        hide_options:function(){
            this.choice_one_text = '';
            this.choice_two_text = '';
        }
    };
    
    var test_scene_gamble ={
        next_scene:function(){return 'action';},
        scene_text:'What should they do?',
        choice_one_text:'Kill that mutherfucker with 2 shots',
        choice_two_text:'Capture him with bear hands',
        gamble_border:8,
        bullets_price:3,
        scene_win:function(){return test_scene_4;},
        scene_lose:function(){return test_scene_5;},
        choice_one:function(){return choice_gamble_result(this.scene_win(),this.scene_lose(),this.gamble_border,this.bullets_price);},
        choice_two:function(){return choice_gamble_result(this.scene_win(),this.scene_lose(),this.gamble_border,0);},
        hide_options:function(){
            this.choice_one_text = '';
            this.choice_two_text = '';
        }
    };
    
     var gamble_result_scene = {
        scene_type:'result_scene',
        scene_text:'The moment is going',
        next_scene_temp:null,
        next_scene:function(){return this.next_scene_temp;},
        set_scene_temp:function(result){this.next_scene_temp = result;},
        scene_timeout:10000
    };
    
    var choice_gamble_result = function(win_scene,lose_scene,border,bullets){
            //Checks if we shoot or not
            if(bullets>0){
                border = border-bullets;
                $rootScope.bullets -= bullets;
                if(border<0){
                    border = 0;
                }
            }
            // Generates the random number
            var gamble = Math.floor(Math.random() * (13 - 1) + 1);

            //Checks if we win or loose
            if(gamble>=border){
                gamble_result_scene.next_scene_temp = win_scene;
            }
            else{
                gamble_result_scene.next_scene_temp = lose_scene;
            }
            //returns the result scene into the 
            return gamble_result_scene;
        }
    
    
    return{
        test_scene:function(){return test_scene;},
        test_scene_2:function(){return test_scene_2;},
        test_scene_3:function(){return test_scene_3;},
        test_scene_4:function(){return test_scene_4;},
        test_scene_5:function(){return test_scene_5;},
        test_scene_gamble:function(){return test_scene_gamble;},
        gamble_result_scene:function(){return gamble_result_scene;}
    };
});