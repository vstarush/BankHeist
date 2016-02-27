app.controller('scrGameController', function($rootScope, $scope){
    
    $scope.completed_scenes = [];

    $scope.game_function = function(scene){
        // checks if previous scene was a choice and if yes hides the buttons
        if($scope.completed_scenes.length>1 && $scope.completed_scenes[$scope.completed_scenes.length-1].hide_options !== undefined){
            $scope.completed_scenes[$scope.completed_scenes.length-1].hide_options();
        }
        
        // pushes scenes to the array of played scenes
        $scope.completed_scenes.push(scene);
        
        //checks if the scene is final or is a choice or is a simple since
        if(scene.next_scene() === 'end'){
            return 'end';
        }
        else if(scene.next_scene() === 'choice'){   
        }
        else{
            setTimeout(function(){
                $scope.game_function(scene.next_scene())
                $scope.$apply();
            },scene.scene_timeout);
        }
        
//        var all_game_containers = document.getElementsByClassName('game_text_container');
//        var last_element = all_game_containers[all_game_containers.length-1];
//        last_element.scrollIntoView();
                     
    }
    
    // starts the game
    $scope.start_game = function(){
        $scope.game_function(test_scene);
    };
    
    
    var test_scene = {
        next_scene:function(){return test_scene_2;},
        scene_type:'simple',
        scene_text:'He killed that mutherfucker and dumped the body in a near by river',
        scene_timeout:4000
    };
    
    var test_scene_2 = {
        next_scene:function(){return test_scene_3;},
        scene_text:'The police had no idea where to start the investigation',
        scene_timeout:2000
    };
    
    var test_scene_3 = {
        next_scene:function(){return test_scene_choice;},
        scene_text:'The search brought no results',
        scene_timeout:2000
    };
    
    var test_scene_choice = {
        next_scene:function(){return 'choice';},
        scene_text:'What should they do?',
        scene_timeout:2000,
        choice_one_text:'End Search',
        choice_two_text:'Continue Search',
        choice_one:function(){return test_scene_4;},
        choice_two:function(){return test_scene_5;},
        hide_options:function(){
            this.choice_one_text = '';
            this.choice_two_text = '';
        }
    };
    
    var test_scene_4 = {
        next_scene:function(){return 'end';},
        scene_text:'The search brought no results',
        scene_timeout:2000
    };
    
    var test_scene_5 = {
        next_scene:function(){return 'end';},
        scene_text:'The search brought no resultsbut they kept on searching and finally found the body',
        scene_timeout:2000
    };
    
});