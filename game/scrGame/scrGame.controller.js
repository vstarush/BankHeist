app.controller('scrGameController', function($rootScope, $scope){
    
    $scope.completed_scenes = [];

    function game_function(scene){
        
        $scope.completed_scenes.push(scene);
        //$scope.$apply();
        //console.log($scope.completed_scenes.length);
        
        if(scene.next_scene() === 'end'){
            return 'end';
        }
        
//        var all_game_containers = document.getElementsByClassName('game_text_container');
//        var last_element = all_game_containers[all_game_containers.length-1];
//        last_element.scrollIntoView();
        
        setTimeout(function(){
            game_function(scene.next_scene())
            $scope.$apply();
        },scene.scene_timeout);        
    }
    
    $scope.start_game = function(){
        game_function(test_scene);
    };
    
    
    
      
    var test_scene = {
        scene_id:1,
        next_scene:function(){
            return test_scene_2;
        },
        scene_type:'simple',
        scene_text:'He killed that mutherfucker and dumped the body in a near by river',
        scene_timeout:4000
    };
    
    var test_scene_2 = {
        scene_id:2,
        next_scene:function(){
            return test_scene_3;
        },
        scene_type:'simple',
        scene_text:'The police had no idea where to start the investigation',
        scene_timeout:2000
    };
    
    var test_scene_3 = {
        scene_id:3,
        next_scene:function(){
            return 'end';
        },
        scene_type:'simple',
        scene_text:'The search brought no results',
        scene_timeout:2000
    };
    
});



//$scope.testMessage = 'This is Game Test';

    //var scene_counter = 0;
    
//    $scope.AddNumber = function(current_scene){
//        $scope.completed_scenes.push(current_scene);
//        //counter+=1;
//        $scope.$apply();
//        var all_game_containers = document.getElementsByClassName('game_text_container');
//        var last_element = all_game_containers[all_game_containers.length-1];
//        last_element.scrollIntoView();
//    };


//    $scope.ActivateInterval = function(){
//        setInterval($scope.AddNumber(),4000);
//    }

/*
SceneName = {
    callToAction:'',
    choiceType:'',
    description:'',
    nextSceneOne:'',
    nextSceneTwo:'',
    showTimeOut:''
}

CurrentScene = SceneName;

function playgame(){
    
}

function call(scene){
    
}
*/