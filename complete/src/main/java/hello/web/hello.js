function Hello($scope, $http) {
	
    //$http.get('http://rest-service.guides.spring.io/greeting').
    $http.get('http://localhost:8080/greeting?name=Marcos').
        success(function(data) {
            $scope.greeting = data;
        });
}
