// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
/*global Viz */

window.jdls = window.jdls || {};

// Functions for turning an object graph into SVG.
(function() {
	"use strict";

	var exports = window.jdls.viz = {};
	var details = exports.details = {};

	exports.render = function render(rootName, object, options) {
		return details.vizToSvg(details.graphToViz(new jdls.ObjectGraph(rootName, object, options)));
	};

	details.vizToSvg = function vizToSvg(vizCode) {
		/*jshint newcap:false */
		return Viz(vizCode, "svg");
	};

	details.graphToViz = function graphToViz(graph) {
		return '' +
			'digraph g {\n' +
			'  graph [\n' +
			'    rankdir = "LR"\n' +
			'  ];\n' +
			'  node [\n' +
			'    fontsize = "12"\n' +
			'    shape = "plaintext"\n' +   // 'plaintext' is misnamed; it enables HTML-like formatting
			'  ];\n' +
			'  edge [];\n' +
			nodes() +
			edges() +
			'}\n';

		function nodes() {
			return graph.nodes().map(function(node) {
				return details.nodeToViz(node);
			}).join("");
		}

		function edges() {
			return graph.edges().map(function(edge) {
				return details.edgeToViz(edge);
			}).join("");
		}
	};

	details.nodeToViz = function nodeToViz(node) {
		return '' +
			'"' + node.id() + '" [\n' +
			'label = "' + '<title>' + escape(node.title()) + fields() + '"\n' +
			'shape = "record"' +
			'];\n';

		function fields() {
			var result = "";
			node.forEachField(function(name, value, id) {
				result += '| <' + id + '> ' + escape(name) + ': ' + escape(value);
			});
			return result;
		}
	};

	details.edgeToViz = function edgeToViz(edge) {
		return '"' + edge.from.id() + '":' + edge.fromField + ' -> "' + edge.to.id() + '":title [];';
	};

	var escape = details.escape = function escape(name) {
		return name.
			replace(/\\/g, '\\\\').
			replace(/\{/g, "\\{").
			replace(/\}/g, "\\}").
			replace(/</g, "\\<").
			replace(/>/g, "\\>").
			replace(/\|/g, '\\|').
			replace(/\"/g, '\\"').
			replace(/\n/g, '\\n').
			replace(/\t/g, ' ');
	};

}());
