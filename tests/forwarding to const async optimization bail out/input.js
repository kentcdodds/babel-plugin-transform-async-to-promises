function(value) {
	const add = (l, r) => l + r;
	return async (foo) => add(1, foo);
}
