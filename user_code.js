// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.

window.jdls = window.jdls || {};

// Functions related to user-entered code.
(function() {
	"use strict";

	var exports = window.jdls.usercode = {};
	var samples = exports.samples = {};

	exports.evaluate = function evaluate(code) {
		/*jshint evil:true, newcap: false */
    var context = {};
    const output = objectToInspect => context = objectToInspect

		eval(code); // Function(code).call(context);
		return context;
	};

	samples.instructions = { name: "Instructions", code: '// Enter JavaScript code in this box and then click the "Evaluate" button.\n' +
		'// In order to see the output correctly, you must pass your object to the `output()` function exactly like so:.\n' +
		'// `output({ nameOfObject })` – notice the { and }.\n' +
		'\n' +
		'// Example:\n' +
`function Animal (name, size) {
  this.name = name
  this.size = size
}

Animal.prototype = {
  constructor: Animal,
  eat() {},
  sleep() {},
  defecate() {},
}

function Dog (name, size, breed) {
  Animal.call(this, name, size)
  this.breed = breed
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype)

Dog.prototype.bark = function bark () {}
Dog.prototype.fetch = function fetch () {}

const fido = new Dog('Fido', 'medium', 'labrador retriever')
output({ fido })\n`
	};

	// samples.es5class = { name: "ES5 Class", code: '// Constructor\n' +
	// 	'function MyClass() {\n' +
	// 	'  this.a = 42;\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Method\n' +
	// 	'MyClass.prototype.method = function method() {};\n' +
	// 	'\n' +
	// 	'// Instantiate\n' +
	// 	'this.instance = new MyClass();\n'
	// };

	// samples.es6class = { name: "ES6 Class", code: '// This example only works on browsers that support ES6 classes\n' +
	// 	'\n' +
	// 	'// Class\n' +
	// 	'class MyClass {\n' +
	// 	'\n' +
	// 	'  // Constructor\n' +
	// 	'  constructor() {\n' +
	// 	'    this.a = 42;\n' +
	// 	'  }\n' +
	// 	'\n' +
	// 	'  // Method\n' +
	// 	'  method() {}\n' +
	// 	'\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Instantiate\n' +
	// 	'this.instance = new MyClass();\n'
	// };

	// samples.es5inheritance = { name: "ES5 Inheritance", code: '// Parent class constructor\n' +
	// 	'function Parent() {\n' +
	// 	'  this.a = 42;\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Parent class method\n' +
	// 	'Parent.prototype.method = function method() {};\n' +
	// 	'\n' +
	// 	'// Child class constructor\n' +
	// 	'function Child() {\n' +
	// 	'  Parent.call(this);\n' +
	// 	'  this.b = 3.14159\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Inherit from the parent class\n' +
	// 	'Child.prototype = Object.create(Parent.prototype);\n' +
	// 	'Child.prototype.constructor = Child;\n' +
	// 	'\n' +
	// 	'// Child class method\n' +
	// 	'Child.prototype.method = function method() {\n' +
	// 	'  Parent.prototype.method.call(this);\n' +
	// 	'};\n' +
	// 	'\n' +
	// 	'// Instantiate\n' +
	// 	'this.instance = new Child();\n'
	// };

	// samples.es6inheritance = { name: "ES6 Inheritance", code: '// This example only works on browsers that support ES6 classes\n' +
	// 	'\n' +
	// 	'// Parent class\n' +
	// 	'class Parent {\n' +
	// 	'\n' +
	// 	'  // Parent class constructor\n' +
	// 	'  constructor() {\n' +
	// 	'    this.a = 42;\n' +
	// 	'  }\n' +
	// 	'\n' +
	// 	'  // Parent class method\n' +
	// 	'  method() {}\n' +
	// 	'\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Child class inherits from Parent\n' +
	// 	'class Child extends Parent {\n' +
	// 	'\n' +
	// 	'  // Child class constructor\n' +
	// 	'  constructor() {\n' +
	// 	'    super();\n' +
	// 	'    this.b = 3.14159;\n' +
	// 	'  }\n' +
	// 	'\n' +
	// 	'  // Child class method\n' +
	// 	'  method() {\n' +
	// 	'    super.method();\n' +
	// 	'  }\n' +
	// 	'\n' +
	// 	'}\n' +
	// 	'\n' +
	// 	'// Instantiate\n' +
	// 	'this.instance = new Child();\n'
	// };

	// samples.inception = { name: "Inception!", code: 'this.jdls = jdls;\n' +
	// 	'\n' +
	// 	'// Can you figure out what the following line does?\n' +
	// 	'// Caution: It\'s commented out because some people have\n' +
	// 	'// reported their browser crashes when this line runs. D\'oh!\n' +
	// 	'\n' +
	// 	'// this.inception = new jdls.ObjectGraph("root", jdls);\n'
	// };

	exports.DEFAULT_SAMPLE = samples.instructions;

}());