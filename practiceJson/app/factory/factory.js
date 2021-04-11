demoApp.factory('simpleFactory', function(){
	var customers = [
	  {name: 'Tahir', city: 'Phoenix'}, 
	  {name: 'John Smith', city: 'Arizona'}, 
	  {name: 'John', city: 'Karachi'}
	];
	var factory = {};
	factory.getCustomers = function(){
	  return customers;
	};
	return factory;
});
