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

export default index;
