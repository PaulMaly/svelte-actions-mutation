(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.actionsMutation = factory());
}(this, function () { 'use strict';

	function index (node, options) {
		let observer = null;

		function update(options = {}) {
			destroy();
			observer = new MutationObserver(mutations => {
				mutations.forEach(m => options[m.type] && options[m.type](m));
			});
			observer.observe(node, options);
		}

		function destroy() {
			observer && observer.disconnect();
			observer = null;
		}

		update(options);

		return { update, destroy };
	}

	return index;

}));
