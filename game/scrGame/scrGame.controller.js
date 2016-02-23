app.controller('scrGameController', function($rootScope, $scope){
    
    $scope.testMessage = 'This is Game Test';
    
    $scope.numbers = [];
    var counter = 0;
    
    $scope.AddNumber = function(){
        $scope.numbers.push(counter);
        counter+=1;
        $scope.$apply();
        var all_game_containers = document.getElementsByClassName('game_text_container');
        all_game_containers[all_game_containers.length-1].scrollIntoView();
    };
    
    $scope.ActivateInterval = function(){
        setInterval($scope.AddNumber,4000);
    }
});

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