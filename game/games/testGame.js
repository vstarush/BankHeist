app.factory('testGame',function($rootScope){
 
    var scene_1 = {
            next_scene:function(){return scene_2;},
            scene_type:'simple',
            scene_text:'There are no right or wrong choices'
        };
    
    var scene_2 = {
            next_scene:function(){return scene_3;},
            scene_type:'simple',
            scene_text:'There are only actions. And consequences you face later'
        };
    
    var scene_3 = {
            next_scene:function(){return scene_4;},
            scene_type:'simple',
            scene_text:'And if the consequences are bad…'
        };
    
    var scene_4 = {
            next_scene:function(){return scene_5;},
            scene_type:'simple',
            scene_text:'That is when you start thinking'
        };
    
    var scene_5 = {
            next_scene:function(){return scene_6;},
            scene_type:'simple',
            scene_text:'"Maybe I made a wrong choice."'
        };
    
    var scene_6 = {
            next_scene:function(){return scene_7;},
            scene_type:'simple',
            scene_text:'The reality is, my friend, you don’t know...'
        };
    
    var scene_7 = {
            next_scene:function(){return scene_8;},
            scene_type:'simple',
            scene_text:'What would have happened, if you followed a different path'
        };
    
    var scene_8 = {
            next_scene:function(){return scene_9;},
            scene_type:'simple',
            scene_text:'And you’ll never know…'
        };
    
    var scene_9 = {
            next_scene:function(){return scene_10;},
            scene_type:'simple',
            scene_text:'Or will you?…'
        };
    
    var scene_10 = {
            next_scene:function(){return scene_11;},
            scene_type:'simple',
            scene_text:'"I still don’t know if you can be trusted or not"'
        };
    
    var scene_11 = {
            next_scene:function(){return scene_12;},
            scene_type:'simple',
            scene_text:'"Here’s a gun. Show me you’r ain’t a pussy.”'
        };
    
    var scene_12 = {
            next_scene:function(){return scene_13;},
            scene_type:'simple',
            scene_text:'A man with a sack on his head in front of you. The man is sobbing “Please…please no…please..”'
        };
    
    var scene_13 = {
            next_scene:function(){return 'choice';},
            scene_text:'Choose your actions',
            choice_one_text:'Remain calm',
            choice_two_text:'Hit the man to shut up',
            choice_one:function(){return scene_15;},
            choice_two:function(){return scene_14;},
            hide_options:function(){
                this.choice_one_text = '';
                this.choice_two_text = '';
            }
        };
    
    var scene_14 = {
            next_scene:function(){return scene_15;},
            scene_type:'simple',
            scene_text:'SHUTTT UP!!! *You give a man a hard kick on the head*'
        };
    
    var scene_15 = {
            next_scene:function(){return scene_16;},
            scene_type:'simple',
            scene_text:'“I see you are a tough guy”'
        };
    
    var scene_16 = {
            next_scene:function(){return scene_17;},
            scene_type:'simple',
            scene_text:'"Go on, finish him. I need to know if I can trust you"'
        };
    
    var scene_17 = {
            next_scene:function(){return 'choice';},
            scene_text:'Choose your actions',
            choice_one_text:'Shoot the sobbing man',
            choice_two_text:'Kill the man giving orders',
            choice_one:function(){return scene_18;},
            choice_two:function(){return scene_18;},
            hide_options:function(){
                this.choice_one_text = '';
                this.choice_two_text = '';
            }
        };
    
    var scene_18 = {
            next_scene:function(){return scene_19;},
            scene_type:'simple',
            scene_text:'"Click"'
        };
    
    var scene_19 = {
            next_scene:function(){return scene_20;},
            scene_type:'simple',
            scene_text:'"Click" "Click" "Click"'
        };
    
    var scene_20 = {
            next_scene:function(){return scene_21;},
            scene_type:'simple',
            scene_text:'"Ahahahhahahahaha"'
        };
    
    var scene_21 = {
            next_scene:function(){return scene_22;},
            scene_type:'simple',
            scene_text:'"Did you think I would give you a loaded gun?!"'
        };
    
    var scene_22 = {
            next_scene:function(){return scene_23;},
            scene_type:'simple',
            scene_text:'"Now I know what you are made of"'
        };
    
    var scene_23 = {
            next_scene:function(){return scene_24;},
            scene_type:'simple',
            scene_text:'*Pulls out the gun, points at the sobbing man and shoots*'
        };
    
    var scene_24 = {
            next_scene:function(){return scene_25;},
            scene_type:'simple',
            scene_text:'*Man falls dead*'
        };
    
    var scene_25 = {
            next_scene:function(){return scene_26;},
            scene_type:'simple',
            scene_text:'"Give or take life? That is not you to decide..."'
        };
    
    var scene_26 = {
            next_scene:function(){return 'end';},
            scene_type:'simple',
            scene_text:'"Yet..."'
        };
    
    
    //--------------------------------------
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
        scene_text:'Make your choice:',
        choice_one_text:'Kill that mutherfucker',
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
        gamble_result:null,
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
        
            gamble_result_scene.gamble_result = gamble;
        
            
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
        scene_1:function(){return scene_1;},
        scene_2:function(){return scene_2;},
        scene_3:function(){return scene_3;},
        scene_4:function(){return scene_4;},
        scene_5:function(){return scene_5;},
        scene_6:function(){return scene_6;},
        scene_7:function(){return scene_7;},
        scene_8:function(){return scene_8;},
        scene_9:function(){return scene_9;},
        scene_10:function(){return scene_10;},
        scene_11:function(){return scene_11;},
        scene_12:function(){return scene_12;},
        scene_13:function(){return scene_13;},
        scene_14:function(){return scene_14;},
        scene_15:function(){return scene_15;},
        scene_16:function(){return scene_16;},
        scene_17:function(){return scene_17;},
        scene_18:function(){return scene_18;},
        scene_19:function(){return scene_19;},
        scene_20:function(){return scene_20;},
        scene_21:function(){return scene_21;},
        scene_22:function(){return scene_22;},
        scene_23:function(){return scene_23;},
        scene_24:function(){return scene_24;},
        scene_25:function(){return scene_25;},
        scene_26:function(){return scene_26;},
        test_scene_gamble:function(){return test_scene_gamble;},
        gamble_result_scene:function(){return gamble_result_scene;}
    };
});