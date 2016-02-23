app.controller('scrGameController', function($rootScope, $scope){
    
    $scope.testMessage = 'This is Game Test';
    
    $scope.numbers = [];
    var counter = 0;
    
    $scope.AddNumber = function(){
        $scope.numbers.push(counter);
        counter+=1;
        $scope.$apply();
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