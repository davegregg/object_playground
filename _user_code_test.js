// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
(function() {
	"use strict";

	describe("user code", function() {
		var evaluate;
		var samples;

		beforeEach(function() {
			evaluate = jdls.usercode.evaluate;
			samples = jdls.usercode.samples;
		});

		it("evaluates to an object", function() {
			var code = "" +
				"this.foo = {" +
				"  a: 1," +
				"  b: 2" +
				"}";

			expect(evaluate(code)).to.eql({
				foo: {
					a: 1,
					b: 2
				}
			});
		});

		describe("samples", function() {
			function check(sample) {
				try {
					evaluate(sample.code);
				}
				catch (ex) {
					dump("Error while compiling " + sample.name);
					throw ex;
				}
			}

			it("all compile", function() {
				/*jshint forin:false */
				for (var sampleName in samples) {
					var sample = samples[sampleName];
					check(sample);
				}
			});
		});

	});

}());