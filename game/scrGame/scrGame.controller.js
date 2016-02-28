app.controller('scrGameController', function($rootScope,$scope,testGame){
    
    $scope.completed_scenes = [];
    $rootScope.bullets = 5;
    
        
    // starts the game
    $scope.start_game = function(){
        $scope.game_function(testGame.test_scene());
    };

    $scope.game_function = function(scene){
        //console.log(scene);
        
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
        else if(scene.next_scene() === 'choice' || scene.next_scene() === 'action'){   
        }
        else if(scene.scene_type !== undefined && scene.scene_type === 'result_scene'){
            $scope.animation_trigger = 'is active';
            
            setTimeout(function(){
                $scope.game_function(scene.next_scene())
                $scope.$apply();
            },scene.scene_timeout);
        }
        else{
            setTimeout(function(){
                $scope.game_function(scene.next_scene())
                $scope.$apply();
            },scene.scene_timeout);
        }
        
        var all_game_containers = document.getElementsByClassName('game_text_container');
        var last_element = all_game_containers[all_game_containers.length-1];
        if(last_element !== undefined){
            last_element.scrollIntoView();
        }          
    }
});