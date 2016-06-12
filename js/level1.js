//Level 1
//Objects: basic object creation using object literal syntax
var person = {
	name : "fred",

	getName : function () {
		//the keyword this in javascript always refers to the currently executing object -- in this context it happens to be the person obj
		return this.name;
	},
	setName : function(name) {
		this.name = name;
	},
	//this anonomyous inner funtion will not have the proper this context
	changeName: function () {
		(function () {
			this.name = 'donatello';
		})();
	}
};

person.getName(); //fred
person.setName('phil');
person.getName(); //phil
person.changeName(); 
person.getName(); //phil
console.log(this.name); // donatello


//inside that changeName() function this referred to the global window object.
//as a result we set a name property on the window to value 'donatello'
//there are a couple ways we can have changeName() modify the person object's name value
//like we want:

//use bind() to pass in the context of this that we want.
person.changeName2 = function () {
	(function () {
		this.name = 'donatello';
	}).bind(this)();
};

person.changeName2();
person.getName(); //donatello

//or

person.changeName3 = function () {
	var self = this;
	(function () {
		self.name = 'leonardo';
	})();
};

person.changeName3();
person.getName(); //leonardo


//objects are passed by reference
var foo = {
	bar : 'hello'
};

//assigning 'a' to 'foo' here means that 'a' now holds a reference to the same object 'foo' is refering to
var a = foo;

//when we change a property on 'foo' the same change will be reflected on 'a' since both vars refer to same object
foo.bar = 'goodbye';
console.log(a.bar); //goodbye


//basic object inheritance
function Mammal() {
	this.fur = 'generic mammal fur';
}

Mammal.prototype.move = function () {
	console.log('walking like a mammal')
};

function Tiger () {
	Mammal.call(this);
	this.fur = 'stripes like a tiger';
}

Tiger.prototype = Object.create(Mammal.prototype);
Tiger.prototype.constructor = Tiger;

var tiger = new Tiger();

console.log('is tiger an instance of Tiger?', tiger instanceof Tiger); //true
console.log('is tiger an instance of Mammal?', tiger instanceof Mammal); //true

tiger.move();

Tiger.prototype.move = function () {
	console.log('on the prowl like a tiger');
};

tiger.move();

console.log(tiger.fur);