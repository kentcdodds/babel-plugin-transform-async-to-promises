async function(left, right) {
	return await left() + 1 && right();
}
