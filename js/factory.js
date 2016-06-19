var AnimalFactory = function () {

	var constructors =  {
		"Lion" : function () {
			//constructor for lion
			console.log('lion');
		},
		"Tiger": function () {
			//constructor for tiger
			console.log('tiger');
		},
		"Bear": function () {
			//constructor for bear
			console.log('bear');
		}
	};

	return {
		createNewAnimal : function (type) {
			constructors[type]();
		}
	} 
};

var factory = new AnimalFactory();

factory.createNewAnimal("Tiger");