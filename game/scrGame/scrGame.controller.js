app.controller('scrGameController', function($rootScope,$scope,$location, $anchorScroll,testGame){
    
    $scope.completed_scenes = [];
    $rootScope.bullets = 5;
    
        
    // starts the game
    $scope.start_game = function(){
        $scope.game_function(testGame.scene_1());
    };

    $scope.game_function = function(scene){
        //console.log(scene);
        
        // checks if previous scene was a choice and if yes hides the buttons
        if($scope.completed_scenes.length>1 && $scope.completed_scenes[$scope.completed_scenes.length-1].hide_options !== undefined){
            $scope.completed_scenes[$scope.completed_scenes.length-1].hide_options();
        }
        
        // pushes scenes to the array of played scenes
        $scope.completed_scenes.push(scene);
        
        //scrolling to the last element in array
        $location.hash($scope.completed_scenes.length-1);
        $anchorScroll();
        
        //checks if the scene is final or is a choice or is a simple since
        if(scene.next_scene() === 'end'){
            
            return 'end';
        }
        else if(scene.next_scene() === 'choice' || scene.next_scene() === 'action'){   
        }
        else if(scene.scene_type !== undefined && scene.scene_type === 'result_scene'){
            $scope.animation_trigger = 'is active';
            
            setTimeout(function(){
                $scope.game_function(scene.next_scene())
                $scope.$apply();
            },1000);
        }
        else{
            setTimeout(function(){
                $scope.game_function(scene.next_scene())
                $scope.$apply();
            },4000);
            
            
        }         
    }
});

        
//        var all_game_containers = document.getElementsByClassName('game_text_container');
//        var last_element = all_game_containers[all_game_containers.length-1];
//        console.log(all_game_containers);
//        console.log(last_element);
//        if(last_element !== undefined){
//            last_element.scrollIntoView();
//        } 