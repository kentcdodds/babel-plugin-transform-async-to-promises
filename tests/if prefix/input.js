async function(foo) {
	const result = await foo();
	if (result) {
		return 1;
	} else {
		return 0;
	}
}
