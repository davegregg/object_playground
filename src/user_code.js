// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.

window.jdls = window.jdls || {};

// Functions related to user-entered code.
(function() {
	"use strict";

	var exports = window.jdls.usercode = {};
	var samples = exports.samples = {};

	exports.evaluate = function evaluate(code) {
		/*jshint evil:true, newcap: false */
    const objectWrapper = {};
    const VISUALIZE = valueToInspect => Object.assign(objectWrapper, {
      value: valueToInspect
    })

		eval(code);
		return objectWrapper;
	};

	samples.prototypeSyntax = { name: "Prototype Syntax", code: '// Enter some JavaScript and then click the "Evaluate" button.\n' +
		'// In order to see a visual representation of an object, you must pass your object to the `VISUALIZE()` function like so: `VISUALIZE(myObject)`\n\n' +
`// EXAMPLE of Prototype Syntax:
function User (name, age, email) {
  this.name = name
  this.age = age
  this.email = email
}

User.prototype = {
  constructor: User,

  login() {},
  logout() {},
  changeEmail() {},
  changePassword() {},
}

const sherbert = new User('Sherbert Aurelius Bagphone', '36', 'user@example.com')
VISUALIZE(sherbert)\n`
	};

	samples.prototypeSyntaxWithInheritance = { name: "Prototype Syntax w/ Inheritance", code: '// Enter some JavaScript and then click the "Evaluate" button.\n' +
  '// In order to see a visual representation of an object, you must pass your object to the `VISUALIZE()` function like so: `VISUALIZE(myObject)`\n\n' +
`// EXAMPLE of Prototype Syntax w/ Inheritance:
function User (name, age, email) {
  this.name = name
  this.age = age
  this.email = email
}

User.prototype = {
  constructor: User,

  login() {},
  logout() {},
  changeEmail() {},
  changePassword() {},
}

function AdminUser (name, age, email, permissionLevel = 1) {
  User.call(this, name, age, email)
  this.permissionLevel = permissionLevel
}

AdminUser.prototype = Object.create(User.prototype)
AdminUser.prototype.constructor = AdminUser

AdminUser.prototype.banUser = function banUser (user) {}

const gooseberry = new AdminUser('Gooseberry J. Rotaryphone', '32', 'user@example.com', 3)
VISUALIZE(gooseberry)\n`
  };

	samples.classSyntax = { name: "Class Syntax", code: '// Enter some JavaScript and then click the "Evaluate" button.\n' +
  '// In order to see a visual representation of an object, you must pass your object to the `VISUALIZE()` function like so: `VISUALIZE(myObject)`\n\n' +
`// EXAMPLE of Class Syntax:
class User {
  constructor (name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  login() {}
  logout() {}
  changeEmail() {}
  changePassword() {}
}

const sherbert = new User('Sherbert Aurelius Bagphone', '36', 'user@example.com')
VISUALIZE(sherbert)\n`
	};



	samples.classSyntaxWithInheritance = { name: "Class Syntax w/ Inheritance", code: '// Enter some JavaScript and then click the "Evaluate" button.\n' +
  '// In order to see a visual representation of an object, you must pass your object to the `VISUALIZE()` function like so: `VISUALIZE(myObject)`\n\n' +
`// EXAMPLE of Class Syntax w/ Inheritance:
class User {
  constructor (name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  login() {}
  logout() {}
  changeEmail() {}
  changePassword() {}
}

class AdminUser extends User {
  constructor (name, age, email, permissionLevel = 1) {
    super(name, age, email)
    this.permissionLevel = permissionLevel
  }
  
  banUser (user) {}
}

const gooseberry = new AdminUser('Gooseberry J. Rotaryphone', '32', 'user@example.com', 3)
VISUALIZE(gooseberry)\n`
	};

	exports.DEFAULT_SAMPLE = samples.prototypeSyntax;

}());