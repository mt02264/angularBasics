var controllers = {};
controllers.simpleController = function ($scope, simpleFactory) {
	$scope.customers = [];
	init();

	function init(){
		$scope.customers = simpleFactory.getCustomers();
	}
	$scope.addCustomer = function (){
		$scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city});
	};
};

controllers.simpleController2 = function ($scope) {
	$scope.capitals = [
	{
	  country: 'Pakistan',
	  capital: 'Islamabad'
	},
	{
	  country: 'India',
	  capital: 'New Delhi'
}];
};

controllers.phonesController = function ($scope, $http) {
	var onSuccess = function(data, status, headers, config){
		$scope.data = data.data.users;
		console.log($scope.data);
	}
	var onError = function(data, status, headers, config){
		$scope.error = status;
	}
	var response = $http.get('/app/data/phones.json');
	response.then(onSuccess, onError);
	// console.log(response.value.data.users);
};
demoApp.controller(controllers);
