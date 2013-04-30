// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.

window.jdls = window.jdls || {};

(function() {
	"use strict";

	var ObjectGraph = jdls.ObjectGraph = function ObjectGraph(name, root) {
		this._nodes = [];
		traverse(this, new jdls.ObjectNode(name, root));
	};

	ObjectGraph.prototype.nodes = function nodes() {
		return this._nodes;
	};

	function traverse(self, node) {
		if (hasNode(self, node)) return;

		addNode(self, node);
		node.forEachSubNode(function(subnode) {
			if (!isBuiltin(subnode)) traverse(self, subnode);
		});
	}

	function hasNode(self, node) {
		var matchingNodes = self._nodes.filter(function(element) {
			return element.equals(node);
		});
		if (matchingNodes.length > 1) throw new Error("Node [" + node.title() + "] was stored multiple times; that should be impossible");
		return matchingNodes.length === 1;
	}

	function addNode(self, node) {
		self._nodes.push(node);
	}

	function isBuiltin(node) {
		return node.name() === "Object" ||
			node.name() === "Array" ||
			node.type() === "Function";
	}

}());